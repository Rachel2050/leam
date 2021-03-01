

var $nobyda = nobyda();
var userId = 1641274510022735;
var businessId = 212798;


// 签到页面
var findDkSignActivityPage = {
  url: `https://api.gaojihealth.cn/fund/api/noauth/appCoupon/findDkSignActivityPage?businessId=${businessId}&userId=${userId}`,
  headers: {
  "Accept": "*/*",
  "Accept-Encoding": "br, gzip, deflate",
  "Accept-Language": "zh-cn",
  "Authorization": "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNDYzMjIwNywianRpIjoiMmVmYjJiYWEtYzZiNS00NWJhLWE0ZGItMTJlNjE3Yzk3ZTQ4IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.ecij4_FXfHf1L5qN5h66wOfOmS7Dc9Whoo9sbMJ_7c1xM99jmv-3iJvS-oEvESVe8aWHqqWP6rPifRnxSxSWmEmgBcOp7b3YwFlQLG4Em7iboBVb6AXdh5Jfrz1CH36qdPoYDDWCK0Znyydwzih_l2Is7sVtY77LzeUfQ5e3DpoDtc69F-WL_MAF_x2YrK_lUQ-5HU3AJ2DG6ICm63XahVaeHpwLk4fpQR2WG0MqZhVejSG7LQCJ9mg7Z6pEhlNP9JU_v6L94wn7H4jNeCDbYQLmjU9vuSFbJ44w-PDanv2sm5uD46tP_8j-ajwiS7CnW_VElcM3829rXxT84qEwOw",
  "Connection": "keep-alive",
  "Content-Type": "application/json;charset=utf-8;",
  "Cookie": "access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNDYzMjIwNywianRpIjoiMmVmYjJiYWEtYzZiNS00NWJhLWE0ZGItMTJlNjE3Yzk3ZTQ4IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.ecij4_FXfHf1L5qN5h66wOfOmS7Dc9Whoo9sbMJ_7c1xM99jmv-3iJvS-oEvESVe8aWHqqWP6rPifRnxSxSWmEmgBcOp7b3YwFlQLG4Em7iboBVb6AXdh5Jfrz1CH36qdPoYDDWCK0Znyydwzih_l2Is7sVtY77LzeUfQ5e3DpoDtc69F-WL_MAF_x2YrK_lUQ-5HU3AJ2DG6ICm63XahVaeHpwLk4fpQR2WG0MqZhVejSG7LQCJ9mg7Z6pEhlNP9JU_v6L94wn7H4jNeCDbYQLmjU9vuSFbJ44w-PDanv2sm5uD46tP_8j-ajwiS7CnW_VElcM3829rXxT84qEwOw;refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJhdGkiOiIyZWZiMmJhYS1jNmI1LTQ1YmEtYTRkYi0xMmU2MTdjOTdlNDgiLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNjg1NjE5MCwianRpIjoiYTdkNjllNjEtOTM4MS00YTEyLWI2ZTEtZTFlZTYwYTNmZjM2IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.NveNH1_lHxT57GAxCt1q74XmZHV-VxP5-uRbjFtz1q8ZciCzMa2jYbdP5hwVlJIi-g2uIYgfEoIFZiElddDY1ZaJ3zsmsexPRhY4_uCPRtljA-R4SmgbDBtszaUkkFt6QL6jdXLmgcrd3pjeVYRz6qRGOXw4moY73ZUGeejurDSGY83wDInkHBz4rhFCseH5rlQK70phxzOQ6A4jyFfUj6JIZozJNrZU7cYPhzCEwv-kmo796LG6qqTCQ6bwfiDMcNMPi5fizFjtBULyNs68-kKlWbcr0B7jIKM_esn58t1gKQmgfSgtpHJFDiRjqgjOXAyOwGCr6vsoOJbzWdJH8Q;grant_type=gj_app_auth;XSRF-TOKEN=4895c8e7-8813-4fdb-bbcc-e243f0712c21",
  "Host": "api.gaojihealth.cn",
  "Referer": "https://servicewechat.com/wx73ec617ea0a6c8e8/324/page-frame.html",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C104 MicroMessenger/7.0.13(0x17000d2a) NetType/WIFI Language/zh_CN",
  "X-XSRF-TOKEN": "4895c8e7-8813-4fdb-bbcc-e243f0712c21",
  "channelPrice": "B2C",
  "client-id": "miniprogram",
  "from_channel": "gjjk_pro",
  "grantType": "gj_app_auth",
  "shareId": "",
  "siteId": "miniprogram",
  "source": "",
  
}
};



var everyDaySign = {
  url: "https://api.gaojihealth.cn/gulosity/api/dkUserEvent/everyDaySign",
  method: "POST",
  headers: {
  "Accept": "*/*",
  "Accept-Encoding": "br, gzip, deflate",
  "Accept-Language": "zh-cn",
  "Authorization": "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNDYzMjIwNywianRpIjoiMmVmYjJiYWEtYzZiNS00NWJhLWE0ZGItMTJlNjE3Yzk3ZTQ4IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.ecij4_FXfHf1L5qN5h66wOfOmS7Dc9Whoo9sbMJ_7c1xM99jmv-3iJvS-oEvESVe8aWHqqWP6rPifRnxSxSWmEmgBcOp7b3YwFlQLG4Em7iboBVb6AXdh5Jfrz1CH36qdPoYDDWCK0Znyydwzih_l2Is7sVtY77LzeUfQ5e3DpoDtc69F-WL_MAF_x2YrK_lUQ-5HU3AJ2DG6ICm63XahVaeHpwLk4fpQR2WG0MqZhVejSG7LQCJ9mg7Z6pEhlNP9JU_v6L94wn7H4jNeCDbYQLmjU9vuSFbJ44w-PDanv2sm5uD46tP_8j-ajwiS7CnW_VElcM3829rXxT84qEwOw",
  "Connection": "keep-alive",
  "Content-Length": "62",
  "Content-Type": "application/json;charset=utf-8;",
  "Cookie": "access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNDYzMjIwNywianRpIjoiMmVmYjJiYWEtYzZiNS00NWJhLWE0ZGItMTJlNjE3Yzk3ZTQ4IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.ecij4_FXfHf1L5qN5h66wOfOmS7Dc9Whoo9sbMJ_7c1xM99jmv-3iJvS-oEvESVe8aWHqqWP6rPifRnxSxSWmEmgBcOp7b3YwFlQLG4Em7iboBVb6AXdh5Jfrz1CH36qdPoYDDWCK0Znyydwzih_l2Is7sVtY77LzeUfQ5e3DpoDtc69F-WL_MAF_x2YrK_lUQ-5HU3AJ2DG6ICm63XahVaeHpwLk4fpQR2WG0MqZhVejSG7LQCJ9mg7Z6pEhlNP9JU_v6L94wn7H4jNeCDbYQLmjU9vuSFbJ44w-PDanv2sm5uD46tP_8j-ajwiS7CnW_VElcM3829rXxT84qEwOw;refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJhdGkiOiIyZWZiMmJhYS1jNmI1LTQ1YmEtYTRkYi0xMmU2MTdjOTdlNDgiLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNjg1NjE5MCwianRpIjoiYTdkNjllNjEtOTM4MS00YTEyLWI2ZTEtZTFlZTYwYTNmZjM2IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.NveNH1_lHxT57GAxCt1q74XmZHV-VxP5-uRbjFtz1q8ZciCzMa2jYbdP5hwVlJIi-g2uIYgfEoIFZiElddDY1ZaJ3zsmsexPRhY4_uCPRtljA-R4SmgbDBtszaUkkFt6QL6jdXLmgcrd3pjeVYRz6qRGOXw4moY73ZUGeejurDSGY83wDInkHBz4rhFCseH5rlQK70phxzOQ6A4jyFfUj6JIZozJNrZU7cYPhzCEwv-kmo796LG6qqTCQ6bwfiDMcNMPi5fizFjtBULyNs68-kKlWbcr0B7jIKM_esn58t1gKQmgfSgtpHJFDiRjqgjOXAyOwGCr6vsoOJbzWdJH8Q;grant_type=gj_app_auth;XSRF-TOKEN=bd5df995-8ec3-4116-b9ee-e481b788dbcb",
  "Host": "api.gaojihealth.cn",
  "Referer": "https://servicewechat.com/wx73ec617ea0a6c8e8/324/page-frame.html",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C104 MicroMessenger/7.0.13(0x17000d2a) NetType/WIFI Language/zh_CN",
  "X-XSRF-TOKEN": "bd5df995-8ec3-4116-b9ee-e481b788dbcb",
  "channelPrice": "B2C",
  "client-id": "miniprogram",
  "from_channel": "gjjk_pro",
  "grantType": "gj_app_auth",
  "shareId": "",
  "siteId": "miniprogram",
  "source": "",
  
},
  body: {}
};

var sharePage = {
  url: "https://api.gaojihealth.cn/gulosity/api/dkUserEvent/sharePageCompleteTaskEvent",
  method: "POST",
  headers: {
  "Accept": "*/*",
  "Accept-Encoding": "br, gzip, deflate",
  "Accept-Language": "zh-cn",
  "Authorization": "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNDYzMjIwNywianRpIjoiMmVmYjJiYWEtYzZiNS00NWJhLWE0ZGItMTJlNjE3Yzk3ZTQ4IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.ecij4_FXfHf1L5qN5h66wOfOmS7Dc9Whoo9sbMJ_7c1xM99jmv-3iJvS-oEvESVe8aWHqqWP6rPifRnxSxSWmEmgBcOp7b3YwFlQLG4Em7iboBVb6AXdh5Jfrz1CH36qdPoYDDWCK0Znyydwzih_l2Is7sVtY77LzeUfQ5e3DpoDtc69F-WL_MAF_x2YrK_lUQ-5HU3AJ2DG6ICm63XahVaeHpwLk4fpQR2WG0MqZhVejSG7LQCJ9mg7Z6pEhlNP9JU_v6L94wn7H4jNeCDbYQLmjU9vuSFbJ44w-PDanv2sm5uD46tP_8j-ajwiS7CnW_VElcM3829rXxT84qEwOw",
  "Connection": "keep-alive",
  "Content-Length": "62",
  "Content-Type": "application/json;charset=utf-8;",
  "Cookie": "access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNDYzMjIwNywianRpIjoiMmVmYjJiYWEtYzZiNS00NWJhLWE0ZGItMTJlNjE3Yzk3ZTQ4IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.ecij4_FXfHf1L5qN5h66wOfOmS7Dc9Whoo9sbMJ_7c1xM99jmv-3iJvS-oEvESVe8aWHqqWP6rPifRnxSxSWmEmgBcOp7b3YwFlQLG4Em7iboBVb6AXdh5Jfrz1CH36qdPoYDDWCK0Znyydwzih_l2Is7sVtY77LzeUfQ5e3DpoDtc69F-WL_MAF_x2YrK_lUQ-5HU3AJ2DG6ICm63XahVaeHpwLk4fpQR2WG0MqZhVejSG7LQCJ9mg7Z6pEhlNP9JU_v6L94wn7H4jNeCDbYQLmjU9vuSFbJ44w-PDanv2sm5uD46tP_8j-ajwiS7CnW_VElcM3829rXxT84qEwOw;refresh_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIxNjQxMjc0NTEwMDIyNzM1Iiwib3BlbklkIjpudWxsLCJyb2xlcyI6IltcIkdKX0FQUF9VU0VSXCJdIiwiYnVzaW5lc3NJZCI6IjIyNzM1IiwiaGVhZFVybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTNhdUhnend6TTUzTHN4cWliOEwwMER3SGpIamNlaWFlcGoyaWNSdXlpY1pzejBReTl1ZEJpYnpHRE1mUlZxU3Z2YTdOOVBkUXNmYmhwQ3pmRjFHRDRFdjRUUS8xMzIiLCJnampGbGFnIjpmYWxzZSwidHlwZSI6IjIiLCJwbGF0Zm9ybSI6ZmFsc2UsImNsaWVudF9pZCI6IndlYl9hcHAiLCJtaW5pT3BlbklkIjoib3B0eGQ1YW9VSFU4LVp0dUJtVkJXVEQxZDVrcyIsInBsYXRmb3JtQnVzaW5lc3NJZCI6IjIxMjc5OCIsInBsYXRmb3JtVXNlcklkIjoiNTEzMTE5MTAzMTgxMjc5OCIsInNjb3BlIjpbIm9wZW5pZCJdLCJhdGkiOiIyZWZiMmJhYS1jNmI1LTQ1YmEtYTRkYi0xMmU2MTdjOTdlNDgiLCJsb2dpbk5hbWUiOjE2NDEyNzQ1MTAwMjI3MzUsImV4cCI6MTYxNjg1NjE5MCwianRpIjoiYTdkNjllNjEtOTM4MS00YTEyLWI2ZTEtZTFlZTYwYTNmZjM2IiwidW5pb25JZCI6Im9XTXM0MUxQRUVHMVoyODh0UDhuSjR4OFhLNG8iLCJ1c2VySWQiOiIxNjQxMjc0NTEwMDIyNzM1IiwiYXV0aG9yaXRpZXMiOlsiR0pfQVBQX1VTRVIiXSwicGhvbmUiOiIxNzMxMDU2OTYzOSIsIm5hbWUiOiLnpZ7nu4_om5kiLCJpc05ld01lbWJlciI6ZmFsc2UsImVuY29kZVBob25lIjoiMTczKioqKjk2MzkiLCJ3eEJpbmRTdGF0dXMiOnRydWUsImdyYW50VHlwZSI6ImdqX2FwcF9hdXRoIiwic3RhdHVzIjoiMyJ9.NveNH1_lHxT57GAxCt1q74XmZHV-VxP5-uRbjFtz1q8ZciCzMa2jYbdP5hwVlJIi-g2uIYgfEoIFZiElddDY1ZaJ3zsmsexPRhY4_uCPRtljA-R4SmgbDBtszaUkkFt6QL6jdXLmgcrd3pjeVYRz6qRGOXw4moY73ZUGeejurDSGY83wDInkHBz4rhFCseH5rlQK70phxzOQ6A4jyFfUj6JIZozJNrZU7cYPhzCEwv-kmo796LG6qqTCQ6bwfiDMcNMPi5fizFjtBULyNs68-kKlWbcr0B7jIKM_esn58t1gKQmgfSgtpHJFDiRjqgjOXAyOwGCr6vsoOJbzWdJH8Q;grant_type=gj_app_auth;XSRF-TOKEN=bd5df995-8ec3-4116-b9ee-e481b788dbcb",
  "Host": "api.gaojihealth.cn",
  "Referer": "https://servicewechat.com/wx73ec617ea0a6c8e8/324/page-frame.html",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C104 MicroMessenger/7.0.13(0x17000d2a) NetType/WIFI Language/zh_CN",
  "X-XSRF-TOKEN": "bd5df995-8ec3-4116-b9ee-e481b788dbcb",
  "channelPrice": "B2C",
  "client-id": "miniprogram",
  "from_channel": "gjjk_pro",
  "grantType": "gj_app_auth",
  "shareId": "",
  "siteId": "miniprogram",
  "source": "",
  
},
  body: {}
};



signActivityPage();


//签到页面
function signActivityPage() {
  $nobyda.get(findDkSignActivityPage, function(error, response, data) {
    if (error) {
      $nobyda.notify("高济百姓缘", "未获取到签到页面信息", "");
      $nobyda.done()
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
    $nobyda.notify("高济百姓缘", "今日已签到", "");
    return; 
  }


  console.log(`开始签到`);
//   "businessId": `${res.baseInfoModule.businessId}`,
  everyDaySign.body = {
        "businessId": `${businessId}`,
        "userId": `${userId}`,
        "taskId": `${res.signModule.taskId}`
  }

  $nobyda.post(everyDaySign, function(error, response, data) {

      if (error) {
        console.log(`签到失败`);
        $nobyda.notify("高济百姓缘", "签到失败", "");

      } else {
        try {
          var addResult = JSON.parse(data);
          if (addResult.opCode == 200) {
            console.log(addResult.opMsg);
            $nobyda.notify("高济百姓缘", addResult.opMsg, "");
          } 
        } catch (e) {

        }
      }
      
      
  })

}


//分享
function taskModule(res) {

  
  if (res.taskModule.integralTaskList[0].status != 0 && res.taskModule.integralTaskList[0].leftTimes == 0) {
    $nobyda.notify("高济百姓缘", "今日已分享", "");
    return;
  }


  console.log(`开始分享`);

  sharePage.body = {
            "browsePageId":`${res.taskModule.integralTaskList[0].browsePageId}`,
            "browsePageUrl":`${res.taskModule.integralTaskList[0].browsePageUrl}`,
            "taskId": `${res.taskModule.integralTaskList[0].taskId}`
  }


  $nobyda.post(sharePage, function(error, response, data) {
      if (error) {
        console.log(`分享失败`);
        $nobyda.notify("高济百姓缘", "分享失败", "");

      } else {
        try {
          var addResult = JSON.parse(data);
          if (addResult) {
            console.log("分享成功");
            $nobyda.notify("高济百姓缘","分享成功" , "");
          } 
        } catch (e) {
          $nobyda.done()
        }
      }
  })
}












function nobyda() {
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
