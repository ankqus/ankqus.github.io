---
layout: post
title:  "Google Sheet API"
date:   2017-10-20 09:10:00
categories: google
highlight: false
image: https://image.prntscr.com/image/J0D_5jzaTimnMoo9_f_W8Q.jpeg
description: Google Sheet API 연동해보기
---



#### PERMISSION_DENIED

![Error](https://image.prntscr.com/image/1n4OkK1QTiyCqtBdZ04lsA.jpeg)
{% highlight json %}

{
  "error": {
    "code": 403,
    "message": "Google Sheets API has not been used in project anyman-183803 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/sheets.googleapis.com/overview?project=anyman-183803 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.",
    "status": "PERMISSION_DENIED",
    "details": [
      {
        "@type": "type.googleapis.com/google.rpc.Help",
        "links": [
          {
            "description": "Google developers console API activation",
            "url": "https://console.developers.google.com/apis/api/sheets.googleapis.com/overview?project=anyman-183803"
          }
        ]
      }
    ]
  }
}

{% endhighlight %}


- Google Sheet API 사용설정하기
![](https://image.prntscr.com/image/bHP6sHwcRCumuGTkEXleDQ.jpeg)

- 구글콘손 대시보드에서 Google Sheet API 사용 확인
![](https://image.prntscr.com/image/_IGUgW95TFSOfJhVFFb4Jw.jpeg)
