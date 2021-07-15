---
layout: post
title:  "Composer 패키지 만들기"
date:   2017-09-13 11:33:00
categories: Composer
highlight: false
image: https://getcomposer.org/img/logo-composer-transparent5.png
description: "Composer를 통해 손쉽게 의존성 있는 모든 패키지를 로딩할 수 있다."
---


###### PSR-4 Auto Loader

PSR-4는 새로운 오토로딩 표준으로 정규화된 클래스이름을 규정하고 있으며 이를 준수하여 패키지를 개발할 경우 Composer를 통해 손쉽게 의존성 있는 모든 패키지를 로딩할 수 있다.

{% highlight php %}
\<NamespaceName>(\<SubNamespaceNames>)*\<ClassName>
{% endhighlight %}

Composer가  vender/autoload.php 파을을 생성하므로 개발자는 아래와 같이 한줄을 추가하면 편하게 개발할수 있다.
{% highlight php%}
<?php
require 'vendor/autoload.php';
{% endhighlight %}


###### 패키지 프로젝트 만들기
1. 작업폴더 생성
{% highlight bash %}
mkdir mypackage
cd mypackage
{% endhighlight %}

2. 컴포저 init
{% highlight bash %}
composer init
{% endhighlight %}

3. Composer 설정
{% highlight bash %}
Welcome to the Composer config generator


This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [k3/test]: lomi525/mypackage
Description []: description
Author [, n to skip]: test <test@gmail.com>
Minimum Stability []: stable
Package Type []:
License []:

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? yes
Search for a package:
Would you like to define your dev dependencies (require-dev) interactively [yes]? yes
Search for a package:

{
    "name": "lomi525/mypackage",
    "description": "description",
    "authors": [
        {
            "name": "test",
            "email": "test@gmail.com"
        }
    ],
    "minimum-stability": "stable",
    "require": {}
}

Do you confirm generation [yes]? yes
{% endhighlight %}

4. composer.json에 autoload 추가
{% highlight json%}
"autoload": {
    "psr-4" : {
        "Lomi525\\MyPackage\\" : "src"
     }
}
{% endhighlight %}

5. 클래스 생성하기 
{% highlight php%}
<?php 
namespace Lomi525\MyPackage;
class Hello {
    public function world(){
        return 'Hello world';
    }
}
{% endhighlight %}


###### 패키지 사용하기
1. 내 프로젝트에 사용한 라이브러리 의존성을 기술합니다.
저장소에 등록하지 않았으면 의존성 패키지를 가져올수 없습니다.
{% highlight json%}
{
    "require": {   
        "lomi525/mypackage" : "~1.0.0"
    }      
}
{% endhighlight %}
OR
{% highlight bash %}
composer require lomi525/mypackage
{% endhighlight %}


2. 테스트 하기
{% highlight php%}
<?php
require 'vendor/autoload.php';
use \Lomi525\MyPackage\Hello;
 
$oHello = new Hello(); 
echo $oHello->world() . "\n";
{% endhighlight %}


###### 개발중인 패키지 테스트 방법
1. 특정 브랜치를 가져오기 (dev-test branch)
{% highlight json%}
{
    "require": {
        "lomi525/mypackage" : "dev-test"
    }
}
{% endhighlight %}
2. 브랜치의 특정 커밋 버전으로 가져오기
{% highlight json%}
{
    "require": {
        "lomi525/mypackage" : "dev-test#5346c4a12eb0c0979c8d2902b4a19551889e5db7"
    }
}
{% endhighlight %}