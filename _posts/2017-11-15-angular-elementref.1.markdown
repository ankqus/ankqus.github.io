---
layout: post
title:  "Angular Dom 참조하는 방법"
date:   2017-11-03 07:36:00
categories: angular
highlight: false
image: https://image.prntscr.com/image/nP3uRJtOT3m3VruUUvMNlA.jpeg
description: Angular에서 자식의 DOM을 참조할 수 몇가지 방법
keyword: angular, dom, elementref
color: 'seagreen'
---

### 해시태그로 DOM 찾기
jQuery는  $('#id')로 DOM을 쉽게 찾을 수 있다. 
Angular 에서도 비슷한 역활을 하는 것이 있다. 

- ViewChild , ContentCild, ViewChildren, ContentCildren

1. VidwChild, ViewChildren
{% highlight typescript %}
import {Component, ViewChild, ViewChildren} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div #title>ViewChild , VidewChildren</div>
    <ul>
        <li #site>google.com</li>
        <li #site>naver.com</li>
     </ul>
  `,
})
export class AppComponent  {
  @ViewChild("title") title: QueryList<any>
  @ViewChildren("site") site: QueryList<any>
  
  ngAfterViewInit() {
        console.log(this.title);
        this.site.forEach(site => console.log(site));
  }

}
{% endhighlight %}
![](https://image.prntscr.com/image/WucyRmtmS9aU70tWCIzESA.jpeg)
[DEMO](https://plnkr.co/edit/PtoF2k?p=preview) 

2. ContentChild, ContentCChildren
{% highlight typescript %}
import {Component, ViewChild, ViewChildren} from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div #title>ViewChild , VidewChildren</div>
    <ul>
        <li #site>google.com</li>
        <li #site>naver.com</li>
     </ul>
  `,
})
export class AppComponent  {
  @ViewChild("title") title: QueryList<any>
  @ViewChildren("site") site: QueryList<any>
  
  ngAfterViewInit() {
        console.log(this.title);
        this.site.forEach(site => console.log(site));
  }

}
{% endhighlight %}
![](https://image.prntscr.com/image/WucyRmtmS9aU70tWCIzESA.jpeg)
[DEMO](https://plnkr.co/edit/PtoF2k?p=preview) 


