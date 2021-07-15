---
layout: post
title:  "Angular 프로젝트 구조"
date:   2017-10-25 09:10:00
categories: angular
highlight: false
image: https://image.prntscr.com/image/6LsJBjUKQHG95U_qBit3nA.jpeg
description: Angular의 폴더구조 및 중요파일의 간단한 설명
---


#### 프로젝트 생성
```bash
ng new hello-world
```
![](https://image.prntscr.com/image/iZd43ZsARHGcl6GqzTb0og.jpeg)


#### 폴더구조
![](https://image.prntscr.com/image/Nh6H4m6nR8_u2ShvkoM5tQ.jpeg)

Folder  | Usage
---       | ---
e2e | 테스트를 위한 설정파일 폴더
node_modules | 프로젝트의 의존성이 있는 모듈이 있는 폴더
src |  Angular의 실제 소스폴더
src\app | Angular 컴포넌트 폴더
src\assets | 정적파일 폴더
src\environments  | 환경설정관련 폴더

#### 중요파일
- package.json  
프로젝트의 모듈관리 및 스크립트를 관리하는 파일
{% highlight json %}
{
  "name": "hello-world",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^4.2.4",
    "@angular/common": "^4.2.4",
    "@angular/compiler": "^4.2.4",
    "@angular/core": "^4.2.4",
    "@angular/forms": "^4.2.4",
    "@angular/http": "^4.2.4",
    "@angular/platform-browser": "^4.2.4",
    "@angular/platform-browser-dynamic": "^4.2.4",
    "@angular/router": "^4.2.4",
    "core-js": "^2.4.1",
    "rxjs": "^5.4.2",
    "zone.js": "^0.8.14"
  },
  "devDependencies": {
    "@angular/cli": "1.4.9",
    "@angular/compiler-cli": "^4.2.4",
    "@angular/language-service": "^4.2.4",
    "@types/jasmine": "~2.5.53",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "~3.2.0",
    "jasmine-core": "~2.6.2",
    "jasmine-spec-reporter": "~4.1.0",
    "karma": "~1.7.0",
    "karma-chrome-launcher": "~2.1.1",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~3.2.0",
    "tslint": "~5.7.0",
    "typescript": "~2.3.3"
  }
}
{% endhighlight %}
- tsconfig.json  
Typescript컴파일 옵션을 정의하는 파일
{% highlight json %}
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
{% endhighlight %}
{% highlight json %}
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
{% endhighlight %}


- karma.conf.js  
jasmine 을 이용한 단위테스트를 위한 설정파일
{% highlight json %}
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
{% endhighlight %}


- src\polyfills.ts  
브라우저에서 ES6 문법을 사용하기 위한 모듈들을 모아 놓은 파일
{% highlight json %}
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
{% endhighlight %}