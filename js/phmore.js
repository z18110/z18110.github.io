var _content = []; //临时存储li循环内容
var btmore = {
    _default:15, //默认显示个数
    _loading:3,  //每次加载的个数
    init:function(){
        var lis = $(".btmore .hidden li");
        $(".btmore ul.list").html("");
        for(var n=0;n<btmore._default;n++){
            lis.eq(n).appendTo(".btmore ul.list");
        }
        $(".btmore ul.list img").each(function(){
            $(this).attr('src',$(this).attr('realSrc'));
        })
        for(var i=btmore._default;i<lis.length;i++){
            _content.push(lis.eq(i));
        }
        $(".btmore .hidden").html("");
    },
    loadMore:function(){
        var mLis = $(".btmore ul.list li").length;
        for(var i =0;i<btmore._loading;i++){
            var target = _content.shift();
            if(!target){
                $('.btmore .more').html("<p style='font-size: 0.6em'>没有更多了...</p>");
                break;
            }
            $(".btmore ul.list").append(target);
            $(".btmore ul.list img").eq(mLis+i).each(function(){
                $(this).attr('src',$(this).attr('realSrc'));
            });
        }
    }
}
btmore.init();
$(document).ready(function() {
    $(window).scroll(function() {
        //$(document).scrollTop() 获取垂直滚动的距离
        //$(document).scrollLeft() 这是获取水平滚动条的距离
        /** if ($(document).scrollTop() <= 0) {
                    alert("滚动条已经到达顶部");
                }
         **/
        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            btmore.loadMore();
        }
    });
});