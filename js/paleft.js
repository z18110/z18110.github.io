var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onlyExternal : true,
    effect : 'fade',
    paginationBulletRender: function(a, b) {
        switch (a) {
            case 0:
                name = "北京";
                break;
            case 1:
                name = "武汉";
                break;
            case 2:
                name = "上海";
                break;
            case 3:
                name = "广州";
                break;
            case 4:
                name = "深圳";
                break;
            case 5:
                name = "长沙";
                break;
            case 6:
                name = "成都";
                break;
            case 7:
                name = "杭州";
                break;
            case 8:
                name = "地区";
                break;
            case 9:
                name = "地区";
                break;
            default:
                name = ""
        }
        return '<i class="' + b + '">' + name + "</i>"
//                return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    onProgress: function(a) {
        var b, c, d;
        for (b = 0; b < a.slides.length; b++) c = a.slides[b],
            d = c.progress,
            scale = 1 - Math.min(Math.abs(.2 * d), 1),
            es = c.style,
            es.opacity = 1 - Math.min(Math.abs(d / 2), 1),
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = "translate3d(0px,0," + -Math.abs(150 * d) + "px)"
    },
    onSetTransition: function(a, b) {
        for (var c = 0; c < a.slides.length; c++) es = a.slides[c].style,
            es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = b + "ms"
    }
});