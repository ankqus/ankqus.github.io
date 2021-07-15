---
layout: post
title:  "Composer를 통한 패키지 설치및 의존성 관리하기"
date:   2017-09-13 11:33:00
categories: Composer
highlight: false
image: https://getcomposer.org/img/logo-composer-transparent5.png
description: "Composer를 사용하여 코드 재사용성을 높이고 패키지를 통해 코드간의 의존성 관계를 정리할 수 있다."
---


###### Composer를 사용하여 날코딩의 PHP를 모던한 PHP로

Composer를 사용하여 날코딩의 PHP를 모던한 PHP로 쉽게 바꿀수 있다. 
코드 재사용성을 높이고 패키지를 통해 코드간의 의존성 관계를 정리할 수 있다.  다른 개발자와 협업을 고려한다면 조금씩 바꿔 나가야 할것이다.


###### Compoer 설치
[composer download](https://getcomposer.org/download/) 참고 해서 다운로드 합니다.


* Linux 설치
{% highlight bash %}
$ curl -sS https://getcomposer.org/installer | php
{% endhighlight %}
* Windows 설치

     [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)



###### Composer init
프로젝트 폴더에서 composer init 으로 compser.json 을 자동으로 만들어 준다
{% highlight bash %}
$ composer init
{% endhighlight %}

{% highlight bash %}

  Welcome to the Composer config generator


This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [k3/test]: composer/test
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
    "name": "composer/test",
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

composer.json 파일이 생성됩니다.
{% highlight json%}
{
    "name": "composer/test",
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
{% endhighlight %}

###### composer.json & compsoer.lock

composer.json 파일을 composer update를 실행하면 의존성에 해당하는 실제버전을 설치하고 그 설치 내역을 composer.lock파일에 정리하게 된다.

서비스 환경에서는 `comsposer install` 를 하여 실제 설치된 패키지를 그대로 설치하게 된다. 

개발 환경에서는 `composer.json`파일로 `composer update` <br/>
서비스 환경은 `composer.lock`파일로 `composer install`
하여 같은 패키지가 설치되도록 한다.


###### GIT ignore 

`composer update` 를 하게 되면 프로젝트 폴더내에 vender폴더가 생성되고 그안에 패키지를이 설치된다.<br/>
vender 폴더는  composer install 로 관리 되므로  VCS에서 제외하여야 한다.
{% highlight bash%}
gitignore
/vendor
{% endhighlight %}