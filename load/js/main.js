var $statu = $('.loading-warp .text');

	var pullRefresh = $('.container').pPullRefresh({
		$el: $('.container'),
		$loadingEl: $('.loading-warp'),
		sendData: null,
	//	url: 'test.php',
		callbacks: {
			pullStart: function(){
				$statu.text('松开开始刷新');
			},
			start: function(){
				$statu.text('数据刷新中···');
			},
			success: function(response){
				$statu.text('数据刷新成功！');
			},
			end: function(){
				$statu.text('下拉刷新结束');
				location.reload() 
				//alert('刷新成功');
			},
			error: function(){
				$statu.text('找不到请求地址,数据刷新失败');
			}
		}
	});

	
    $(function(){
        var counter = 0;
        // 每页num个数
        var num = 2;
        var pageStart = 0,pageEnd = 0;
        var data=[{
        "title": "汽车划痕修复专家",
		"titlepic": "img/1.jpg",
        "showname": "洗车,贴膜,打蜡",
        "star": "4.5",
        "pl": "22",
        "address": "关山大道光谷软件园",
        "distance": '500m',
        "smallname": "全合成油小保养套餐-经典壳牌",
		"price": "398",
    },
    {
        "title": "汽车划痕修复专家",
		"titlepic": "img/1.jpg",
        "showname": "洗车,贴膜,打蜡",
        "star": "4.5",
        "pl": "22",
        "address": "关山大道光谷软件园",
        "distance": '500m',
        "smallname": "全合成油小保养套餐-经典壳牌",
		"price": "398",
    },
    {
        "title": "汽车划痕修复专家",
		"titlepic": "img/1.jpg",
        "showname": "洗车,贴膜,打蜡",
        "star": "4.5",
        "pl": "22",
        "address": "关山大道光谷软件园",
        "distance": '500m',
        "smallname": "全合成油小保养套餐-经典壳牌",
		"price": "398",
    }]
        $('.content').dropload({
            scrollArea : window,
            loadDownFn : function(me){
                $.ajax({
                    //url:'data.php',
                    //dataType:'jsonp',
                    data:data,
                   // jsonp:'callback',
                    success: function(data){
                        var result = '';
                        counter++;
                        pageEnd = num * counter;
                        pageStart = pageEnd - num;
                        for(var i = pageStart; i < pageEnd; i++){
                            result +='<div class="section" style="margin-bottom: 1em"><div class="container"><div class="row"><div class="col-xs-4 lmvid">'
                            +'<a href="##">'
                            +'<img class="img-responsive lmimg1" src="img/1.jpg" ></a>'
                            +'</div><div class="col-xs-8 cl1">'
                            +'<p class="tit-1">汽车划痕修复专家</p>'
                            +'<table class="table"><td class="tit-2"><p><span class="note1">洗车</span><span class="note2">贴膜</span><span class="note3">打蜡</span></p></td></table>'
                            +'<table class="table">'
                            +'<td class="tit-2"><span class="star glyphicon glyphicon-star"></span><span class="star glyphicon glyphicon-star"></span><span class="star glyphicon glyphicon-star"></span><span class="star glyphicon glyphicon-star"></span><span class="star glyphicon glyphicon-star-empty"></span></td>'
                            +'<td class="tit-2" align="right">22条评论</td></table>'
                            +'<table class="table">'
                            +'<td class="tit-2">中心城区126号</td><td class="tit-2" align="right">500m</td></table>'
                             +'</div><div class="col-xs-12 cl2">'
                             +'<p class="tit-3">全合成油小保养套餐-经典壳牌<span class="tit-4" >&#65509;398</span></p>'
                             +'</div>'
                             +'</div></div></div>';
                            if((i + 1) >= data.length){me.lock();me.noData();break;}
                        }
                        setTimeout(function(){$('.lists').append(result);me.resetload();},500);
                    },
                    error: function(xhr, type){me.resetload();}
                });
            }
        });
    });