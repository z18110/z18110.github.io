!function() {
    var a = window.navigator.userAgent.toLowerCase(),
        b = {
            isQQBrowser: /qqbrowser/.test(a),
            isWeixin: /micromessenger/.test(a) || /weixin/.test(a),
            isAndroid: /android/.test(a),
            isIOS: /iphone/.test(a) || /ipad/.test(a) || /itouch/.test(a) || /ipod/.test(a),
            isFirefox: /firefox/.test(a),
            isIpad: /ipad/.test(a)
            //isImgotv: /imgo/.test(a)
        };
    window.UA = b
} ();
!function() {
    var a = {
        url: "",
        get: function(a, b, c, d) {
            $.ajax({
                url: a,
                data: b,
                dataType: "",
                success: function(b) {
                }.bind(this),
                error: function() {
                    "function" == typeof d && d()
                },
                timeout: 2e4
            })
        },
        getHomeData: function(a, b) {
            this.get(" ", {},
                a, b)
        }
    };
    window.Api = a
} ();
document.addEventListener("DOMContentLoaded", !1),
    function() {
        var a = "",
            b = "",
            c = {
                init: function() {
                    var c = this;
                    c.showStartup(),
                        UA.isImgotv ? (ImgotvApi.getDeviceInfo(function(b) {b})) :  this.getHomeData(), this.pageCount = 1, this.bindEvents(), UA.isImgotv ? $(".comments .title span").addClass("hide") : $(".comments .hd").addClass("hide"), setTimeout(function() {var a = 1;a && "register" == a.open_pop && ($(".nav li").eq(1).trigger("click"), $(".js-btn-show-bmfs").trigger("click"))}, 1)},
                showStartup: function() {$(".startup .main").css({width: $(window).width(), height: $(window).height()});var a = function() {
                        $(".startup .main").addClass("slideToUp"),
                            $(".startup").css({
                                background: "none"
                            }),
                            $(".startup .main").one("webkitTransitionEnd",
                                function() {
                                    $(".startup").addClass("hide"),
                                        $(".nav-p").addClass("flash")
                                })
                    };
                    $(".startup p").on("click",
                        function() {
                            a()
                        }),
                        setTimeout(function() {
                                a()
                            },
                            1e4)
                },

                // 显示启动界面
                showStartup: function () {
                    // 一天只显示一次启动界面
                    var date = new Date();
                    var y = date.getFullYear();
                    var m = date.getMonth() + 1;
                    var d = date.getDate();
                    var s = '' + y + m + d;

                    if (MGUtils.getCookie('mdate') == s) {
                        $('.nav-p').addClass('flash');
                        $('.startup').remove();
                        return;
                    } else {
                        MGUtils.setCookie('mdate', s);
                    }

                    $(window).on('touchmove', function (event) {
                        event.preventDefault();
                    });

                    $('.startup .main').css({
                        'width': $(window).width(),
                        'height': $(window).height()
                    });
                    var hideStartup = function () {
                        $('.startup .main').addClass('slideToUp');
                        $('.startup').css({
                            'background': 'none'
                        });

                        $('.startup .main').one('webkitTransitionEnd', function () {
                            $('.startup').addClass('hide');
                            $('.nav-p').addClass('flash');

                            $(window).off('touchmove');
                        });
                    };

                    $('.startup p').on('click', function () {
                        hideStartup();
                    });

                    setTimeout(function () {
                        hideStartup();
                    }, 6000);
                },

                getHomeData: function() {var a = this;Api.getHomeData(function(b) {if (200 == b.err_code) {}}, function() {a.getHomeData()})},
                getEnterStatus: function() {var a = this;},
                bindEvents: function() {
                    var c = this;
                        c.sliderHZZTQCQ = {},
                        $(".js-btn-load-comment").on("click",
                            function() {
                                c.pageCount++,
                                    c.getComments()
                            }),
                        $(".js-btn-add-comment").on("click",
                            function() {
                                c.addComment()
                            }),

                        c.isInitShowNav = !0,
                        $(".mg-nav-fix").on("click", ".nav-p",
                            function() {
                                var a = $(this);
                                return c.isInitShowNav ? (c.isInitShowNav = !1, a.removeClass("show"), $(".mg-nav-fix .mask").show(), a.toggleClass("expend"), void $(".nav-c").slideDown(150)) : void(a.hasClass("expend") ? $(".nav-c").slideUp(150,
                                    function() {
                                        a.toggleClass("expend"),
                                            $(".mg-nav-fix .mask").hide()
                                    }) : ($(".mg-nav-fix .mask").show(), a.toggleClass("expend"), a.one("webkitTransitionEnd",
                                    function() {
                                        $(".nav-c").slideDown(150)
                                    })))
                            }),
                        $(".mg-nav-fix").on("click", ".mask",
                            function() {
                                $(".nav-c").slideUp(150,
                                    function() {
                                        $(".nav-p").toggleClass("expend"),
                                            $(".mg-nav-fix .mask").hide()
                                    })
                            }),
                        $(".nav-s").on("click", "li",
                            function() {
                                $(".nav-c").slideUp(150,
                                    function() {
                                        $(".nav-p").toggleClass("expend"),
                                            $(".mg-nav-fix .mask").hide()
                                    });
                                var a = $(this).data("type");
                                $(".nav-3").addClass("hide"),
                                    $(".nav-" + a).removeClass("hide");
                                var b = $(".nav-wrap").offset().top;
                                if ($("body").scrollTop(b), $(".main-content .pannel").addClass("hide"), $(".main-content .pannel-" + a).removeClass("hide"), "sddm" == a) {
                                    if (c.sliderDMSQ) return;
                                    if (new IScroll(".wrap2", {
                                            eventPassthrough: !0,
                                            scrollX: !0,
                                            scrollY: !1,
                                            preventDefault: !1
                                        }), $(".pannel-sddm .qgsbq .bd li").length <= 6) return;
                                    c.sliderDMSQ = new Swiper(".pannel-sddm .qgsbq .swiper-container", {
                                        pagination: ".pannel-sddm .qgsbq .swiper-pagination",
                                        autoplay: 4e3,
                                        loop: !0,
                                        autoplayDisableOnInteraction: !1
                                    })
                                }
                                if ("hzzt" == a) {
                                    if (c.sliderHZZTQ) return;
                                    new IScroll(".wrap3", {
                                        eventPassthrough: !0,
                                        scrollX: !0,
                                        scrollY: !1,
                                        preventDefault: !1
                                    }),
                                        $(".saiqu .hd li").eq(0).trigger("click");
                                    for (var d = 0; 3 > d; d++) c.sliderHZZTQCQ[d] && c.sliderHZZTQCQ[d].slideTo(1);
                                    if ($(".pannel-hzzt .qgsbq .bd li").length <= 6) return;
                                    c.sliderHZZTQ = new Swiper(".pannel-hzzt .qgsbq .swiper-container", {
                                        pagination: ".pannel-hzzt .qgsbq .swiper-pagination",
                                        autoplay: 4e3,
                                        loop: !0,
                                        autoplayDisableOnInteraction: !1
                                    })
                                }
                            })
                }
            };
        $(function() {
            c.init()
        })
    } ();