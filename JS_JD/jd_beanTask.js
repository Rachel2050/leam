/*

京东抽奖机
活动入口：京东APP中各种抽奖活动的汇总
自用
author：yangtingxiao
github： https://github.com/yangtingxiao
 */
const $ = new Env('领京豆');

let isCookieEnabled = true

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '';


let bodyArr = [
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaR5jAOCGH83npInGk"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn WJESU/2181NVn2bRzdsgHtdYHn b4xF6q /XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=93369fa25d432fdccce9aba17d408c79&st=1616500259452&sv=100&uts=0f31TVRjBStrZucTk N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ yLbSRDYc34 rJWGp1b9 z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9 Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,


            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaS5jQMCGH83nlMkvw"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn WJESU/2181NVn2bRzdsgHtdYHn b4xF6q /XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=ef2c12b0d4e0cb10d2bb198f60b8bc83&st=1616500370082&sv=121&uts=0f31TVRjBStrZucTk N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ yLbSRDYc34 rJWGp1b9 z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9 Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaT5jcMCGH82HtOlD8"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn WJESU/2181NVn2bRzdsgHtdYHn b4xF6q /XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=ca6f9b13c31aec94259611a7a058ffe3&st=1616500415888&sv=110&uts=0f31TVRjBStrZucTk N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ yLbSRDYc34 rJWGp1b9 z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9 Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaU5jwPCGH82XtIlvg"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=12e4303d0b5f6441a3eebd27d75c7a9f&st=1616500457962&sv=122&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaV5jENCGH82HpPkMQ"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=9478c23a8cb331e4ddf2868887014c52&st=1616500592386&sv=110&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaV5jENCGH823hJlTw"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=7503dd8554b3e1582fcbcbda760ff705&st=1616500620711&sv=102&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaV5jENCGH823hNld0"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=712f414200a66ea02d4e1e062a6e80ea&st=1616500660312&sv=110&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaV5jENCGH823hDkOY"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=d200de966ad881208e11b60d0dbc3d48&st=1616500698548&sv=121&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaW5jQICGD43HhClRw"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=91d90df56eff37481a77e5e48421e43b&st=1616500873382&sv=101&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaW5jAKDGf7"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=cc94f8603ccd046905632097e4d208a1&st=1616500898304&sv=111&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaW5jQICGn833xD"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=5efd59f4b38e4a1d0cca8c9a3a9ab8c6&st=1616500916908&sv=111&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaW5jQICGD53n5ClYs"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=607475725ce8e6bb01c50ed7b8efc5ca&st=1616500929339&sv=101&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaW5jQIC2Hx1XRK"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=c68717eea7301d65aecf2d8ee8dba3c7&st=1616500944876&sv=100&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jIIDmT92XQ%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=1bedc8f4a862cfa8e497c3fd83e78b60&st=1616505240368&sv=101&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jMOAWLw3X8%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=2779585bcb9d9244a084f6e766f0c312&st=1616505256937&sv=121&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD5339KnTrb1g%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=d4d67590ba05bd509fcc7c002d6e2d38&st=1616505271489&sv=111&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD423tPkBkNLw%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=ada06e2637af61209f2867230453e8c6&st=1616505285472&sv=100&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD53XtLkzmPAw%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=302c155c81af2f5902274d1ed956bcb7&st=1616505308191&sv=121&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,

            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD42XxJneMruQ%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=bf8e34751ed2251be20c531cde282202&st=1616505342795&sv=121&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD43XhDnPaGjg%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=761a0d1b0d02c3bfd9235fa3560e3c1a&st=1616505363751&sv=112&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD42n5Pk6WyWA%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=4705c95a4d63bd41befee2588ca40c0c&st=1616505378441&sv=122&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD41HlMkkJxMQ%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=d89ef08cff88e8cfff27af865d27355f&st=1616505396044&sv=122&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5j0MD2f_33k%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=3776bfe220b86a94d7be85fa603249d0&st=1616505412398&sv=101&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,

            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jcACWj93H8%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=85c8e1342de564a05832a663c4992089&st=1616505439348&sv=112&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQKDGL91XU%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=4ba132cfc1b8e7d47fd7208f6b18b994&st=1616505454919&sv=100&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD42n5ClcrDJQ%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=7aafa8c547506c76ebf4e6c545182566&st=1616505476657&sv=100&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQJDGH433RCksJq%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=d8d6a74d3dd027d4e1770a4cb81d90ed&st=1616505491639&sv=110&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQJDGD52X1LlXYP%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=60541e7de998b56afec93438f34748fb&st=1616505511070&sv=100&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jQICGD52HRIk-fCNQ%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=5cf581f6425bbb5cc50ef064ae23d192&st=1616505530471&sv=112&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,

            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jYNCGP_2Xg%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=6fb41df2041ee9512cb059c99baa13f5&st=1616505560665&sv=111&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jENDGT423w%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=d4baf3385d61ffb9d6cadb3041277c17&st=1616505590413&sv=110&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5jABCGP4234%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=55b4a11ae17dee29724fd282cfa76f56&st=1616505607750&sv=112&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body=%7B%22actionType%22%3A0%2C%22taskToken%22%3A%22P225KkcRUoR9VXXIR30nfVfcwCjVVnoaX5j0ADWH-2w%22%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750%2A1334&sign=4f8bfbbe681ac9d735c044505606ac54&st=1616505623544&sv=102&uts=0f31TVRjBStrZucTk%2BN6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR%2BtwJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R%2BK14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaY5jMMCGH82HVKk4I"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=799bdfcb85af6f8d74fbc9d2288669d2&st=1616501006805&sv=101&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qU0UQlmJoUZOyGWEKx9E6sqyLWrZ1VrtarqgJ+yLbSRDYc34+rJWGp1b9+z0d20lsxLm20LbwTzE/MIy3rXDJ1f6Q5IT4zHWNpmaZE9nqBBBcVGQsERdsaBwVsFEonU0w7XPzWojhXnLzoo8k5vrSZx6vTg4IYCcm9U/9+Wiz49aU6ZrkqB98WwA==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,
            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaY5jMMCGH82HVKk4Q"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=bba293a137988fbca77a4bfe387124d3&st=1616504731419&sv=122&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR+twJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R+K14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,




            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaZ5jQKCGH82H1IlC0"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=ebc1f5162d9226eb5947ab5d4bce8026&st=1616504760916&sv=110&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR+twJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R+K14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaRzR4JD2D52XlMnRp5"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=163dd22c9ffd774e930bbedd95bf6cf4&st=1616504823545&sv=120&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR+twJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R+K14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`,



            `area=1_72_55663_0&body={"actionType":0,"taskToken":"P225KkcRUoR9VXXIR30nfVfcwCjVVnoaRzB4JDWD52XlPnTY6"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=01&screen=750*1334&sign=e64055735aafd921e4b5ded518786f3d&st=1616504854597&sv=121&uts=0f31TVRjBStrZucTk+N6fiFwQEJWC3qUPTJOGjtZaDUwC3uw0um9XIpQKQV5PJeR+twJnhhUyV8W2TsOeC0bJzlz3LN0zQz24OrqZoFPKl9UQ01UG8yt2O3fpP54mxHkyLgZj4W5DH7pfYDP4d9R+K14CWeaiBWFjC9MIwdrBgLUKRffw3UCMuIi51UJ2RoiVPb7yGe9q7LrR0OhlpaXpw==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=d71cbd0cc92be6a2fc5294ff331efb3e`
        ];




const JD_API_HOST = `https://api.m.jd.com/client.action`;
!(async () => {

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

      await  QueryJDUserInfo();
      if (!isCookieEnabled)  //cookie不可用
      {
        $.setdata('', `CookieJD${i ? i + 1 : "" }`);//cookie失效，故清空cookie。
        $.msg($.name, `【提示】京东账号${i + 1} cookie已过期！请先获取cookie\n直接使用NobyDa的京东签到获取`, 'https://bean.m.jd.com/', {"open-url": "https://bean.m.jd.com/"});
        continue;
      }
        await beanTaskList()
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
            isCookieEnabled = false
            return
          }

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
          "User-Agent": `JD4iPhone/167568 (iPhone; iOS 12.1.2; Scale/2.00)`,
          'Origin' : `https://h5.m.jd.com`
          
        },
        body : `area=1_72_55663_0&body=%7B%7D&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9%2C1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn%2BWJESU/2181NVn2bRzdsgHtdYHn%2Bb4xF6q%2B/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=11&screen=750%2A1334&sign=3066a9f64f1a0795de5cd83da35621b0&st=1616330298364&sv=121&uts=0f31TVRjBSvniHyqoNcU8M4prYkXoXcvTEDPa1t1k5R8yhpaNubQznzqAY89TwN/VG/B2uJRTQOCbcXBb54PO8aNEItTozwD5gIHPHt/gFoat7lXUS/pQDp0fHySzxzx7Up5b9MQmrvJV%2B6%2B5eHWMMCLMBRNVpNaj4LhOfAAtFu48qGMFk791dt3SCtAlCCfYZtKm8B4fPIllSd/h839NA%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=8b6538c87651072c4219343f91d578ed`
      }

      $.post(url, async (err, resp, data) => {
        try {
          //console.log(JSON.stringify(data));;
          data = JSON.parse(data);
          
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}

function beanTaskList() {
  console.log("\n" + bodyArr.length)
  for (let i = 0;i < bodyArr.length;i ++) {

      await doTask(bodyArr[i])
  }
}

//做任务
function doTask(body) {
  console.log("\n" + body)

  return
  return new Promise((resolve) => {
    setTimeout( ()=>{
      let url = {
        url : `${JD_API_HOST}?functionId=beanDoTask`,
        

        headers : {
          //'Origin' : `https://h5.m.jd.com`,
          'Cookie' : cookie,
          'Connection' : `keep-alive`,
          "Accept": "*/*",
          'Host' : `api.m.jd.com`,
          'Accept-Encoding' : `gzip, deflate, br`,
          "Accept-Language": "zh-Hans-US;q=1, en-US;q=0.9, zh-Hant-US;q=0.8",
          "User-Agent": `JD4iPhone/167568 (iPhone; iOS 12.1.2; Scale/2.00)`
        },

        body : ${body}
        //`area=1_72_55663_0&body={"actionType":0,"taskToken":"${taskToken}"}&build=167568&client=apple&clientVersion=9.4.2&d_brand=apple&d_model=iPhone9,1&eid=eidIccf18121bas4HscOJ8UbQIKkaOkt7Bogux7HD5F6fWT/WfjJakYUXDmnQYfYRxQn+WJESU/2181NVn2bRzdsgHtdYHn+b4xF6q+/XIU7MkBIrpky&isBackground=N&joycious=80&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=b27e1d9e1268dffdc85e792c55c9d3fe6d3fffb7&osVersion=12.1.2&partner=apple&rfs=0000&scope=11&screen=750*1334&sign=d4f4ffe8e922db8a813a1152e0a59997&st=1616403027731&sv=100&uts=0f31TVRjBSvniHyqoNcU8M4prYkXoXcvgh6PMDKM078C40+lbb50LeER7BWix8wBgqH0AV5Og2Fmb271I/IwgjnL31YYFSRr1FWQadj9d6GpPvAmT9GUxuCayDIFYdufkBUoUMBdnmcAeSC0leJUBkIY4rP9k8UsXPnveCj3XolGtR8dDJ5D7HXLnIia7ls9bbPb2vsAixoxG/HdwEt9GQ==&uuid=hjudwgohxzVu96krv/T6Hg==&wifiBssid=8b6538c87651072c4219343f91d578ed`
      }


      $.post(url, async (err, resp, data) => {
        try {

          console.log(JSON.stringify(data));;
          //data = JSON.parse(data);


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






