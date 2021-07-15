---
layout: post
title:  "Angular Swpie tap 만들기(1)"
date:   2017-11-03 07:36:00
categories: angular
highlight: false
image: https://image.prntscr.com/image/nP3uRJtOT3m3VruUUvMNlA.jpeg
description: Angular4 Touch로 스와이프 되는 탭만들기 
color: 'seagreen'
---

####Angular Swpie tap
모바일에서 touch로 탭의 컨텐츠를 이동하는 기능입니다.  
본 소스는 touch 위주이며 PC에서 사용하려면 mouse나 drag이벤트를 사용해서 만들어야 합니다.  

[Demo](https://embed.plnkr.co/ykm8dl/)  
[Github Source](https://github.com/lomi525/swipe-tab)
 

##### 프로젝트 생성
{% highlight bash %}
ng new swpie-tab
{% endhighlight %}

###### 컴포넌트 생성
{% highlight bash %}
ng g component screen
ng g component wrap
ng g component item
{% endhighlight %}

###### 디렉티브 생성
{% highlight bash %}
ng g directive drag
{% endhighlight %}


![](https://image.prntscr.com/image/QpYXHt7aRSmYY2TRxNjK3A.jpeg)

#### Layout 구성
app-screen > app-wrap > [app-item,app-item,app-item]  
이런 구조로 컴포넌트를 배열시킨다.

- app-screen : 화면 영역
- app-wrap : 스와이프 영역 
- app-item : 컨텐츠 영역 3개 존재

![Layout](https://image.prntscr.com/image/oX-QzhbZTTKuZae0DzUS6A.jpeg)

#### WrapComponent에 swipe 되는 directive 추가
- wrap 는 부모(screen)의 3배의 크기를 갖는다.
- item 은 screen 크키를 갖는다.
- item 은 float:left

{% highlight typescript%}
 import { Directive, HostListener, Renderer, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  touchmoveListenFunc: Function = null;
  touchendListenFunc: Function = null;
  touchcancelListenFunc: Function = null;
  oversize = 80;
  containerWidth: number = 0;
  touchX: number = 0;
  moveX: number = 0;
  positionX: number = 0;
  arrow: number = 0;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.containerWidth = this.elementRef.nativeElement.parentElement.offsetWidth;
    this.childrenResize();

    //윈도우 크키변경시
    this.renderer.listen(window, 'resize', (e) => {
      this.containerWidth = this.elementRef.nativeElement.parentElement.offsetWidth;
      this.childrenResize();
    });
  }
  /**
   * Child Element 가 생성되었을때 
   */
  ngAfterContentInit() {
    this.childrenResize();
  }

  /**
   * Touch  시작
   * @param event 
   */
  @HostListener('touchstart', ['$event'])
  onStart(event) {
    if (event.touches) {
      this.touchX = event.touches[0].clientX;
      this.removePreviousTouchListeners();
      this.touchmoveListenFunc = this.renderer.listen(event.target, 'touchmove', (e) => { this.onMove(e); });
      this.touchendListenFunc = this.renderer.listen(event.target, 'touchend', (e) => { this.removePreviousTouchListeners(); this.onEnd(e); });
      this.touchcancelListenFunc = this.renderer.listen(event.target, 'touchcancel', (e) => { this.removePreviousTouchListeners(); this.onEnd(e); });
    }
  }

  // @HostListener('touchmove', ['$event'])
  onMove(event) {
    if (event.touches) {
      this.moveX = event.touches[0].clientX - this.touchX;      //움직인 거리
      //wrap 컴포넌츠를 transform 으로 이동시킴
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'transition', null);
      this.renderer.setElementStyle(this.elementRef.nativeElement, '-webkit-transform', 'translate3d(' + (this.positionX + this.moveX) + 'px,0px,0px)');
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'transform', 'translate3d(' + (this.positionX + this.moveX) + 'px,0px,0px)');
    }
  }


  // @HostListener('touchend', ['$event'])     
  // @HostListener('touchcancel', ['$event']) 
  onEnd(event) {
          //움직이는 크기자 다음페이지로 넘어갈수 있는지 확인
    if (Math.abs(this.moveX) > this.oversize) {
            //양수면 오른쪽, 음수면 왼쪽으로 이동
      this.next(this.moveX > 0 ? 1 : -1);
    }
    else {
        //자기자리로 이동함
        this.next(0);
    }
  }


  /**
   * Dom Animation이 끝난후에 작업
   * @param event 
   */
  @HostListener('animationend', ['$event'])
  @HostListener('webkitAnimationEnd', ['$event'])
  @HostListener('MSAnimationEnd', ['$event'])
  @HostListener('transitionend', ['$event'])
  @HostListener('webkitTransitionEnd', ['$event'])
  onAnimationEnd(event) {
    if (this.arrow == -1) {
      //앞에있는 자식을 뒤로 보낸다
      this.elementRef.nativeElement.appendChild(this.elementRef.nativeElement.children[0]);
    } else if (this.arrow == 1) {
      //뒤에 있는 자식을 앞으로 보낸다.
      this.elementRef.nativeElement.prepend(this.elementRef.nativeElement.children[2]);
    }
    this.init();
  }


  ngOnDestroy() {
    this.removePreviousTouchListeners();
  }

  /**
   * Touch이벤트 취소
   */
  removePreviousTouchListeners() {
    if (this.touchmoveListenFunc !== null)
      this.touchmoveListenFunc();             // remove previous listener
    if (this.touchendListenFunc !== null)
      this.touchendListenFunc();              // remove previous listener
    if (this.touchcancelListenFunc !== null)
      this.touchcancelListenFunc();           // remove previous listener
    this.touchmoveListenFunc = null;
    this.touchendListenFunc = null;
    this.touchcancelListenFunc = null;
  }

  /**
   * 자식 사이즈 변경
   */
  childrenResize() {
    let children: Array<any> = this.elementRef.nativeElement.children;
    if (children) {
      let cnt = children.length;
      //wrap 사이즈 변경
      this.elementRef.nativeElement.style.width = ((this.containerWidth * cnt) + 'px');
      for (var i = 0; i < cnt; i++) {
        children[i].style.width = (this.containerWidth + 'px');
      }
    }
    this.init();
  }

  /**
   * 초기화 
   */
  init() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'transition', null);
    this.positionX = (this.containerWidth * -1);
    //wrap를 가운데로 이동시킴
    this.renderer.setElementStyle(this.elementRef.nativeElement, '-webkit-transform', 'translate3d(' + this.positionX + 'px, 0px, 0px)');
  }

  /**
   * 이동방향으로 페이지 넘김
   * @param arrow 
   */
  next(arrow: number) {
    this.arrow = arrow;
    let pos = this.containerWidth * arrow;
    this.positionX += pos;
    this.renderer.setElementStyle(this.elementRef.nativeElement, '-webkit-transform', '-webkit-transform 0.2s ease-in'); //애니메이션 추가
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'transition', 'transform 0.2s');       //애니메이션 추가
    this.renderer.setElementStyle(this.elementRef.nativeElement, '-webkit-transform', 'translate3d(' + this.positionX + 'px, 0px, 0px)');
  }
}

{% endhighlight %}

