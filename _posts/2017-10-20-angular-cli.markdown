---
layout: post
title:  "Angular-cli를 이용해서 Angular 시작하기2"
date:   2017-10-20 09:10:00
categories: angular
highlight: false
image: https://image.prntscr.com/image/InDmxrHpTli-o9aaKF4V5A.jpeg
description: 설명을 이럭ㅎ게 저렇게 한다
---


#### Angular CLI?
Angular 프로젝트를 생성 및 환경설정을 구성해주는 커맨드 인터페이스 프로그램입니다.
- 프로젝트 생성
- 간단한 웹서버
- Webpack 내장


#### Angular CLI 설치
Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together with NPM 3 or higher.  
(node 6.9.0 버전 이상 npm 3.x 버전 이상을 필수로 필요하다.)
```bash
//angular-cli 전역 설치
npm install -g @angular/cli
```
<설치화면>  
![](https://image.prntscr.com/image/4jdoJ2hGSK2IqzQwxJGH-g.jpeg)

#### Angular CLI로 프로젝트 생성
```bash
//ng new <프로젝트이름> [옵션]
ng new  hello-world
```

#### Angular CLI 사용방법
```bash
ng help
```

#### generate 명령어
Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`
