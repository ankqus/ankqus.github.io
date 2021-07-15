---
layout: post
title:  "라라벨에서 환경설정파일(.env) 참조방법"
date:   2017-12-21 14:20:00
categories: larvel
highlight: false
image: https://image.prntscr.com/image/8Q8tgLTdRyKgvrlOl15urQ.png
description: 라라벨에서 환경설정파일(.env) 참조방법
keyword: laravel, env, environment
color: 'seagreen'
---

### 라라벨에서 .env 파일 참조 방법
기본적으로 라라벨프로젝트에 특별한 설정이 없으면 프로젝트 폴더밑에 .env를 참조하게 됩니다.
개발환경을 구분하기 위해서 .env.development , .env.production 파일을 만들어 두고
실서비스에서 .env로 복사하여 사용하게 됩니다.


### 개발환경에서 .env 파일일 아닌 .evn.devlopment 파일을 참조하는 방법
매번 복상(cp .env.development .env) 하는 방법이 번거롭다면 웹서버 환경변수에 APP_ENV값을 추가 합니다.

- APACHE
{% highlight html %}
<VirtualHost *:80>

        SetEnv APP_ENV development
</VirtualHost>
{% endhighlight %}


- NGINX
{% highlight html %}
<VirtualHost *:80>
    location / {
    ...
      fastcgi_param   APP_ENV development;
    ...
    }
</VirtualHost>
{% endhighlight %}



### 설정파일 캐시(php artisan config:cache)
설정파일을 캐시해서 사용할 경우 config 폴더에 있는 모든파일에 내용을 
project_folder/bootstrap/cache/config.php 를 생성하여 참조 하게 됩니다.
{% highlight bash %}
php artisan config:cache 
{% endhighlight %}

단, 개발서버의 경우에는 artisan 명령어로 생성하였기 때문에  웹서버의 APP_ENV값을 알수 없으므로 
--env 옵션을 추가하여야 합니다.

{% highlight bash %}
php artisan config:cache --env development
{% endhighlight %}
