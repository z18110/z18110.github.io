(function(d,k){function g(e){e=c.call(e).toLowerCase();return e.substring(8,e.length-1)}function a(e,i,l){var f=-1,m=h.call(arguments,0);e=j[b.$name]||{};i=[];for(l=true;m[++f];)if(g(m[f])==="boolean")l=m[f];else g(m[f])==="object"&&i.push(m[f]);if(i.length>=2)e=i.splice(0,1)[0];for(f=0;f<i.length;f++){m=i[f];for(var p in m)if(!e.hasOwnProperty(p)||l)e[p]=m[p]}return e}var b={$name:"Laro",$version:"0.1",$description:"game engine based on html5"},c=Object.prototype.toString,h=Array.prototype.slice,
    j=this||d,n=a({},b,{toType:g,extend:a,register:function(e,i){var l=e.split("."),f=-1,m=j;if(l[0]=="")l[0]=b.$name;for(;l[++f];){if(m[l[f]]===k)m[l[f]]={};m=m[l[f]]}i&&i.call(m,j[b.$name])},randomRange:function(e,i){return e+Math.random()*(i-e)},randomBool:function(){return Math.random()>=0.5},curry:function(e,i){return function(){typeof e=="function"&&e.apply(i,arguments)}},curryWithArgs:function(e,i){var l=Array.prototype.slice.call(arguments,0);delete l[0];delete l[1];return function(){typeof e==
    "function"&&e.apply(i,l.concat(arguments))}}});this[b.$name]=d[b.$name]=n})(window);
Laro.register(".err",function(){function d(a){this.assign(a)}function k(a){this.assign(a)}function g(a){this.assign(a)}d.prototype=Error();d.prototype.constructor=d;d.prototype.assign=function(a){this.message=a===undefined?"":a};k.prototype=new d;k.prototype.constructor=k;g.prototype=new d;g.prototype.constructor=g;this.assert=function(a,b){if(!a)throw new k(b);};this.RuntimeException=d;this.AssertionError=k;this.Exception=g;Laro.extend(this)});
Laro.register(".base",function(){function d(e){return a.call(typeof e===h?e:function(){},e,1)}function k(e,i,l){return function(){var f=this.supr;this.supr=l[n][e];var m=i.apply(this,arguments);this.supr=f;return m}}function g(e,i,l){for(var f in i)if(i.hasOwnProperty(f))e[f]=typeof i[f]===h&&typeof l[n][f]===h&&j.test(i[f])?k(f,i[f],l):i[f]}function a(e,i){function l(){}function f(){if(this.initialize)this.initialize.apply(this,arguments);else{i||q&&m.apply(this,arguments);s.apply(this,arguments)}}
    l[n]=this[n];var m=this,p=new l,q=typeof e===h,s=q?e:this,t=q?{}:e;f.methods=function(o){g(p,o,m);f[n]=p;return this};f.methods.call(f,t).prototype.constructor=f;f.extend=arguments.callee;f[n].implement=f.statics=function(o,u){o=typeof o=="string"?function(){var r={};r[o]=u;return r}():o;g(this,o,m);return this};return f}var b=this,c=b.Class,h="function",j=/xyz/.test(function(){})?/\bsupr\b/:/.*/,n="prototype";d.noConflict=function(){b.Class=c;return this};b.Class=d;Laro.Class=d});
Laro.register(".geometry",function(d){var k=d.err.assert;d=d.base.Class;var g=d({initialize:function(a,b,c,h){k(a>=0&&a<=255,"Pixel32 wrong --\> r");k(b>=0&&b<=255,"Pixel32 wrong --\> g");k(c>=0&&c<=255,"Pixel32 wrong --\> b");this.r=a;this.g=b;this.b=c;this.a=h===undefined?255:h;this.normalized=[a/255,b/255,c/255,this.a>1?this.a/255:this.a]},equal:function(a){return a instanceof g?this.r==a.r&&this.g==a.g&&this.b==a.b&&this.a==a.a:false},toString:function(){return"rgba("+this.r+", "+this.g+", "+
    this.b+", "+this.normalized[3]+")"},rgbString:function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"}});this.Pixel32=g;Laro.extend(this)});
Laro.register(".game",function(d){var k=d.Pixel32||d.geometry.Pixel32,g=d.toType;d=(d.Class||d.base.Class)(function(c,h,j){if(!(c==undefined||g(c)!="object")){this.host=c;this.fsm=h;this.stateId=j;this.isSuspended=false}}).methods({enter:function(){throw"no enter";},leave:function(){throw"no leave";},update:function(){throw"no update";},suspended:function(){throw"no suspended";},message:function(){throw"no message";},suspend:function(){throw"no suspend";},resume:function(){throw"no resume";},preload:function(){throw"no preload";
},cancelPreload:function(){throw"no cancelPreload";},transition:function(){return false}});var a=d.extend(function(c,h,j,n){this.stateId=c;c=function(){};this.isSuspended=false;this.enter=h!=null?h:c;this.leave=j!=null?j:c;this.update=n!=null?n:c}),b=d.extend(function(){this.isSuspended=false;this.dimTimeLeft=0}).methods({update:function(c){this.dimTimeLeft-=c;if(this.dimTimeLeft<0)this.dimTimeLeft=0},draw:function(c){if(this.dimTimeLeft>0){var h=new k(0,0,0,Math.min(255,765*this.dimTimeLeft));c.drawQuad(null,
    h)}},suspended:function(){this.dimTimeLeft=0.25},onMouse:function(){throw"no onMouse";}});this.BaseState=d;this.SimpleState=a;this.AppState=b});
Laro.register(".game",function(d){var k=d.SimpleState||d.game.SimpleState,g=(d.Class||d.base.Class)(function(a,b,c){if(a!=undefined){this.host=a;this.onStateChange=c;this.stateArray=[];for(c=0;c<b.length;c+=2){var h=b[c],j=b[c+1];this.stateArray[h]=j instanceof k?j:new j(a,this,h)}this.currentState=g.kNoState;this.numSuspended=0;this.suspendedArray=[];this.numPreloaded=0;this.preloadedArray=[];this.numStates=this.stateArray.length}}).methods({enter:function(a,b){this.setState(a,b)},leave:function(){this.setState(g.kNoState)},
    update:function(a){for(var b=0;b<this.numSuspended;b++)this.stateArray[this.suspendedArray[b]].suspended(a);if(this.currentState!=g.kNoState){this.stateArray[this.currentState].update(a);this.currentState!=g.kNoState&&this.stateArray[this.currentState].transition()}},message:function(a){this.currentState!=g.kNoState&&this.stateArray[this.currentState].message(a)},messageSuspended:function(a){for(var b=0;b<this.numSuspended;b++)this.stateArray[this.suspendedArray[b]].message(a)},tryChangeState:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,c,h,j){if(h==undefined)h=true;if(j==undefined)j=true;if(b==g.kNextState)b=this.currentState+1;if(a&&(b!=this.currentState||h)){console.log(b);this.setState(b,c,j);return true}return false},setState:function(a,b,c){if(a==g.kNextState)a=this.currentState+1;if(a==g.kNoState){for(;this.numSuspended>0;this.numSuspended--){this.stateArray[this.suspendedArray[this.numSuspended-1]].leave();this.stateArray[this.suspendedArray[this.numSuspended-1]].isSuspended=false}for(;this.numPreloaded>0;this.numPreloaded--)this.stateArray[this.preloadedArray[this.numPreloaded-
    1]].cancelPreload()}else if(c){this.stateArray[this.currentState].suspended();this.stateArray[this.currentState].isSuspended=true;this.suspendedArray[this.numSuspended++]=this.currentState}else{this.currentState!=g.kNoState&&this.stateArray[this.currentState].leave();if(!this.stateArray[a].isSuspended)for(;this.numSuspended>0;this.numSuspended--){this.stateArray[this.suspendedArray[this.numSuspended-1]].leave();this.stateArray[this.suspendedArray[this.numSuspended-1]].isSuspended=false}}for(c=0;c<
    this.numPreloaded;c++)this.preloadedArray[c]!=a&&this.stateArray[this.preloadedArray[c]].cancelPreload();this.numPreloaded=0;this.onStateChange!=undefined&&this.onStateChange(this.currentState,a,b);c=this.currentState;this.currentState=a;if(this.currentState!=g.kNoState)if(this.stateArray[this.currentState].isSuspended){this.stateArray[this.currentState].resume(b,c);this.stateArray[this.currentState].isSuspended=false;--this.numSuspended}else this.stateArray[this.currentState].enter(b,c)},getCurrentState:function(){if(this.currentState==
        g.kNoState)return null;return this.stateArray[this.currentState]},preload:function(a){this.preloadedArray[this.numPreloaded++]=a},isSuspended:function(a){return this.stateArray[a].isSuspended}}).statics({kNoState:-1,kNextState:-2});d=g.extend().methods({draw:function(a){for(var b=0;b<this.numSuspended;b++)this.stateArray[this.suspendedArray[b]].draw(a);(b=this.getCurrentState())&&b.draw(a)},onMouse:function(a,b,c,h){var j=this.getCurrentState();j&&j.onMouse(a,b,c,h)}});this.FSM=g;this.AppFSM=d;Laro.extend(this)});
Laro.register(".game",function(d){var k=d.base.Class||d.Class;window.requestAnimationFrame=this.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1)}}();var g=k(function(a,b){function c(){if(h){requestAnimationFrame(c);var n=new Date,e=(n-j)/1E3;if(e>=3)e=0.25;a.call(b,e);j=n}}var h=true,j=new Date;this.stop=function(){h=
    false};this.resume=function(){h=true;j=new Date;c()};c();return this});k=k(function(a,b,c){this.maxTime=c;this.from=a;this.to=b;this.time=0;this.isDone=false}).methods({update:function(a){this.time=Math.min(this.time+a,this.maxTime)},draw:function(a){this.isDone=this.time==this.maxTime;var b=new d.Pixel32(d.lerp(this.from.r,this.to.r,this.time/this.maxTime),d.lerp(this.from.g,this.to.g,this.time/this.maxTime),d.lerp(this.from.b,this.to.b,this.time/this.maxTime),d.lerp(this.from.a,this.to.a,this.time/
    this.maxTime));b.a>0&&a.drawFillScreen(b)},reset:function(){this.time=0;this.isDone=false}});this.Loop=g;this.ScreenTransitionFade=k;Laro.extend(this)});


/**
 * JCanvas
 * 给canvas里面图形加上常用事件代理
 * @author horizon
 */

(function () {

    var initializing = false,
        superTest = /horizon/.test(function () {horizon;}) ? /\b_super\b/ : /.*/;
    // 临时Class
    this.Class = function () {};
    // 继承方法extend
    Class.extend = function (prop) {
        var _super = this.prototype;
        //创建一个实例，但不执行init
        initializing = true;
        var prototype = new this();
        initializing = false;

        for (var name in prop) {
            // 用闭包保证多级继承不会污染
            prototype[name] = (typeof prop[name] === 'function' && typeof _super[name] === 'function' && superTest.test(prop[name])) ? (function (name, fn) {
                return function () {
                    var temp = this._super;
                    // 当前子类通过_super继承父类
                    this._super = _super[name];
                    //继承方法执行完毕后还原
                    var ret = fn.apply(this, arguments);
                    this._super = temp;

                    return ret;
                }
            })(name, prop[name]) : prop[name];
        }

        //真实的constructor
        function Class () {
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        }
        Class.prototype = prototype;
        Class.constructor = Class;
        Class.extend = arguments.callee;

        return Class;
    }

    var extend = function (target, source, isOverwrite) {
        if (isOverwrite === undefined) { isOverwrite = true; }
        for (var key in source) {
            if (!target.hasOwnProperty(key) || isOverwrite) {
                target[key] = source[key];
            }
        }
        return target;
    }
    /**
     * 定义一个可视图形的基本属性
     */
    var DisplayClass = Class.extend({
        init: function (option) {

            this.x = 0;
            this.y = 0;
            this.width = 0;
            this.height = 0;
            this.stage = null;
            this.draw = function () {};

            typeof option == 'function' ? option.call(this) : extend(this, option || {});

        }
    });

    /**
     * 交互对象
     */
    var InteractiveClass = DisplayClass.extend({
        init: function (option) {
            this._super(option);
            this.eventListener = {};
        },
        addEventListener: function (type, func) {
            if (this.eventListener[type] === null || this.eventListener[type] === undefined) {
                this.eventListener[type] = [];
            }
            this.eventListener[type].push(func);
        },
        removeEventListener: function (type, func) {
            if (this.eventListener[type] === null || this.eventListener[type] === undefined) {
                return;
            }
            for (var i=0; i<this.eventListener[type].length; i++) {
                // 删除指定的监听器
                if (this.eventListener[type][i] == func) {
                    delete this.eventListener[type][i];
                    this.eventListener[type].splice(i, 1);
                }
            }
            // 如果这种类型没有监听器，删除它
            if (this.eventListener[type].length === 0) {
                delete this.eventListener[type];
            }
        },
        removeAllEventListener: function (type) {
            if (this.eventListener[type] === null || this.eventListener[type] === undefined) {
                return;
            }
            this.eventListener[type].splice();
            delete this.eventListener[type];
        },
        hasEventListener: function (type) {
            return (!!this.eventListener[type] && this.eventListener[type].length > 0);
        }
    });

    /**
     * Sprite 容器
     */
    var ObjectContainerClass = InteractiveClass.extend({
        init: function (ctx, option) {
            this._super(option);
            this.ctx = ctx;
            this.children = [];
            this.maxWidth = 0;
            this.maxHeight = 0;
            this.hoverChildren = [];
        },
        addEventListener: function (type, func) { this._super(type, func) },
        removeEventListener: function (type, func) { this._super(type, func) },
        removeAllEventListener: function (type) { this._super(type) },
        hasEventListener: function (type) { this._super(type) },
        getContext: function () {
            return this.ctx;
        },
        addChild: function (child) {
            if (this.maxWidth < child.x + child.width) {
                this.maxWidth = child.x + child.width;
            }
            if (this.maxHeight < child.y + child.height) {
                this.maxHegiht = child.y + child.height;
            }
            child.stage = this;

            this.children.push(child);
        },
        addChildAt: function (child, index) {
            if (this.maxWidth < child.x + child.width) {
                this.maxWidth = child.x + child.width;
            }
            if (this.maxHeight < child.y + child.height) {
                this.maxHeight = child.y + child.height;
            }
            child.stage = this;
            this.children.splice(index, 0, child);
        },
        removeChild: function (child) {
            this.children.splice(this.getChildIndex(child), 1);
            // 如果是支撑最大宽高的child被移除了，重新处理最大宽高
            if (this.maxWidth == child.x + child.width) {
                this.maxWidth = 0;
                for (var i=0; i<this.children.length; i++) {
                    if (this.maxWidth < this.children[i].x + this.children[i].width) {
                        this.maxWidth = this.children[i].x + this.children[i].width;
                    }
                }
            }
            if (this.maxHeight == child.y + child.height) {
                this.maxHeight = 0;
                for (var i=0; i<this.children.length; i++) {
                    if (this.maxHeight < this.children[i].y + this.children[i].height) {
                        this.maxHeight = this.children[i].y + this.children[i].height;
                    }
                }
            }
            child.stage = null;
        },
        removeChildAt: function (index) {
            this.children[index].stage = null;
            var child =	this.children.splice(index, 1);
            // 最大宽高
            if (this.maxWidth == child.x + child.width) {
                this.maxWidth = 0;
                for (var i=0; i<this.children.length; i++) {
                    if (this.maxWidth < this.children[i].x + this.children[i].width) {
                        this.maxWidth = this.children[i].x + this.children[i].width;
                    }
                }
            }
            if (this.maxHeight == child.y + child.height) {
                this.maxHeight = 0;
                for (var i=0; i<this.children.length; i++) {
                    this.maxHeight = 0;
                    if (this.maxHeight < this.children[i].y + this.children[i].height) {
                        this.maxHeight = this.children[i].y + this.children[i].height;
                    }
                }
            }
        },
        getChildAt: function (index) {
            return this.children[index];
        },
        getChildIndex: function (child) {
            for (var i=0; i<this.children.length; i++) {
                if (this.children[i] == child) {
                    return i;
                }
            }
            return -1;
        },
        contains: function (child) {
            return (this.getChildIndex(child) != -1);
        },

        // 鼠标事件
        dispatchMouseEvent: function (type, x, y) {
            var mouseX = x, mouseY = y;
            var _hoverChildren = [];
            for (var i=0; i<this.children.length; i++) {
                if (!!this.children[i].dispatchMouseEvent) {
                    this.children[i].dispatchMouseEvent(type, mouseX-this.children[i].x, mouseY-this.children[i].y);
                }
                //鼠标悬浮于子对象上面
                if (mouseX > this.children[i].x && mouseX < this.children[i].x + this.children[i].width
                    && mouseY > this.children[i].y && mouseY < this.children[i].y + this.children[i].height) {
                    type == 'mousemove' && _hoverChildren.push(this.children[i]);

                    if (this.children[i].eventListener[type] == null
                        || this.children[i].eventListener[type] == undefined) {
                        continue; // 没有事件监听器
                    }
                    // 有事件监听则遍历执行
                    for (var j=0, arr=this.children[i].eventListener[type]; j < arr.length; j++) {
                        arr[j](mouseX-this.children[i].x, mouseY-this.children[i].y);
                    }
                }
            };
            if (type != 'mousemove') {
                return; // 不是 mousemove事件则到此结束
            }
            // 以下是处理mousemove事件
            for (var k=0; k<this.hoverChildren.length; k++) {
                // 原来hoverChildren中有的，现在没有的，转而执行 mouseout
                var has = false;
                for (var m=0; m<_hoverChildren.length; m++) {
                    if (this.hoverChildren[k] == _hoverChildren[m]) {
                        has = true;
                    }
                }
                if (!has) {
                    //不存在了，处理 this.hoverChildren[k] 的mouseout
                    // 刚好又有事件在监听mouseout，则执行
                    if (!!this.hoverChildren[k].eventListener['mouseout']) {
                        for (var i=0, outObj = this.hoverChildren[k]; i<outObj.eventListener['mouseout'].length; i++) {
                            outObj.eventListener['mouseout'][i](mouseX-outObj.x, mouseY-outObj.y);
                        }
                    }
                    // 处理完后就销毁
                    delete this.hoverChildren[k];
                }
            };
            // 原来hoverChildren中没有的，现在有了，证明mouseover
            for (var k=0; k<_hoverChildren.length; k++) {
                var has = false;
                for (var m=0; m<this.hoverChildren.length; m++) {
                    if (_hoverChildren[k] == this.hoverChildren[m]) {
                        has = true;
                    }
                };
                if (!has) {
                    //证明鼠标刚进入，处理mouseenter或mouseover
                    this.hoverChildren.push(_hoverChildren[k]);
                    if (_hoverChildren[k].eventListener['mouseover']) {
                        for (var i=0, enterObj = _hoverChildren[k]; i<enterObj.eventListener['mouseover'].length; i++) {
                            enterObj.eventListener['mouseover'][i](mouseX-enterObj.x, mouseY-enterObj.y);
                        }
                    }
                }
            };
            this.clearHoverChildren();
        },
        // 重新清理鼠标悬浮下的对象数组
        clearHoverChildren: function () {
            var tempArr = [];
            for (var i=0; i<this.hoverChildren.length; i++) {
                if (this.hoverChildren[i] != null && this.hoverChildren[i] != undefined) {
                    tempArr.push(this.hoverChildren[i]);
                }
            }
            this.hoverChildren = tempArr;
        }
    });

    /**
     * Stage {Class}
     * 一个canvas对应一个stage实例
     * @inherit {objectContainerClass}
     * @param {htmlCanvasElement}
     */
    var Stage = ObjectContainerClass.extend({
        init: function (canvas, option) {
            this._super(canvas.getContext('2d'), option);
            if (canvas === undefined) { throw new Error('htmlCanvasElement undefined') }
            this.canvas = canvas;
            this.isStart = false;
            this.interval = 16;
            this.timer = null;
            this.stage = null;
            this.CONFIG = {
                interval: 16,
                isClear: true
            };
            this.width = canvas.width;
            this.height = canvas.height;
            // 对canvasElement 监听
            //
            var context = this;
            var batchAddMouseEventListener = function (el, evArr) {
                for (var i=0; i<evArr.length; i++) { //console.log(evArr[i])
                    el.addEventListener(evArr[i], function (param, i) {
                        return function (e) {
                            var x = e.clientX - param.canvas.offsetLeft,
                                y = e.clientY - param.canvas.offsetTop;
                            if (!!param.eventListener[evArr[i]]) {
                                for (var j=0; j<param.eventListener[evArr[i]].length; j++) {
                                    param.eventListener[evArr[i]][j](x, y);
                                }
                            }
                            param.dispatchMouseEvent(evArr[i], x, y);
                        }
                    }(context, i), false);
                }
            };
            var batchAddKeyEventListener = function (el, evArr) {
                for (var i=0; i<evArr.length; i++) {
                    el.addEventListener(evArr[i], function (param, i) {
                        return function (e) {
                            if (!!param.eventListener[evArr[i]]) {
                                for (var j=0; j<param.eventListener[evArr[i]].length; j++) {
                                    param.eventListener[evArr[i]][j](e);
                                }
                            }
                        }
                    }(context, i), false);
                }
            };
            batchAddMouseEventListener(this.canvas, ['mousemove', 'mouseup', 'mousedown', 'click', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave']);
            batchAddKeyEventListener(this.canvas, ['keyup', 'keydown', 'keypress']);
        },
        onRefresh: function () {},
        addEventListener: function (type, func) { return this._super(type, func) },
        removeEventListener: function (type, func) { return this._super(type, func) },
        removeAllEventListener: function (type) { return this._super(type) },
        hasEventListener: function (type) { return this._super(type) },
        getContext: function () { return this._super() },
        addChild: function (child) { return this._super(child) },
        addChildAt: function (child, index) { return this._super(child, index) },
        removeChild: function (child) { return this._super(child) },
        removeChildAt: function (child, index) { return this._super(child, index) },
        getChildAt: function (index) { return this._super(index) },
        getChildIndex: function (child) { return this._super(child) },
        contains: function (child) { return this._super(child) },
        dispatchMouseEvent: function (type, x, y) { return this._super(type, x, y) },
        clearHoverChildren: function () { return this._super() },
        render: function () {
            // 重绘
            !!this.CONFIG.isClear && this.clear();
            // 画舞台
            //console.log(this.children)
            this.draw();
            // 画舞台元素
            for (var i=0; i<this.children.length; i++) {
                // 坐标系移到对应位置
                this.ctx.translate(this.children[i].x, this.children[i].y);
                this.children[i].render();
                this.ctx.translate(-this.children[i].x, -this.children[i].y);
            }
        },
        clear: function (x, y, w, h) {
            if (x !== undefined && y !== undefined && w !== undefined && h !== undefined) {
                this.ctx.clearRect(x, y, w, h);
            } else {
                this.ctx.clearRect(0, 0, this.width, this.height);
            }
        },
        // 舞台表演开始
        start: function () {
            this.isStart = true;
            this.timer = setInterval((function (param) {
                return function () {
                    param.render();
                    param.onRefresh();
                }
            })(this), this.CONFIG.interval)
        },
        // 结束
        stop: function () {
            this.isStart = false;
            clearInterval(this.timer);
        }
    })

    /**
     * Sprite {class}
     * @inherit ObjectContainerClass
     * @param {Object}
     * option {
	 *		stage:
	 *		x:
	 *		y:
	 *		width:
	 *		height:
	 * }
     */
    var Sprite = ObjectContainerClass.extend({
        init: function (ctx, option) {
            this._super(ctx, option);
            this.isDragging = false;
            this.dragPos = {};
            this.dragFunc = null;
            this.dropFunc = null;
        },
        addEventListener: function (type, func) { return this._super(type, func) },
        removeEventListener: function (type, func) { return this._super(type, func) },
        removeAllEventListener: function (type) { return this._super(type) },
        hasEventListener: function (type) { return this._super(type) },
        getContext: function () { return this._super() },
        addChild: function (child) { return this._super(child) },
        addChildAt: function (child, index) { return this._super(child, index) },
        removeChild: function (child) { return this._super(child) },
        removeChildAt: function (index) { return this._super(index) },
        getChildAt: function (index) { return this._super(index) },
        getChildIndex: function (child) { return this._super(child) },
        contains: function (child) { return this._super(child) },
        dispatchMouseEvent: function (type, x, y) { return this._super(type, x, y) },
        clearHoverChildren: function () { return this._super() },
        render: function () {
            this.draw();
            // 强制缩放，保证子对象不会比自己大
            this.ctx.scale(
                this.width < this.maxWidth ? this.width/this.maxWidth : 1,
                this.height < this.maxHeight ? this.height/this.maxHeight : 1
            );
            // 绘制子对象
            for (var i=0; i<this.children.length; i++) {
                this.ctx.translate(this.children[i].x, this.children[i].y);
                this.children[i].render();
                this.children[i].translate(-this.children[i].x, this.children[i].y);
            }
            this.ctx.scale(
                this.width < this.maxWidth ? this.maxWidth/this.width : 1,
                this.height < this.maxHeight ? this.maxHeight/this.height : 1
            );
        },
        onDrag: function (x, y) {
            var context = this;
            this.isDragging = true;
            this.dragPos.x = x + this.x;
            this.dragPos.y = y + this.y;
            this.dragFunc = function (_x, _y) {
                var offsetX = _x - context.dragPos.x,
                    offsetY = _y - context.dragPos.y;
                context.x += offsetX;
                context.y += offsetY;
                context.dragPos.x = _x;
                context.dragPos.y = _y;
            };
            this.dropFunc = function (_x, _y) {
                context.onDrop();
            };
            this.stage.addEventListener('mousemove', this.dragFunc);
            this.stage.addEventListener('mouseout', this.dropFunc);
        },
        onDrop: function () {
            this.isDragging = false;
            this.dragPos = {};
            this.stage.removeEventListener('mousemove', this.dragFunc);
            this.stage.removeEventListener('mouseout', this.dropFunc);
            delete this.dragFunc;
            delete this.dropFunc;
        }
    })

    /**
     * Vector2 {Class}
     * 二维矢量类
     */
    var Vector2 = Class.extend({
        init: function (x, y) {
            this.x = x;
            this.y = y;
        },
        copy: function () {
            return new Vector2(this.x, this.y);
        },
        length: function () {
            return Math.sqrt(this.sqrLength());
        },
        sqrLength: function () {
            return this.x*this.x + this.y*this.y;
        },
        /**
         * 标准化，单位长度为1
         */
        normalize: function () {
            var inv = 1/this.length();
            return new Vector2(this.x*inv, this.y*inv);
        },
        // 反向
        negate: function () {
            return new Vector2(-this.x, -this.y);
        },
        add: function (v) {
            return new Vector2(this.x+v.x, this.y+v.y);
        },
        subtract: function(v) {
            return new Vector2(this.x-v.x, this.y-v.y);
        },
        multiply: function (n) {
            return new Vector2(this.x*n, this.y*n);
        },
        divide: function (n) {
            return new Vector2(this.x/n, this.y/n);
        },
        //矢量积
        dot: function (v) {
            return new Vector2(this.x*v.x, this.y*v.y);
        }
    });
    Vector2.zero = new Vector2(0, 0);

    /**
     * Color {Class}
     */
    var Color = Class.extend({
        init: function (r, g, b) {
            this.r = r;
            this.g =g;
            this.b =b;
        },
        copy: function () {
            return new Color(this.r, this.g, this.b);
        },
        add: function (c) {
            return new Color(
                Math.min(this.r+c.r, 1),
                Math.min(this.g+c.g, 1),
                Math.min(this.b+c.b, 1)
            );
        },
        subtract: function (c) {
            return new Color(
                Math.max(this.r-c.r, 0),
                Math.max(this.g-c.g, 0),
                Math.max(this.b-c.b, 0)
            );
        },
        multiply: function (n) {
            return new Color(
                Math.min(this.r*n, 1),
                Math.min(this.g*n, 1),
                Math.min(this.b*n, 1)
            );
        },
        divide: function (n) {
            return new Color(this.r/n, this.g/n, this.b/n);
        },
        /**
         * 混合调配
         */
        modulate: function (c) {
            return new Color(this.r*c.r, this.g*c.g, this.b*c.b);
        },
        saturate: function () {
            this.r = Math.min(this.r, 1);
            this.g = Math.min(this.g, 1);
            this.b = Math.min(this.b, 1);
        }
    });
    // static Color
    Color.black = new Color(0, 0, 0);
    Color.white = new Color(1, 1, 1);
    Color.red = new Color(1, 0, 0);
    Color.green = new Color(0, 1, 0);
    Color.blue = new Color(0, 0, 1);
    Color.yellow = new Color(1, 1, 0);
    Color.cyan = new Color(0, 1, 1);
    Color.purple = new Color(1, 0, 1);

    /**
     * Particle Class
     * 粒子类
     * @param {Object}
     * {
	 *		position:
	 *		velocity:
	 *		life:
	 *		color:
	 *		size:
	 * }
     */
    var Particle = Class.extend({
        init: function (option) {
            this.position = option.position;
            this.velocity = option.velocity;
            this.acceleration = Vector2.zero;
            this.age = 0;
            this.life = option.life;
            this.color = option.color;
            this.size = option.size;
        }
    });

    /**
     * ParticleSystem {Class}
     * 粒子系统，相当于粒子的一个collection
     * @require Particle
     */
    var ParticleSystem = Class.extend({
        init: function () {
            this.$private = {
                particles : []
            }

            this.gravity = new Vector2(0, 100);
            this.effectors = [];

        },
        // push 粒子到发射备用区
        emit: function (particle) {
            this.$private.particles.push(particle);
        },
        // 模拟运动(在当前时间微分下)
        simulate: function (dt) {
            this.aging(dt);
            this.applyGravity();
            this.applyEffectors();
            this.kinematics(dt);
        },
        // 判断粒子的生存时间
        aging: function (dt) {
            for (var i=0; i < this.$private.particles.length; ) {
                var p = this.$private.particles[i];
                p.age += dt;
                if (p.age > p.life) {
                    this.kill(i);
                } else  {
                    i ++;
                }
            }
        },
        kill: function (index) {
            if (index < this.$private.particles.length) {
                this.$private.particles.splice(index, 1);
            }
        },
        applyGravity: function () {
            for (var i in this.$private.particles) {
                this.$private.particles[i].acceleration = this.gravity;
            }
        },
        applyEffectors: function () {
            for (var j in this.effectors) {
                var apply = this.effectors[j].apply;
                for (var i in this.$private.particles) {
                    apply(this.$private.particles[i]);
                }
            }
        },
        // 运动学变换，矢量叠加
        kinematics: function (dt) {
            for (var i in this.$private.particles) {
                var p  = this.$private.particles[i];
                p.position = p.position.add(p.velocity.multiply(dt));
                p.velocity = p.velocity.add(p.acceleration.multiply(dt));
            }
        },
        /**
         * 默认粒子的寿命由透明度表示
         */
        render: function (ctx) {
            for (var i in this.$private.particles) {
                var p  = this.$private.particles[i],
                    alpha = 1- (p.age/p.life);
                ctx.fillStyle = 'rgba('+Math.floor(p.color.r*255)+', '+Math.floor(p.color.g*255)+', '+Math.floor(p.color.b)+', '+alpha.toFixed(2)+')';
                ctx.beginPath();
                ctx.arc(p.position.x, p.position.y, p.size, 0, Math.PI*2, true);
                ctx.closePath();
                ctx.fill();
            }
        }
    })

    /**
     * ParticleBlock Class
     * @require [Particle, ParticleSystem]
     */
    var ParticleBlock = Class.extend({
        init: function (x1, y1, x2, y2)	{
            this.apply = function (particle) {
                if (particle.position.x - particle.size < x1 || particle.position.x + particle.size > x2) {
                    particle.velocity.x *= -1;
                }
                if (particle.position.y - particle.size < y1 || particle.position.y + particle.size > y2) {
                    particle.velocity.y *= -1;
                }
            }
        }
    })

    /**
     * @pulic Interface
     */

    var CVS = {};
    // merge Class to CVS
    CVS.$class = Class;
    CVS.$stage = Stage;
    CVS.$sprite = Sprite;
    CVS.$vector2 = Vector2;
    CVS.$color = Color;
    CVS.$particle = Particle;
    CVS.$particleSystem = ParticleSystem;
    CVS.$particleBlock = ParticleBlock;

    // merge methods to CVS
    extend(CVS, {
        createSprite: function (ctx, options) {
            return new Sprite(ctx, options);
        },
        createPoint3D: function (ctx, options) {
            var _vpx = 0,
                _vpy = 0,
                _cx = 0,
                _cy = 0,
                _cz = 0,
                opt = {
                    x: 0,
                    y: 0,
                    xpos: 0,
                    ypos: 0,
                    zpos: 0,
                    focalLength: 250,
                    width: 0,
                    height: 0,
                    draw: function () {},
                    // 设定旋转中心
                    setVanishPoint: function (vpx, vpy) {
                        _vpx = vpx;
                        _vpy = vpy;
                    },
                    // 设定坐标中心点
                    setCenterPoint: function (x, y, z) {
                        _cx = x;
                        _cy = y;
                        _cz = z;
                    },
                    // 绕x轴旋转
                    rotateX: function (angleX) {
                        var cosx = Math.cos(angleX),
                            sinx = Math.sin(angleX),
                            y1 = this.ypos * cosx - this.zpos * sinx,
                            z1 = this.zpos * cosx + this.ypos * sinx;
                        this.ypos = y1;
                        this.zpos = z1;
                    },
                    // 绕y轴旋转
                    rotateY: function (angleY) {
                        var cosy = Math.cos(angleY),
                            siny = Math.sin(angleY),
                            x1 = this.xpos * cosy - this.zpos * siny,
                            z1 = this.zpos * cosy + this.xpos * siny;
                        this.xpos = x1;
                        this.zpos = z1;
                    },
                    // 绕z轴旋转
                    rotateZ: function (angleZ) {
                        var cosz = Math.cos(angleZ),
                            sinz = Math.sin(angleZ),
                            x1 = this.xpos * cosz - this.ypos * sinz,
                            y1 = this.ypos * cosz + this.xpos * sinz;
                        this.xpos = x1;
                        this.ypos = y1;
                    },
                    // 获取缩放scale
                    getScale: function () {
                        return (this.focalLength / (this.focalLength + this.zpos + _cz));
                    },
                    // 获取z轴扁平化的 x，y值
                    getScreenXY: function () {
                        var scale = this.getScale();
                        return {
                            x: _vpx + (_cx + this.xpos) * scale,
                            y: _vpy + (_cy + this.ypos) * scale
                        };
                    }
                };

            typeof options == 'function' ? options.call(opt) : extend(opt, options || {});

            //return new Sprite(ctx, opt);
            var point3d = new Sprite(ctx, opt);
            Object.defineProperties(point3d, {
                'screenX': {
                    get: function () {
                        return this.getScreenXY().x
                    }
                },
                'screenY': {
                    get: function () {
                        return this.getScreenXY().y
                    }
                }
            });

            return point3d;
        },
        createTriangle: function (ctx, a, b, c, color, isStroke) {
            isStroke = isStroke == undefined ? true : isStroke;
            var pointA = a,
                pointB = b,
                pointC = c,
                triangle = CVS.createSprite(ctx, function () {
                    this.color = color;
                    this.light = null;
                    this.draw = function (g) {
                        if (isBackface()) {
                            return;
                        }
                        g = g || this.ctx;
                        //Depth example doesn't set a light, use flat color.
                        g.beginPath();
                        g.moveTo(pointA.screenX, pointA.screenY);
                        g.lineTo(pointB.screenX, pointB.screenY);
                        g.lineTo(pointC.screenX, pointC.screenY);
                        g.lineTo(pointA.screenX, pointA.screenY);
                        g.closePath();

                        var color = (this.light ? getAdjustedColor.call(this) : this.color);

                        if (typeof color == 'number') {
                            color = 'rgb('+(color >> 16)+', '+ (color >> 8 & 0xff) +', '+ (color & 0xff) +')'
                        }

                        g.fillStyle = color;
                        g.fill();
                        if (!isStroke) {
                            g.strokeStyle = color;
                            g.stroke();
                        }
                    };
                });

            Object.defineProperties(triangle, {
                'depth': {
                    get: function () {
                        var zpos = Math.min(pointA.z, pointB.z, pointC.z);
                        return zpos;
                    }
                }
            });

            function getAdjustedColor () {
                var red = this.color >> 16,
                    green = this.color >> 8 & 0xff,
                    blue = this.color & 0xff,
                    lightFactor = getLightFactor.call(this);

                red *= lightFactor;
                green *= lightFactor;
                blue *= lightFactor;

                return red << 16 | green << 8 | blue;
            }

            function getLightFactor () {
                var ab = {
                        x: pointA.xpos - pointB.xpos,
                        y: pointA.ypos - pointB.ypos,
                        z: pointA.zpos - pointB.zpos
                    },
                    bc = {
                        x: pointB.xpos - pointC.xpos,
                        y: pointB.ypos - pointC.ypos,
                        z: pointB.zpos - pointC.zpos
                    },
                    norm = {
                        x: (ab.y * bc.z) - (ab.z * bc.y),
                        y: -((ab.x * bc.z) - (ab.z * bc.x)),
                        z: (ab.x * bc.y) - (ab.y * bc.x)
                    },
                    dotProd = norm.x * this.light.x +
                        norm.y * this.light.y +
                        norm.z * this.light.z,
                    normMag = Math.sqrt(norm.x * norm.x +
                        norm.y * norm.y +
                        norm.z * norm.z),
                    lightMag = Math.sqrt(this.light.x * this.light.x +
                        this.light.y * this.light.y +
                        this.light.z * this.light.z);

                return (Math.acos(dotProd / (normMag * lightMag)) / Math.PI) * this.light.brightness;
            }

            function isBackface () {
                //see http://www.jurjans.lv/flash/shape.html
                var cax = pointC.screenX - pointA.screenX,
                    cay = pointC.screenY - pointA.screenY,
                    bcx = pointB.screenX - pointC.screenX,
                    bcy = pointB.screenY - pointC.screenY;
                return cax * bcy > cay * bcx;
            }

            return triangle;
        },
        createLight: function (x, y, z, brightness) {
            x = (x === undefined) ? -100 : x;
            y = (y === undefined) ? -100 : y;
            z = (z === undefined) ? -100 : z;
            brightness = (brightness === undefined) ? 1 : brightness;

            return Object.defineProperties({
                    x: x,
                    y: y,
                    z: z
                },
                {
                    'brightness': {
                        get: function () { return brightness; },
                        set: function (b) {
                            brightness = Math.min(Math.max(b, 0), 1);
                        }
                    }
                });
        }
    });

    this.CVS = CVS;

})();
