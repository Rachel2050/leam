/*

京东抽奖机
活动入口：京东APP中各种抽奖活动的汇总
自用
author：yangtingxiao
github： https://github.com/yangtingxiao
 */
const $ = new Env('领京豆');
const printDetail = false;        //是否显示出参详情
let merge = {}



//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';
const JD_API_HOST = `https://api.m.jd.com/client.action`;
!(async () => {

  console.log(`0-----------------0`);
  await requireConfig()
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/', {"open-url": "https://bean.m.jd.com/"});
    return;
  }
  // for (let i = 0; i < cookiesArr.length; i++) {
  for (let i = 0; i < 1; i++) {
    cookie = cookiesArr[i];
    if (cookie) {
      if (i) console.log(`\n***************开始京东账号${i + 1}***************`)
      console.log(`1-----------------1`);  
      initial();
      console.log(`2-----------------2`);
      await  QueryJDUserInfo();
      if (!merge.enabled)  //cookie不可用
      {
        $.setdata('', `CookieJD${i ? i + 1 : "" }`);//cookie失效，故清空cookie。
        $.msg($.name, `【提示】京东账号${i + 1} cookie已过期！请先获取cookie\n直接使用NobyDa的京东签到获取`, 'https://bean.m.jd.com/', {"open-url": "https://bean.m.jd.com/"});
        continue;
      }
      //for (let j in appIdArr) {
        //j = appIdArr.length - 1
        //appId = appIdArr[j]
        //shareCode = shareCodeArr[j]
        //homeDataFunPrefix = homeDataFunPrefixArr[j]||'healthyDay'
        //collectScoreFunPrefix = collectScoreFunPrefixArr[j]||'harmony'
        //lotteryResultFunPrefix = lotteryResultFunPrefixArr[j]||'interact_template'
        //browseTime = 6
        //if (parseInt(j)) console.log(`\n开始第${parseInt(j) + 1}个抽奖活动`)
        console.log(`3-----------------3`);
        await interact_template_getHomeData();
        //break
      //}
      //await msgShow();
      //break
    }
  }
})()
  .catch(
    (e) => $.logErr(e)
  )
  .finally(
    () => $.done()
  )

//获取昵称
function QueryJDUserInfo(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let url = {
        url : `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
        headers : {
          'Referer' : `https://wqs.jd.com/my/iserinfo.html`,
          'Cookie' : cookie
        }
      }
      $.get(url, (err, resp, data) => {
        try {
          
          data = JSON.parse(data);
          if (data.retcode === 13) {
            merge.enabled = false
            return
          }

          merge.nickname = data.base.nickname;
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}




function requireConfig() {
  return new Promise(resolve => {
    //Node.js用户请在jdCookie.js处填写京东ck;
    const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
    //IOS等用户直接用NobyDa的jd cookie
    if ($.isNode()) {
      Object.keys(jdCookieNode).forEach((item) => {
        if (jdCookieNode[item]) {
          cookiesArr.push(jdCookieNode[item])
        }
      })
    } else {
      let cookiesData = $.getdata('CookiesJD') || "[]";
      cookiesData = jsonParse(cookiesData);
      cookiesArr = cookiesData.map(item => item.cookie);
      cookiesArr.reverse();
      cookiesArr.push(...[$.getdata('CookieJD2'), $.getdata('CookieJD')]);
      cookiesArr.reverse();
      cookiesArr = cookiesArr.filter(item => item !== "" && item !== null && item !== undefined);
    }
    console.log(`共${cookiesArr.length}个京东账号\n`);
    resolve()
  })
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}

//初始化
function initial() {
   merge = {
     nickname: "",
     enabled: true,
     redPacket: {prizeDesc : "抽得|红包|元",number : true,fixed : 2},  //定义 动作|奖励名称|奖励单位   是否是数字
     jdBeans: {prizeDesc : "抽得|京豆|个",number : true,fixed : 0}
  }
  for (let i in merge) {
    merge[i].success = 0;
    merge[i].fail = 0;
    merge[i].prizeCount = 0;
    merge[i].notify = "";
    merge[i].show = true;
  }
  merge.redPacket.show = false;
}


//获取活动信息
function interact_template_getHomeData(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let url = {
        url : `${JD_API_HOST}?functionId=beanTaskList`,
        headers : {
          "Accept": "*/*",
          "Accept-Encoding": "br, gzip, deflate",
          "Accept-Language": "zh-Hans-US;q=1, en-US;q=0.9, zh-Hant-US;q=0.8",
          'Connection' : `keep-alive`,
          'Host' : `api.m.jd.com`,
          'Cookie' : cookie,
          "User-Agent": `JD4iPhone/167169 (iPhone; iOS 13.4.1; Scale/3.00)`,
          'Origin' : `https://h5.m.jd.com`
          
        },
        body : `area=1_72_55663_0&body=%7B%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=11&screen=750%2A1334&sign=3066a9f64f1a0795de5cd83da35621b0&st=1616330298364&sv=121&uts=0f31TVRjBSvniHyqoNcU8M4prYkXoXcvTEDPa1t1k5R8yhpaNubQznzqAY89TwN/VG/B2uJRTQOCbcXBb54PO8aNEItTozwD5gIHPHt/gFoat7lXUS/pQDp0fHySzxzx7Up5b9MQmrvJV%2B6%2B5eHWMMCLMBRNVpNaj4LhOfAAtFu48qGMFk791dt3SCtAlCCfYZtKm8B4fPIllSd/h839NA%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=8b6538c87651072c4219343f91d578ed`
      }

      $.post(url, async (err, resp, data) => {
        try {
          if (printDetail) console.log(data);
          data = JSON.parse(data);
          console.log(JSON.stringify(data));
          return
          if (data.data.bizCode !== 0) {
            console.log(data.data.bizMsg);
            merge.jdBeans.fail++;
            merge.jdBeans.notify = `${data.data.bizMsg}`;
            return
          }
          scorePerLottery = data.data.result.userInfo.scorePerLottery||data.data.result.userInfo.lotteryMinusScore
          if (data.data.result.raiseInfo&&data.data.result.raiseInfo.levelList) scorePerLottery = data.data.result.raiseInfo.levelList[data.data.result.raiseInfo.scoreLevel];
          //console.log(scorePerLottery)
          for (let i = 0;i < data.data.result.taskVos.length;i ++) {
            console.log("\n" + data.data.result.taskVos[i].taskType + '-' + data.data.result.taskVos[i].taskName  + '-' + (data.data.result.taskVos[i].status === 1 ? `已完成${data.data.result.taskVos[i].times}-未完成${data.data.result.taskVos[i].maxTimes}` : "全部已完成"))
            //签到
            if (data.data.result.taskVos[i].status === 3) {
              console.log('开始抽奖')
              await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
              continue;
            }
            if ([0,13].includes(data.data.result.taskVos[i].taskType)) {
              if (data.data.result.taskVos[i].status === 1) {
                await harmony_collectScore(data.data.result.taskVos[i].simpleRecordInfoVo.taskToken,data.data.result.taskVos[i].taskId);
              }
              continue
            }
            if ([14,6].includes(data.data.result.taskVos[i].taskType)) {
              //console.log(data.data.result.taskVos[i].assistTaskDetailVo.taskToken)
              if (cookiesArr.indexOf(cookie) === 0) {
                shareCodeArr[appIdArr.indexOf(appId)] = data.data.result.taskVos[i].assistTaskDetailVo.taskToken
              }
              if (shareCode) await harmony_collectScore(shareCode,data.data.result.taskVos[i].taskId);
              for (let j = 0;j <(data.data.result.userInfo.lotteryNum||0);j++) {
                if (appId === "1EFRTxQ") {
                  await ts_smashGoldenEggs()
                }  else {
                  await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
                }
              }
              continue
            }
            let list = data.data.result.taskVos[i].productInfoVos || data.data.result.taskVos[i].followShopVo || data.data.result.taskVos[i].shoppingActivityVos || data.data.result.taskVos[i].browseShopVo
            if (data.data.result.taskVos[i].subTitleName.match(/(\d+)(s)/)) {
              browseTime = parseInt(data.data.result.taskVos[i].subTitleName.match(/(\d+)(s)/)[0])
            }
            for (let k = data.data.result.taskVos[i].times; k < data.data.result.taskVos[i].maxTimes; k++) {
              for (let j in list) {
                if (list[j].status === 1) {
                  //console.log(list[j].simpleRecordInfoVo||list[j].assistTaskDetailVo)
                  console.log("\n" + (list[j].title || list[j].shopName||list[j].skuName))
                  //console.log(list[j].itemId)
                  if (list[j].itemId) {
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId,list[j].itemId,1);
                    if (k === data.data.result.taskVos[i].maxTimes - 1) await interact_template_getLotteryResult(data.data.result.taskVos[i].taskId);
                  } else {
                    await harmony_collectScore(list[j].taskToken,data.data.result.taskVos[i].taskId)
                  }
                  list[j].status = 2;
                  break;
                } else {
                  continue;
                }
              }
            }
          }
          if (scorePerLottery) await interact_template_getLotteryResult();
          //for (let j = 0;j <(data.data.result.userInfo.lotteryNum||0 && appId === "1EFRTxQ");j++) {
          //    await ts_smashGoldenEggs()
          //}
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}











function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}






