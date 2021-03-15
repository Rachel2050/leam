

var $bxy = bxy();
var userId = 1641274510022735;
var businessId = 22735;


// 签到页面
var findDkSignActivityPage = {
  url: `https://api.gaojihealth.cn/fund/api/noauth/appCoupon/findDkSignActivityPage?businessId=${businessId}&userId=${userId}`,
  headers: {
    "Accept": "*/*",
    "Accept-Encoding": "br, gzip, deflate",
    "Accept-Language": "zh-cn",
    "Authorization": "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNTgxMjkxMiwianRpIjoiMzU0ZmIxM2MtYmI1NC00ZGU2LTg5ZGItZjYwMjgxNzZlMDUxIiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.pxfjhT1mpTHhp0ng2TKxh8qLNStfOI8vVkISlFCO9c9d6Fr66bfVqAKR6GR4gIjLCdvf7UeN2zsQ0wRC8XjZXxB25fbeoE7QMPeP0Rwu59ORIyNU9RKM88Ac-omDzYwGA5aKlxsoQ2shaPwmvXpybPueqjihGtyWdPqlbqyRWxOgyFZl3TkgroFJUAIHEkUu5Dl8goUZKe2KXm_tcD8h12sSCTwPjRgC97QZrgjUkSId1C_FnA-iPx3hvGihAunBMU2phcVKVmycLVRnxo11gKjTJTAJFe2Yskh4WSSGU-PRYbkcomBNj3oZqyGkGASJSRTJOgEVXX2TtZrR_ZmcOg",
    "Connection": "keep-alive",
    "Content-Type": "application/json;charset=utf-8;",
    "Cookie": "access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNTgxMjkxMiwianRpIjoiMzU0ZmIxM2MtYmI1NC00ZGU2LTg5ZGItZjYwMjgxNzZlMDUxIiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.pxfjhT1mpTHhp0ng2TKxh8qLNStfOI8vVkISlFCO9c9d6Fr66bfVqAKR6GR4gIjLCdvf7UeN2zsQ0wRC8XjZXxB25fbeoE7QMPeP0Rwu59ORIyNU9RKM88Ac-omDzYwGA5aKlxsoQ2shaPwmvXpybPueqjihGtyWdPqlbqyRWxOgyFZl3TkgroFJUAIHEkUu5Dl8goUZKe2KXm_tcD8h12sSCTwPjRgC97QZrgjUkSId1C_FnA-iPx3hvGihAunBMU2phcVKVmycLVRnxo11gKjTJTAJFe2Yskh4WSSGU-PRYbkcomBNj3oZqyGkGASJSRTJOgEVXX2TtZrR_ZmcOg;refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJhdGkiOiIzNTRmYjEzYy1iYjU0LTRkZTYtODlkYi1mNjAyODE3NmUwNTEiLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxODM2ODkxMiwianRpIjoiMTMwOWQ3MjktZjVjNi00NjgxLWJkNTYtYTUzYzRlZjEyNmY5IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.YbpbTC_yBmLRxeeyjw9HP0eE3XXX-w1Edv7xNUYofk5bqKsbwGGDmpKAYW9vx2HvE55at0e0gPByvTVhke10j_1osxY3_5nKb58AdJXB-ov1WLpaV9JS0vcfHfMdb-Kuwl6xn2ParpofWHidyD5cFDd4zENUvgNhhc5CmzFNvvsMaVKy2K1gKcYMv4kVkrnk40XpIwuVrTDMmhlfJohgDFnbZFDWe6Rz2J66VAH_EgJgArOV1knn7HFAibLR_OEDOaVEVlB5HNwo5wikrDdDg9WY1ZajrzoxlGyc0ZGbbhqIW8Rgpz6vmrp40EbBWGUlotHtYlW2dM5RFynmctVLPA;grant_type=gj_app_auth;XSRF-TOKEN=bb2ec20d-8f79-4d1a-ac08-f4d550a62aa9",
    "Host": "api.gaojihealth.cn",
    "Referer": "https://servicewechat.com/wx73ec617ea0a6c8e8/338/page-frame.html",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C104 MicroMessenger/7.0.13(0x17000d2a) NetType/WIFI Language/zh_CN",
    "X-XSRF-TOKEN": "bb2ec20d-8f79-4d1a-ac08-f4d550a62aa9",
    "channelPrice": "B2C",
    "client-id": "miniprogram",
    "from_channel": "gjjk_pro",
    "grantType": "gj_app_auth",
    "shareId": "",
    "siteId": "miniprogram",
    "source": ""
  }

};



var everyDaySign = {
  url: "https://api.gaojihealth.cn/gulosity/api/dkUserEvent/everyDaySign",
  method: "POST",
  headers: ${findDkSignActivityPage.headers},
  body: {}
};

var sharePage = {
  url: "https://api.gaojihealth.cn/gulosity/api/dkUserEvent/sharePageCompleteTaskEvent",
  method: "POST",
  headers: ${findDkSignActivityPage.headers},
  body: {}
};



signActivityPage();


//签到页面
function signActivityPage() {
  $bxy.get(findDkSignActivityPage, function(error, response, data) {
    if (error) {
      $bxy.notify("高济百姓缘", "未获取到签到页面信息", "");
      $bxy.done()
    } else {

      var body = JSON.parse(data);
      !(async () => {
            await signModule(body);
            await taskModule(body);
      })()
    }
  })

}


//签到
function signModule(res) {

  
  if (res.signModule.todaySignFlag) {
    $bxy.notify("高济百姓缘", "今日已签到", "");
    //return; 
  }


  console.log(`开始签到`);
//   "businessId": `${res.baseInfoModule.businessId}`,
  everyDaySign.body = {
        "businessId": `${businessId}`,
        "userId": `${userId}`,
        "taskId": `${res.signModule.taskId}`
  }
console.log(everyDaySign.body);
  $bxy.post(everyDaySign, function(error, response, data) {

      if (error) {
        console.log(`签到失败`);
        $bxy.notify("高济百姓缘", "签到失败", "");

      } else {
        try {
          var addResult = JSON.parse(data);
          if (addResult.opCode == 200) {
            console.log(addResult.opMsg);
            $bxy.notify("高济百姓缘", addResult.opMsg, "");
          } 
        } catch (e) {

        }
      }
      
      
  })

}


//分享
function taskModule(res) {

  
  if (res.taskModule.integralTaskList[0].status != 0 && res.taskModule.integralTaskList[0].leftTimes == 0) {
    $bxy.notify("高济百姓缘", "今日已分享", "");
    return;
  }


  console.log(`开始分享`);

  sharePage.body = {
            "browsePageId":`${res.taskModule.integralTaskList[0].browsePageId}`,
            "browsePageUrl":`${res.taskModule.integralTaskList[0].browsePageUrl}`,
            "taskId": `${res.taskModule.integralTaskList[0].taskId}`
  }


  $bxy.post(sharePage, function(error, response, data) {
      if (error) {
        console.log(`分享失败`);
        $bxy.notify("高济百姓缘", "分享失败", "");

      } else {
        try {
          var addResult = JSON.parse(data);
          if (addResult) {
            console.log("分享成功");
            $bxy.notify("高济百姓缘","分享成功" , "");
          } 
        } catch (e) {
          $bxy.done()
        }
      }
  })
}












function bxy() {
  const isRequest = typeof $request != "undefined"
  const isSurge = typeof $httpClient != "undefined"
  const isQuanX = typeof $task != "undefined"
  const notify = (title, subtitle, message) => {
    if (isQuanX) $notify(title, subtitle, message)
    if (isSurge) $notification.post(title, subtitle, message)
  }
  const write = (value, key) => {
    if (isQuanX) return $prefs.setValueForKey(value, key)
    if (isSurge) return $persistentStore.write(value, key)
  }
  const read = (key) => {
    if (isQuanX) return $prefs.valueForKey(key)
    if (isSurge) return $persistentStore.read(key)
  }
  const adapterStatus = (response) => {
    if (response) {
      if (response.status) {
        response["statusCode"] = response.status
      } else if (response.statusCode) {
        response["status"] = response.statusCode
      }
    }
    return response
  }
  const get = (options, callback) => {
    if (isQuanX) {
      if (typeof options == "string") options = {
        url: options
      }
      options["method"] = "GET"
      $task.fetch(options).then(response => {
        callback(null, adapterStatus(response), response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge) $httpClient.get(options, (error, response, body) => {
      callback(error, adapterStatus(response), body)
    })
  }
  const post = (options, callback) => {
    if (isQuanX) {
      if (typeof options == "string") options = {
        url: options
      }
      options["method"] = "POST"
      $task.fetch(options).then(response => {
        callback(null, adapterStatus(response), response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge) {
      $httpClient.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
  }
  const done = (value = {}) => {
    if (isQuanX) return $done(value)
    if (isSurge) isRequest ? $done(value) : $done()
  }
  return {
    isRequest,
    notify,
    write,
    read,
    get,
    post,
    done
  }
};
