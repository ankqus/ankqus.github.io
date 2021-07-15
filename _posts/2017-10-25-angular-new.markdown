---
layout: post
title:  "Angular로 Hello World 프로젝트 시작하기"
date:   2017-10-20 09:30:00
categories: angular
highlight: false
image: https://image.prntscr.com/image/6LsJBjUKQHG95U_qBit3nA.jpeg
description: Angular로 프로젝트를 생성해서 웹브라우져로 출력해보기
---


#### 프로젝트 생성
```bash
ng new hello-world
```
![](https://image.prntscr.com/image/iZd43ZsARHGcl6GqzTb0og.jpeg)


#### 프로젝트 실행해보기
```bash
ng serve
```
기본으로 Angular 샘플페이지를 볼수 있다.
![](https://image.prntscr.com/image/EieWN7TSRSuopmLrzZqzWw.jpeg)

브라우져로 http://127.0.0.1:4200  
![](https://image.prntscr.com/image/isIWX991RLCnD1aOxAPG6Q.jpeg)

  - port (Number) (Default: 4200) Port to listen to for serving.  
  aliases: -p \<value>, -port \<value>  
  - host (String) (Default: localhost) Listens only on localhost by default.  
  aliases: -H \<value>, -host \<value>

#### Helle World 코딩하기
프로젝트틀 생성하면 기본으로 app.component를 생성하게 된다.
![](https://image.prntscr.com/image/P2R39MgxTLiNy2jiA8iDqQ.jpeg)

- 컴포넌트 구조  
app.component.css | 컴포넌트에 적용되는 스타일 시트
app.component.html | 컴포넌트에 템플릿 파일
app.component.spec.ts | 컴포넌트를 유닛 테스트 위한 파일
app.component.ts | 컴포넌트 스크립트 파일


- app.component.html를 소스를 삭제하고 
{% highlight html%}
<div style="text-align:center">
  <h1>
    Hello {{name}}!
  </h1>
</div>
{% endhighlight %}
- app.component.ts에 name 변수를 만들어준다.
{% highlight typescript%}
export class AppComponent {
  name = 'world'
}
{% endhighlight %}
실행결과
![](https://image.prntscr.com/image/p_D_F4EQS66unVUxNE11sg.jpeg)
