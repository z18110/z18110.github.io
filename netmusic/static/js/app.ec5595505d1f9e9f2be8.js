webpackJsonp([2,0],[function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=i(18),n=a(s),r=i(138),o=a(r),l=i(70),c=a(l),u=i(68),d=a(u),p=i(69),m=a(p),f=i(135),v=a(f);i(122),i(121),n.default.use(v.default),n.default.prototype.$http=c.default,new n.default({el:"#app",router:d.default,store:m.default,template:"<App/>",components:{App:o.default}})},,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="http://musicapi.duapp.com/api.php",a="https://api.imjad.cn/cloudmusic";e.default={getPlayListByWhere:function(t,e,a,s,n){return i+"?type=topPlayList&cat="+t+"&offset="+a+"&limit="+n},getLrc:function(t){return a+"?type=lyric&id="+t},getSong:function(t){return i+"?type=url&id="+t},getPlayListDetail:function(t){return a+"?type=playlist&id="+t},getMv:function(t){return a+"?type=mv&id="+t},search:function(t){return a+"?type=search&s="+t}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){i(134);var a=i(1)(i(74),i(161),"data-v-d8ac7196",null);t.exports=a.exports},function(t,e,i){i(128);var a=i(1)(i(76),i(153),"data-v-3cce5a20",null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(18),n=a(s),r=i(162),o=a(r);n.default.use(o.default);var l=new o.default({routes:[{path:"/index",component:i(141),children:[{path:"rage",component:i(145)},{path:"songList",component:i(146)},{path:"leaderBoard",component:i(142)},{path:"hotSinger",component:i(140)}]},{name:"playerDetail",path:"/playerDetail/:id",component:i(144)},{path:"/playListDetail/:id",name:"playListDetail",component:i(143)},{path:"*",redirect:"/index/rage"}]});e.default=l},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(18),n=a(s),r=i(11),o=a(r),l=i(29),c=a(l),u=i(8),d=a(u);n.default.use(o.default);var p=new o.default.Store({state:{audio:{id:0,name:"歌曲名称",singer:"演唱者",albumPic:"/static/player-bar.png",location:"",album:""},lyric:"正在加载中。。",currentIndex:0,playing:!1,loading:!1,showDetail:!1,songList:[],currentTime:0,tmpCurrentTime:0,durationTime:0,bufferedTime:0,change:!1},getters:{audio:function(t){return t.audio},playing:function(t){return t.playing},loading:function(t){return t.loading},showDetail:function(t){return t.showDetail},durationTime:function(t){return t.durationTime},currentIndex:function(t){return t.currentIndex},bufferedTime:function(t){return t.bufferedTime},tmpCurrentTime:function(t){return t.tmpCurrentTime},songList:function(t){return t.songList},change:function(t){return t.change},currentTime:function(t){return t.currentTime},prCurrentTime:function(t){return t.currentTime/t.durationTime*100},prBufferedTime:function(t){return t.bufferedTime/t.durationTime*100}},mutations:{play:function(t){t.playing=!0},pause:function(t){t.playing=!1},toggleDetail:function(t){t.showDetail=!t.showDetail},setAudio:function(t){t.audio=t.songList[t.currentIndex-1]},setAudioIndex:function(t,e){t.audio=t.songList[e],t.currentIndex=e+1},removeAudio:function(t,e){t.songList.splice(e,1),e===t.songList.length&&e--,t.audio=t.songList[e],t.currentIndex=e+1,0===t.songList.length&&(t.audio={id:0,name:"歌曲名称",singer:"演唱者",albumPic:"/static/player-bar.png",location:"",album:""},t.playing=!1)},setChange:function(t,e){t.change=e},setLocation:function(t,e){t.audio.location=e},updateCurrentTime:function(t,e){t.currentTime=e},updateDurationTime:function(t,e){t.durationTime=e},updateBufferedTime:function(t,e){t.bufferedTime=e},changeTime:function(t,e){t.tmpCurrentTime=e},openLoading:function(t){t.loading=!0},closeLoading:function(t){t.loading=!1},resetAudio:function(t){t.currentTime=0},playNext:function(t){t.currentIndex++,t.currentIndex>t.songList.length&&(t.currentIndex=1),t.audio=t.songList[t.currentIndex-1]},playPrev:function(t){t.currentIndex--,t.currentIndex<1&&(t.currentIndex=t.songList.length),t.audio=t.songList[t.currentIndex-1]},addToList:function(t,e){var i=!1;t.songList.forEach(function(a,s){a.id===e.id&&(i=!0,t.currentIndex=s+1)}),i||(t.songList.push(e),t.currentIndex=t.songList.length)},setLrc:function(t,e){t.lyric=e}},actions:{getSong:function(t,e){var i=t.commit;t.state;i("openLoading"),c.default.get(d.default.getSong(e)).then(function(t){var e=t.data.data[0].url;i("setAudio"),i("setLocation",e)})}}});e.default=p},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(85),n=a(s),r=i(29),o=a(r);o.default.defaults.timeout=1e5,o.default.interceptors.response.use(function(t){return 200!==t.data.code?n.default.reject(t):t},function(t){return n.default.reject(t)}),e.default=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",ready:function(){this.update()},mounted:function(){this.update()},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&(this.$parent.swiper.destroyLoop(),this.$parent.swiper.createLoop()))}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=i(48),i(123)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){!t.swiper&&a&&(delete t.options.notNextTick,t.swiper=new Swiper(t.$el,t.options))};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(12),n=a(s),r=i(139),o=a(r),l=i(11);e.default={data:function(){return{transitionName:"slide-left",toast:!1}},components:{Player:o.default},computed:(0,n.default)({},(0,l.mapGetters)(["songList","showDetail"]))}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(12),n=a(s),r=i(11);e.default={name:"list",data:function(){return{bottomSheet:!1}},methods:{closeBottomSheet:function(){this.bottomSheet=!1,document.querySelector(".playList")&&(document.querySelector(".playList").style.position="static")},show:function(){this.bottomSheet=!0,document.querySelector(".playList")&&(document.querySelector(".playList").style.position="fixed")},play:function(t){this.$store.commit("setAudioIndex",t)},remove:function(t){console.log(t),this.$store.commit("removeAudio",t)}},computed:(0,n.default)({},(0,r.mapGetters)(["songList","audio"]))}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(12),n=a(s),r=i(11),o=i(50),l=a(o),c=i(49),u=a(c);e.default={data:function(){return{loadedTime:0,playerTime:0}},components:{Toast:l.default,BottomSheet:u.default},methods:(0,n.default)({showDetail:function(){this.$router.push({name:"playerDetail",params:{id:this.audio.id}}),this.$store.commit("toggleDetail")},showList:function(){this.$refs.bottomSheet.show()}},(0,r.mapMutations)(["play","pause","playNext"]),{canPlaySong:function(){this.$store.commit("closeLoading"),this.$store.commit("play"),document.getElementById("audioPlay").play()},toggleStatus:function(){this.playing?(document.getElementById("audioPlay").pause(),this.$store.commit("pause")):(document.getElementById("audioPlay").play(),this.$store.commit("play"))},loadError:function(){document.getElementById("audioPlay").currentSrc?(this.$refs.toast.show("歌曲路径加载出错"),this.loading=!1,this.$store.commit("closeLoading")):console.log("程序第一次加载")},next:function(){this.toggleStatus(),this.$store.commit("playNext")},updateTime:function(){var t=this,e=document.getElementById("audioPlay"),i=parseInt(e.currentTime);e.onsuspend=function(){var i=e.buffered;i.length>0&&e.duration>0&&t.$store.commit("updateBufferedTime",parseInt(e.buffered.end(0)))},t.$store.commit("updateDurationTime",parseInt(e.duration)),this.change?(e.currentTime=this.tmpCurrentTime,this.$store.commit("setChange",!1)):this.$store.commit("updateCurrentTime",i)}}),computed:(0,n.default)({},(0,r.mapGetters)(["audio","change","playing","loading","currentTime","prBufferedTime","tmpCurrentTime","prCurrentTime"]))}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=2e3;e.default={name:"toast",data:function(){return{text:"",showing:!1,timer:null}},methods:{show:function(t,e){var a=this;this.text=t,this.showing=!0,this.timer&&clearInterval(this.timer),this.timer=setTimeout(function(){a.showing=!1},e||i)}}}},function(t,e){"use strict"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{activeTab:"rage"}},created:function(){var t=this.$route.path.split("/");"index"===t[1]&&this.handleTabChange(t[2])},watch:{$route:function(t,e){var i=t.path,a=i.split("/");"index"===a[1]&&this.handleTabChange(a[2])}},methods:{handleTabChange:function(t){this.activeTab=t,this.$router.push({path:"/index/"+t})}}}},function(t,e){"use strict"},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),n=a(s);e.default={data:function(){return{coverImgUrl:"../../static/default_cover.png",name:"歌单标题",fname:"歌单",playCount:0,description:"描述描述",creator:{avatarUrl:"../../static/user-default.png",nickname:"昵称"},list:[],opacity:0,value:0,isloading:!1}},beforeRouteEnter:function(t,e,i){i(function(e){e.get(),t.params.coverImg&&(e.coverImgUrl=e.$route.params.coverImg,e.name=e.$route.params.name,e.description=e.$route.params.desc,e.playCount=e.$route.params.count,e.creator=e.$route.params.creator),window.onscroll=function(){var t=window.pageYOffset/150;t>.5?e.fname=e.name:e.fname="歌单",e.opacity=window.pageYOffset/150}})},beforeRouteLeave:function(t,e,i){window.onscroll=null,i()},methods:{back:function(){this.$router.go(-1)},get:function(){var t=this;this.isloading=!0,this.$http.get(n.default.getPlayListDetail(this.$route.params.id)).then(function(e){t.list=e.data.playlist.tracks,t.isloading=!1})},change:function(t){this.value=t},playAudio:function(t){document.getElementById("audioPlay").pause(),this.$store.commit("pause");var e={};e.id=t.id,e.singer=t.ar[0].name,e.albumPic=t.al.picUrl,e.name=t.name,this.$store.commit("addToList",e),this.$store.dispatch("getSong",e.id)}},filters:{formatCount:function(t){return t<9999?t:(t/1e4).toFixed(0)+"万"}}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(12),n=a(s),r=i(11),o=i(50),l=a(o),c=i(49),u=a(c),d=i(8),p=a(d);e.default={data:function(){return{lyric:"",afterLrc:[],lrcIndex:0}},components:{Toast:l.default,BottomSheet:u.default},beforeRouteEnter:function(t,e,i){i(function(t){t.loadLrc(t.audio.id)})},watch:{audio:function(t){this.loadLrc(t.id)}},methods:(0,n.default)({togglePlay:function(){this.playing?(this.$store.commit("pause"),document.getElementById("audioPlay").pause()):(this.$store.commit("play"),document.getElementById("audioPlay").play())},back:function(){this.$router.go(-1),this.$store.commit("toggleDetail")},changeTime:function(t){var e=t*this.durationTime/100;this.$store.commit("changeTime",e),this.$store.commit("setChange",!0)},loadLrc:function(t){var e=this,i=this;return this.afterLrc=[{txt:"正在加载中..."}],t?void this.$http.get(p.default.getLrc(t)).then(function(t){t.data.nolyric?e.afterLrc=[{txt:"(⊙０⊙) 暂无歌词"}]:(e.lyric=t.data.lrc.lyric,e.getLrc())},function(t){console.log("lrc fail"),e.afterLrc=[{txt:"加载歌词失败"}]}).catch(function(t){console.log(t),i.afterLrc=[{txt:"(⊙０⊙) 暂无歌词"}]}):void(this.afterLrc=[{txt:"这里显示歌词哦！"}])},getLrc:function(){if(this.lyric){for(var t=this.lyric.split("\n"),e=[],i=/\[\d*:\d*((\.|\:)\d*)*\]/g,a=0;a<t.length;a++){var s=t[a].match(i);if(s)for(var n=t[a].replace(i,""),r=0;r<s.length;r++){var o={},l=s[r],c=Number(String(l.match(/\[\d*/i)).slice(1)),u=Number(String(l.match(/\:\d*/i)).slice(1)),d=60*c+u;o.time=d,o.txt=n,e.push(o)}}this.afterLrc=e}},showList:function(){this.$refs.bottomSheet.show()}},(0,r.mapMutations)(["playNext","playPrev"])),computed:(0,n.default)({},(0,r.mapGetters)(["currentTime","bufferedTime","durationTime","prCurrentTime","audio","playing"]),{lrcOffset:function(){if(this.afterLrc){for(var t=Math.round(this.currentTime),e=0;e<this.afterLrc.length;e++)this.afterLrc[e].time===t&&(this.lrcIndex=e);return 58*-this.lrcIndex}}}),filters:{time:function(t){var e=Math.floor(parseInt(t)),i=Math.floor(t/60);i<10&&(i="0"+i);var a=e%60;return a<10&&(a="0"+a),i+":"+a}}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(137),n=i(8),r=a(n);e.default={data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationClickable:!0},isloading:!0,playList:[],mvList:[]}},components:{swiper:s.swiper,swiperSlide:s.swiperSlide},created:function(){this.get()},methods:{get:function(){var t=this;this.$http.get(r.default.getPlayListByWhere("全部","hot",0,!0,6)).then(function(e){t.isloading=!1,t.playList=e.data.playlists})}},filters:{formatCount:function(t){return t<9999?t:(t/1e4).toFixed(0)+"万"}}}},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(8),n=a(s);e.default={data:function(){return{scroller:null,playList:[],offset:0,loading:!1}},created:function(){this.get()},mounted:function(){this.scroller=this.$el},methods:{get:function(){var t=this;this.loading=!0,this.$http.get(n.default.getPlayListByWhere("全部","hot",this.offset,!0,6)).then(function(e){for(var i=e.data.total,a=e.data.playlists,s=0;s<a.length;s++)t.playList.push(a[s]);t.offset=t.offset+6,t.offset>i&&(t.offset=i),t.loading=!1})},loadMore:function(){this.get()}},filters:{formatCount:function(t){return t<1e5?t:(t/1e4).toFixed(0)+"万"}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){i(133);var a=i(1)(i(73),i(158),"data-v-9cff7d82",null);t.exports=a.exports},function(t,e,i){i(125);var a=i(1)(i(75),i(150),null,null);t.exports=a.exports},function(t,e,i){i(127);var a=i(1)(i(77),i(152),null,null);t.exports=a.exports},function(t,e,i){i(126);var a=i(1)(i(78),i(151),"data-v-33f43f2f",null);t.exports=a.exports},function(t,e,i){i(130);var a=i(1)(i(79),i(155),null,null);t.exports=a.exports},function(t,e,i){i(132);var a=i(1)(i(80),i(157),"data-v-5c1336d6",null);t.exports=a.exports},function(t,e,i){i(124);var a=i(1)(i(81),i(149),"data-v-07279076",null);t.exports=a.exports},function(t,e,i){i(131);var a=i(1)(i(82),i(156),"data-v-58bb4600",null);t.exports=a.exports},function(t,e,i){i(129);var a=i(1)(i(83),i(154),"data-v-4acd6cf4",null);t.exports=a.exports},function(t,e,i){var a=i(1)(i(71),i(159),null,null);t.exports=a.exports},function(t,e,i){var a=i(1)(i(72),i(160),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"player-wrapper"},[i("div",{staticClass:"player-inner"},[i("mu-appbar",[i("mu-icon-button",{attrs:{icon:"arrow_back"},on:{click:t.back},slot:"left"}),t._v(" "),i("div",{staticClass:"play-title"},[i("div",{staticClass:"play-name"},[i("span",[t._v(t._s(t.audio.name))])]),t._v(" "),i("div",{staticClass:"play-singer"},[t._v(" "+t._s(t.audio.singer)+" ")])]),t._v(" "),i("mu-icon-button",{attrs:{icon:"share"},slot:"right"})],1),t._v(" "),i("div",{staticClass:"bar-line"}),t._v(" "),i("mu-flexbox",{staticClass:"main",attrs:{orient:"vertical"}},[i("mu-flexbox-item",{attrs:{order:"0"}},[i("div",{staticClass:"cd-holder",class:{"cd-play":t.playing}},[i("div",{staticClass:"stick"}),t._v(" "),i("div",{staticClass:"cd-wrapper",class:{"cd-rotate":t.playing}},[i("div",{staticClass:"cd-mask"}),t._v(" "),i("img",{staticClass:"cd-img",attrs:{src:t.audio.albumPic+"?param=500y500"}})])])]),t._v(" "),i("mu-flexbox-item",{staticClass:"bottom-wrapper",attrs:{order:"2"}},[i("div",{staticClass:"lyric-holder"},[i("div",{staticClass:"lrc-inner",staticStyle:{transition:"-webkit-transform 0.3s ease-out","transform-origin":"0px 0px 0px"},style:{transform:" translate3d(0px,"+t.lrcOffset+"px, 0px)"}},t._l(t.afterLrc,function(e,a){return i("p",{key:a,attrs:{id:"line-"+a}},[t._v(t._s(e.txt))])}))]),t._v(" "),i("div",{staticClass:"process-bar"},[i("div",{staticClass:"pro"},[i("div",{staticClass:"pro-wrap"},[i("mu-slider",{staticClass:"song-slider",on:{change:t.changeTime},model:{value:t.prCurrentTime,callback:function(e){t.prCurrentTime=e}}})],1),t._v(" "),i("div",{staticClass:"time"},[i("time",{attrs:{id:"cur"}},[t._v(t._s(t._f("time")(t.currentTime)))]),t._v(" "),i("time",{attrs:{id:"total"}},[t._v(t._s(t._f("time")(t.durationTime)))])])])]),t._v(" "),i("div",{staticClass:"control-bar "},[i("mu-icon-button",{staticClass:"btn d-mode"}),t._v(" "),i("mu-icon-button",{staticClass:"btn d-prev",on:{click:t.playPrev}}),t._v(" "),i("mu-icon-button",{staticClass:"btn d-play btn-big",class:{"d-pause":t.playing},on:{click:t.togglePlay}}),t._v(" "),i("mu-icon-button",{staticClass:"btn d-next",on:{click:t.playNext}}),t._v(" "),i("mu-icon-button",{staticClass:"btn d-list",on:{click:t.showList}})],1)])],1)],1)]),t._v(" "),i("div",{staticClass:"mask"},[i("div",{staticClass:"album-cover",style:{"background-image":"url("+t.audio.albumPic+"?param=500y500)"}}),t._v(" "),i("div",{staticClass:"cover-mask",staticStyle:{opacity:"0.6"}})]),t._v(" "),i("toast",{ref:"toast"}),t._v(" "),i("BottomSheet",{ref:"bottomSheet"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foot"},[i("div",{staticClass:"player-mini"},[i("div",{staticClass:"mini-content"},[i("audio",{attrs:{src:t.audio.location,id:"audioPlay"},on:{timeupdate:t.updateTime,canplay:t.canPlaySong,error:t.loadError,ended:t.next}}),t._v(" "),i("div",{staticClass:"cover",on:{click:t.showDetail}},[i("mu-circular-progress",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{size:30}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"xmplogo",attrs:{src:t.audio.albumPic+"?param=100y100",alt:t.audio.name}})],1),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"name xmpname"},[t._v(t._s(t.audio.name))]),t._v(" "),i("div",{staticClass:"artist xmpartist"},[t._v(t._s(t.audio.singer))])]),t._v(" "),i("div",{staticClass:"control"},[i("mu-icon-button",{staticClass:"mini-btn player-list",on:{click:t.showList}}),t._v(" "),i("mu-icon-button",{staticClass:"mini-btn player",class:{pause:t.playing},on:{click:t.toggleStatus}}),t._v(" "),i("mu-icon-button",{staticClass:"mini-btn next",on:{click:t.next}})],1),t._v(" "),i("div",{staticClass:"pro"},[i("div",{staticClass:"pro-load proload",style:{"-webkit-transform":"translateX("+t.prBufferedTime+"%)"}}),t._v(" "),i("div",{staticClass:"pro-play proplay",style:{"-webkit-transform":"translateX("+t.prCurrentTime+"%)"}})])])]),t._v(" "),i("toast",{ref:"toast"}),t._v(" "),i("BottomSheet",{ref:"bottomSheet"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"fixed-bar"},[i("mu-appbar",[i("div",{staticClass:"logo",slot:"left"}),t._v(" "),i("mu-icon-button",{attrs:{icon:"search"},slot:"right"})],1),t._v(" "),i("mu-tabs",{staticClass:"view-tabs",attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[i("mu-tab",{attrs:{value:"rage",title:"时下流行"}}),t._v(" "),i("mu-tab",{attrs:{value:"songList",title:"歌单"}}),t._v(" "),i("mu-tab",{attrs:{value:"leaderBoard",title:"排行榜"}}),t._v(" "),i("mu-tab",{attrs:{value:"hotSinger",title:"热门歌手"}})],1)],1),t._v(" "),i("div",{staticClass:"view"},[i("keep-alive",[i("router-view")],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[t._v("热门歌手-尚未开发")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"toast-fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"toast-wrap"},[t._v(t._s(t.text))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper playList"},[i("div",{staticClass:"content"},[i("div",{staticClass:"title"},[t._v("全部歌单 ")]),t._v(" "),i("mu-flexbox",{staticClass:"box",attrs:{wrap:"wrap",justify:"space-around",gutter:0}},t._l(t.playList,function(e){return i("mu-flexbox-item",{key:e.id,staticClass:"list-item",attrs:{basis:"40%"}},[i("router-link",{attrs:{to:{name:"playListDetail",params:{id:e.id,name:e.name,coverImg:e.coverImgUrl,creator:e.creator,count:e.playCount,desc:e.description}}}},[i("div",{staticClass:"list-bar"},[t._v(t._s(t._f("formatCount")(e.playCount)))]),t._v(" "),i("img",{staticClass:"list-img img-response",attrs:{src:e.coverImgUrl+"?param=300y300",lazy:"loading"}}),t._v(" "),i("div",{staticClass:"list-name"},[t._v(t._s(e.name))])])],1)})),t._v(" "),i("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading},on:{load:t.loadMore}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[t._v("排行榜-尚未开发")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isloading?i("div",{staticClass:"loading-wrapper"},[i("div",{staticClass:"loading"}),t._v(" "),i("div",{staticClass:"loading-txt"},[t._v("正在加载中")])]):t._e(),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isloading,expression:"!isloading"}],staticClass:"container"},[i("div",{attrs:{id:"slider"}},[i("swiper",{attrs:{options:t.swiperOption}},[i("swiper-slide",[i("img",{staticClass:"banner-item",attrs:{src:"/static/banner1.jpg",alt:""}})]),t._v(" "),i("swiper-slide",[i("img",{staticClass:"banner-item",attrs:{src:"/static/banner2.jpg",alt:""}})]),t._v(" "),i("swiper-slide",[i("img",{staticClass:"banner-item",attrs:{src:"/static/banner3.jpg",alt:""}})]),t._v(" "),i("swiper-slide",[i("img",{staticClass:"banner-item",attrs:{src:"/static/banner4.jpg",alt:""}})]),t._v(" "),i("div",{staticClass:"swiper-pagination",slot:"pagination"})],1)],1),t._v(" "),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"g-title song-list"},[t._v("推荐歌单 "),i("router-link",{attrs:{to:{path:"/index/songList"}}},[t._v("更多>")])],1),t._v(" "),i("mu-flexbox",{staticClass:"box",attrs:{wrap:"wrap",justify:"space-around",gutter:0}},t._l(t.playList,function(e){return i("mu-flexbox-item",{key:e.id,staticClass:"item",attrs:{basis:"28%"}},[i("router-link",{attrs:{to:{name:"playListDetail",params:{id:e.id,name:e.name,coverImg:e.coverImgUrl,creator:e.creator,count:e.playCount,desc:e.description}}}},[i("div",{staticClass:"bar"},[t._v(t._s(t._f("formatCount")(e.playCount)))]),t._v(" "),i("img",{staticClass:"item-img img-response",attrs:{src:e.coverImgUrl+"?param=230y230",lazy:"loading"}}),t._v(" "),i("div",{staticClass:"item-name"},[t._v(t._s(e.name))])])],1)})),t._v(" "),i("div",{staticClass:"g-title mv"},[t._v("推荐MV "),i("router-link",{attrs:{to:{}}},[t._v("更多>")])],1),t._v(" "),i("mu-flexbox",{staticClass:"box",attrs:{wrap:"wrap",justify:"space-around",gutter:0}},[i("mu-flexbox-item",{staticClass:"mv-item",attrs:{basis:"40%"}},[i("img",{staticClass:"img-response",attrs:{src:"http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170"}}),t._v(" "),i("div",{staticClass:"mv-name"},[t._v("Skin to sking")]),t._v(" "),i("div",{staticClass:"mv-author"},[t._v("鹿晗")])]),t._v(" "),i("mu-flexbox-item",{staticClass:"mv-item",attrs:{basis:"40%"}},[i("img",{staticClass:"img-response",attrs:{src:"http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170"}}),t._v(" "),i("div",{staticClass:"mv-name"},[t._v("Skin to sking")]),t._v(" "),i("div",{staticClass:"mv-author"},[t._v("鹿晗")])]),t._v(" "),i("mu-flexbox-item",{staticClass:"mv-item",attrs:{basis:"40%"}},[i("img",{staticClass:"img-response",attrs:{src:"http://p3.music.126.net/DNlE0AUQdXci4XaQaxsHPQ==/18643319162278619.jpg?param=300y170"}}),t._v(" "),i("div",{staticClass:"mv-name"},[t._v("Skin to skingSkin to")]),t._v(" "),i("div",{staticClass:"mv-author"},[t._v("鹿晗")])]),t._v(" "),i("mu-flexbox-item",{staticClass:"mv-item",attrs:{basis:"40%"}},[i("img",{staticClass:"img-response",attrs:{src:"http://p3.music.126.net/DNlE0AUQdXci4XaQaxsHPQ==/18643319162278619.jpg?param=300y170"}}),t._v(" "),i("div",{staticClass:"mv-name"},[t._v("Skin to sking")]),t._v(" "),i("div",{staticClass:"mv-author"},[t._v("鹿晗")])])],1)],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"playList",staticStyle:{"margin-bottom":"2.3rem",width:"100%"}},[i("div",{staticClass:"fixed-title",style:{background:"rgba(206, 61, 62, "+t.opacity+")"}},[i("mu-appbar",[i("mu-icon-button",{attrs:{icon:"arrow_back"},on:{click:t.back},slot:"left"}),t._v(" "),i("div",{staticClass:"play-title"},[i("div",{staticClass:"play-name"},[i("span",[t._v(t._s(t.fname))])])])],1)],1),t._v(" "),i("div",{staticClass:"playlist-info"},[i("div",{staticClass:"info-wrapper"},[i("div",{staticClass:"info-gallery"},[i("span",[t._v(t._s(t._f("formatCount")(t.playCount)))]),t._v(" "),i("img",{attrs:{src:t.coverImgUrl+"?param=300y300",alt:""}})]),t._v(" "),i("div",{staticClass:"info-title"},[i("p",{staticClass:"titile"},[t._v(t._s(t.name))]),t._v(" "),i("p",{staticClass:"author"},[i("mu-avatar",{attrs:{src:t.creator.avatarUrl+"?param=50y50",size:30,iconSize:20},slot:"left"}),t._v(" "),i("span",[t._v(t._s(t.creator.nickname))])],1)])]),t._v(" "),i("div",{staticClass:"bg-mask"}),t._v(" "),i("div",{staticClass:"bg-player",style:{"background-image":"url("+t.coverImgUrl+"?param=300y300)"},attrs:{id:"backImg"}})]),t._v(" "),i("div",{staticClass:"playlist-holder"},[i("div",{staticClass:"add-all"},[i("mu-flat-button",{staticClass:"demo-flat-button",attrs:{label:"播放全部",icon:"add_circle_outline"}}),t._v(" "),i("mu-divider")],1),t._v(" "),i("div",[t.isloading?i("mu-circular-progress",{staticClass:"center",attrs:{size:40}}):t._e(),t._v(" "),i("mu-list",{directives:[{name:"show",rawName:"v-show",value:!t.isloading,expression:"!isloading"}],attrs:{value:t.value},on:{change:t.change}},t._l(t.list,function(e,a){return i("div",{on:{click:function(i){t.playAudio(e)}}},[i("mu-list-item",{attrs:{disableRipple:!0,title:e.name,value:e.id,describeText:e.ar[0].name}},[i("span",{staticClass:"indexStyle",slot:"left"},[t._v(t._s(a+1))])]),t._v(" "),i("mu-divider",{attrs:{inset:""}})],1)}))],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("keep-alive",[i("router-view")],1),t._v(" "),i("Player",{directives:[{name:"show",rawName:"v-show",value:t.songList.length>0&&!t.showDetail,expression:"songList.length > 0 && !showDetail"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-slide"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-bottom-sheet",{attrs:{open:t.bottomSheet},on:{close:t.closeBottomSheet}},[i("div",{staticClass:"title-wrapper"},[t._v("\n      播放列表（"+t._s(t.songList.length)+"）\n    ")]),t._v(" "),i("hr",{staticClass:"mu-divider"}),t._v(" "),i("div",{staticClass:"list-wrapper"},t._l(t.songList,function(e,a){return i("div",{staticClass:"list-item",class:{on:e.id==t.audio.id}},[i("div",{staticClass:"left",on:{click:function(e){t.play(a)}}},[i("span",{staticClass:"list-name"},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticClass:"list-singer"},[t._v(" -"+t._s(e.singer)+" ")])]),t._v(" "),i("span",{staticClass:"list-btn",on:{click:function(e){t.remove(a)}}},[t._v("x")]),t._v(" "),i("hr",{staticClass:"mu-divider"})])}))])],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.ec5595505d1f9e9f2be8.js.map