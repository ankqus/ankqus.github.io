---
layout: post
title:  "Angular로 디지털 시계 만들기"
date:   2017-10-31 09:30:00
categories: angular
highlight: false
image: https://image.prntscr.com/image/qIQim7bJQH6Zc7TmNL_ExA.jpeg
description: Angular4 프로젝트로  5분만에 만들수 있는 디지털 시계
---

###
[Demo](https://embed.plnkr.co/CJyXLU/)  
[GitHub Source](https://github.com/lomi525/digital-click)

##### 프로젝트 생성
{% highlight bash %}
ng new digital-clock
{% endhighlight %}

###### 컴포넌트 생성
{% highlight bash %}
ng g component number
ng g component clock
ng g component dot
{% endhighlight %}


![](https://image.prntscr.com/image/1JRlfiqfQLu1S6cdDpTHoQ.jpeg)


angular-cli 로 컴포턴트를 생성 하면 자동으로 app.module.ts 에 등록된다
- app.module.ts
{% highlight typescript %}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { ClockComponent } from './clock/clock.component';
import { DotComponent } from './dot/dot.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    ClockComponent,
    DotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

{% endhighlight %}


#### 숫자판 만들기
![8 Bits Digital Tube LED Display](https://image.prntscr.com/image/QvMjqKXkRbyWzN_xavZvoA.jpeg)
number컴포넌트에 8개의 LED를 만들어 줍니다.
- number.component.html
{% highlight html%}
  <span class="d1">  </span>
  <span class="d2">  </span>
  <span class="d3">  </span>
  <span class="d4">  </span>
  <span class="d5">  </span>
  <span class="d6">  </span>
  <span class="d7">  </span>
{% endhighlight %}
- number.component.css
{% highlight css%}
:host{text-align:left;position:relative;width: 28px;height:50px;display:inline-block;margin:0 4px;}
/* 1 */
:host.number1 .d5,:host.number1 .d7{opacity:1;}
/* 2 */
:host.number2 .d1,:host.number2 .d5,:host.number2 .d2,:host.number2 .d6,:host.number2 .d3{opacity:1;}
/* 3 */
:host.number3 .d1,:host.number3 .d5,:host.number3 .d2,:host.number3 .d7,:host.number3 .d3{opacity:1;}
/* 4 */
:host.number4 .d5,:host.number4 .d2,:host.number4 .d4,:host.number4 .d7{opacity:1;}
/* 5 */
:host.number5 .d1,:host.number5 .d2,:host.number5 .d4,:host.number5 .d3,:host.number5 .d7{opacity:1;}
/* 6 */
:host.number6 .d1,:host.number6 .d2,:host.number6 .d4,:host.number6 .d3,:host.number6 .d6,:host.number6 .d7{opacity:1;}
/* 7 */
:host.number7 .d1,:host.number7 .d5,:host.number7 .d7{opacity:1;}
/* 8 */
:host.number8 .d1,:host.number8 .d2,:host.number8 .d3,:host.number8 .d4,:host.number8 .d5,:host.number8 .d6,:host.number8 .d7{opacity:1;}
/* 9 */
:host.number9 .d1,:host.number9 .d2,:host.number9 .d3,:host.number9 .d4,:host.number9 .d5,:host.number9 .d7{opacity:1;}
/* 0 */
:host.number0 .d1,:host.number0 .d3,:host.number0 .d4,:host.number0 .d5,:host.number0 .d6,:host.number0 .d7{opacity:1;}
span{background-color:#272e38;border-color:#272e38;opacity:0;position:absolute;-webkit-transition:0.25s;-moz-transition:0.25s;transition:0.25s;}
span:before,span:after{content:'';position:absolute;width:0;height:0;border:5px solid transparent;}
span.d1{height:5px;width:16px;top:0;left:6px;}
span.d1:before{border-width:0 5px 5px 0;border-right-color:inherit;left:-5px;}
span.d1:after{border-width:0 0 5px 5px;border-left-color:inherit;right:-5px;}
span.d2{height:5px;width:16px;top:24px;left:6px;}
span.d2:before{border-width:3px 4px 2px;border-right-color:inherit;left:-8px;}
span.d2:after{border-width:3px 4px 2px;border-left-color:inherit;right:-8px;}
span.d3{height:5px;width:16px;top:48px;left:6px;}
span.d3:before{border-width:5px 5px 0 0;border-right-color:inherit;left:-5px;}
span.d3:after{border-width:5px 0 0 5px;border-left-color:inherit;right:-5px;}
span.d4{width:5px;height:14px;top:7px;left:0;}
span.d4:before{border-width:0 5px 5px 0;border-bottom-color:inherit;top:-5px;}
span.d4:after{border-width:0 0 5px 5px;border-left-color:inherit;bottom:-5px;}
span.d5{width:5px;height:14px;top:7px;right:0;}
span.d5:before{border-width:0 0 5px 5px;border-bottom-color:inherit;top:-5px;}
span.d5:after{border-width:5px 0 0 5px;border-top-color:inherit;bottom:-5px;}
span.d6{width:5px;height:14px;top:32px;left:0;}
span.d6:before{border-width:0 5px 5px 0;border-bottom-color:inherit;top:-5px;}
span.d6:after{border-width:0 0 5px 5px;border-left-color:inherit;bottom:-5px;}
span.d7{width:5px;height:14px;top:32px;right:0;}
span.d7:before{border-width:0 0 5px 5px;border-bottom-color:inherit;top:-5px;}
span.d7:after{border-width:5px 0 0 5px;border-top-color:inherit;bottom:-5px;}

{% endhighlight %}

#### 도트 컴포넌트
- dot.component.css
{% highlight css%}

:host{
	text-align:left;
	position:relative;
	width:5px;
	height:50px;
	display:inline-block;
	margin:0 4px;
}
:host:before,
:host:after{
	width:5px;
	height:5px;
	content:'';
	position:absolute;
	left:0;
	top:14px;
	background-color:#272e38;
}

:host:after{
	top:34px;
}

{% endhighlight %}


#### 시계 컴포넌트 만들기
- clock.component.css  
{% highlight css%}
 div{
	text-align:left;
	position:relative;
	width: 28px;
	height:50px;
	display:inline-block;
	margin:0 4px;
}

 span{
	opacity:0;
	position:absolute;

	-webkit-transition:0.25s;
	-moz-transition:0.25s;
	transition:0.25s;
}

{% endhighlight %}  

- clock.component.css
{% highlight html%}
<app-number [ngClass]="'number'+now[0]"></app-number>
<app-number [ngClass]="'number'+now[1]"></app-number>
<app-dot></app-dot>
<app-number [ngClass]="'number'+now[2]"></app-number>
<app-number [ngClass]="'number'+now[3]"></app-number>
<app-dot></app-dot>
<app-number [ngClass]="'number'+now[4]"></app-number>
<app-number [ngClass]="'number'+now[5]"></app-number>
{% endhighlight %}

- clock.component.ts
{% highlight typescript %}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  now:string='000000';

  ngOnInit() {
    let timeoutId = setInterval(() => {        
      var time = new Date();
      this.now = ('0'+time.getHours()).substr(-2) + ('0'+time.getMinutes()).substr(-2) + ('0'+time.getSeconds()).substr(-2);
    }, 1000);
  }

}
{% endhighlight %}
##### 실행해보기
{% highlight bash%}
ng serve
{% endhighlight %}

![](https://image.prntscr.com/image/vzhdkoNjRQWKvCu4aekuWQ.jpeg)

#### 참고사이트
- [https://demo.tutorialzine.com/2013/06/digital-clock/](https://demo.tutorialzine.com/2013/06/digital-clock/)

