!
    function() {
        var a = {
            setCookie: function(a, b) {
                var c = 30,
                    d = new Date;
                d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3),
                    document.cookie = a + "=" + escape(b) + "; expires=" + d.toGMTString()
            },
            getCookie: function(a) {
                var b, c = new RegExp("(^| )" + a + "=([^;]*)(;|$)");
                return (b = document.cookie.match(c)) ? unescape(b[2]) : null
            },
            clearCookie: function() {
                var a = document.cookie.match(/[^ =;]+(?=\=)/g);
                if (a) for (var b = a.length; b--;) document.cookie = a[b] + "=0;expires=" + new Date(0).toUTCString()
            },
            parseQuery: function(a) {
                var a = a ? a: location.search,
                    b = new Object;
                if ( - 1 != a.indexOf("?")) for (var c = a.substr(1), d = c.split("&"), e = 0; e < d.length; e++) try {
                    b[d[e].split("=")[0]] = decodeURI(d[e].split("=")[1])
                } catch(f) {
                    b[d[e].split("=")[0]] = unescape(d[e].split("=")[1])
                }
                return b
            },
            toParam: function(a) {
                var b = [];
                for (var c in a) b.push(c + "=" + a[c]);
                return b.join("&")
            },
            rnd: function(a, b) {
                return Math.floor((b - a) * Math.random() + a)
            },
            getByteLength: function(a) {
                return (a + "").replace(/[^\x00-\xff]/g, "mm").length
            },
            downloadMGTV: function() {
                this.isUA("weixin") ? window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.hunantv.imgo.activity": this.isUA("ios") ? window.location.href = "https://itunes.apple.com/cn/app/id629774477?pt=355474&ct=mgtv&mt=8": window.location.href = "http://www.hunantv.com/v/m/v/2015/mandroid/"
            },
            isUA: function(a) {
                var b = window.navigator.userAgent.toLowerCase();
                switch (a) {
                    case "qq":
                        return /qqbrowser/.test(b);
                    case "weixin":
                        return /micromessenger|weixin/.test(b);
                    case "android":
                        return /android/.test(b);
                    case "ios":
                        return /iphone|ipad|itouch|ipod/.test(b);
                    case "mgtv":
                        return /imgo/.test(b);
                    default:
                        return ! 1
                }
            },
            share2Weixin: function(a) {
                var b = location.href.split("#")[0];
                $.ajax({
                    url: "http://v.api.hunantv.com/weixin/sign",
                    data: {
                        url: b
                    },
                    dataType: "jsonp",
                    type: "get",
                    success: function(b) {
                        200 == b.status && (wx.config({
                            debug: !1,
                            appId: b.data.appId,
                            timestamp: b.data.timestamp,
                            nonceStr: b.data.nonceStr,
                            signature: b.data.signature,
                            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
                        }), wx.ready(function() {
                            wx.onMenuShareTimeline({
                                type: "link",
                                title: a.title,
                                link: a.link,
                                imgUrl: a.imgUrl,
                                success: function() {
                                    _czc.push(["_trackEvent", "微信分享", "分享到朋友圈"])
                                },
                                cancel: function() {}
                            }),
                                wx.onMenuShareAppMessage({
                                    type: "link",
                                    title: a.title,
                                    desc: a.desc,
                                    link: a.link,
                                    imgUrl: a.imgUrl,
                                    success: function() {
                                        _czc.push(["_trackEvent", "微信分享", "分享给朋友"])
                                    },
                                    cancel: function() {}
                                })
                        }))
                    },
                    timeout: 5e3
                })
            },
            openApp: function(a, b) {
                var c = document.createElement("iframe");
                c.src = a,
                    c.style.display = "none",
                    document.body.appendChild(c),
                    setTimeout(function() {
                            document.body.removeChild(c),
                            "function" == typeof b && b()
                        },
                        3e3)
            },
            jumpPage: function(a) {
                this.isUA("mgtv") ? ImgotvApi.jumpPage({
                    url: a
                }) : window.location.href = a
            },
            changeVideo: function(a) {
                var b = a.url || window.location.href.split("?")[0];
                if ("vod" == a.vType) ImgotvApi.changeVideo({
                    collectionId: a.collectionId,
                    videoId: a.videoId,
                    vType: a.vType
                });
                else if ("live" == a.vType) {
                    var c = b + "?" + this.toParam({
                            videoid: a.liveId || 0,
                            type: 1,
                            category: "liveshow",
                            sourceid: a.sourceId || 0,
                            sid: 0,
                            title: encodeURIComponent(a.liveTitle || "test title"),
                            v: (new Date).getTime()
                        });
                    ImgotvApi.changeVideo({
                        videoId: a.liveId || 0,
                        sid: 0,
                        cameraid: 0,
                        category: "liveshow",
                        type: 1,
                        hUrl: encodeURIComponent(c),
                        vType: a.vType
                    })
                } else if ("native" == a.vType) {
                    var c = b + "?" + this.toParam({
                            videoid: a.cameraId || 0,
                            type: 1,
                            category: "liveshow",
                            sourceid: a.sourceId || 0,
                            sid: 0,
                            title: encodeURIComponent(a.cameraName || "test title"),
                            v: (new Date).getTime()
                        });
                    ImgotvApi.changeVideo({
                        videoId: a.cameraId || 0,
                        sid: 0,
                        cameraId: a.cameraId || 0,
                        cameraName: encodeURIComponent(a.cameraName || "test title"),
                        category: "liveshow",
                        type: 1,
                        hUrl: encodeURIComponent(c),
                        vType: a.vType
                    })
                }
            },
            openConcertPlayer: function(a) {
                var b = a.url || window.location.href.split("?")[0];
                if (a.activityId) var c = "imgotv://concertPlayer?" + MGUtils.toParam({
                        activityId: a.activityId || 0,
                        videoId: a.liveId || 0,
                        type: 0
                    });
                else var d = b + "?" + MGUtils.toParam({
                            videoid: a.liveId || 0,
                            type: 1,
                            category: "liveshow",
                            sourceid: a.sourceId || 0,
                            sid: 0,
                            title: encodeURIComponent(a.liveTitle),
                            v: (new Date).getTime()
                        }),
                    c = "imgotv://concertPlayer?" + MGUtils.toParam({
                            videoId: a.liveId || 0,
                            type: 1,
                            category: "liveshow",
                            isNeedPay: 0,
                            sid: 0,
                            hUrl: encodeURIComponent(d)
                        });
                window.location.href = c
            },
            getData: function(a, b, c, d) {
                var e = this,
                    f = {
                        url: a,
                        data: b,
                        success: function(d) {
                            console.log(a + "?" + e.toParam(b), d),
                            "function" == typeof c && c(d)
                        },
                        error: function() {
                            "function" == typeof d && d()
                        },
                        timeout: 1e4
                    };
                "post" == b.method ? f.method = "post": f.dataType = "jsonp",
                    $.ajax(f)
            },
            isEmptyObj: function(a) {
                for (var b in a) if (a.hasOwnProperty(b)) return ! 1;
                return ! 0
            },
            getLocalTime: function(a) {
                return new Date(1e3 * parseInt(a)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
            },
            getTimestamp: function(a) {
                return new Date(a.replace(/-/g, "/")).getTime()
            },
            delHtmlTag: function(a) {
                return a.replace(/<[^>]+>/g, "")
            }
        };
        window.MGUtils = a
    } ();