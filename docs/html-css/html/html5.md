# `HTML5`新标签及其特性

## 1.一般标签

比div只是多了语义

```html
<section>/*表示用来定义文档或引用程序,通常包含一个标题*/
<nav>/*主导航*/
<article>/*文档、页面、应用或网站中的一个独立的容器*/
<header>/*头*/
<aside>/*侧边*/
<footer>/*尾部*/
```

非结构化语义标签

1. `<figure>`   `<figcaption>`
2. `<mark>`
3. `<progress>`   进度条
   - max  最大值
   - value  当前进度值
   - form
4. `<time>`  时间

## 2.音视频标签

```html
<video>
<audio>
```

## 3.智能表单

表单类型

```html
<form action = "#">
    <input type = "email">
    <input type = "submit">
</form>
```

新增的表单类型(慎重使用,浏览器不支持默认当`text`使用)

1. `email`类型

2. `number`类型

3. `url`类型     统一资源定位符格式:`协议://xxx`

4. `tel`类型  电话号码,浏览器未实现

5. `search`类型

6. `color`类型  

   ```JavaScript
   var form = document.querySelector("form");
   var color = document.querySelector("input[type =color]");
   form.onsubmit = function(e){
       e.preventDefault();  //阻止默认行为, 或者在from中填写  action:"javascript:;"
       console.log(color.value)//获取颜色值
   }
   ```

7. `rang`类型    可拖动的滚动条

   ```html
   <input type = "rang" name = "rang" max = "1000">
   ```

8. `date`   `time`    `datetime-local`    `week`     `month` 格式友好,后台好处理

表单的新增属性

`required`  提示用户必填内容,添加到`input`

`autofocus`  自动获取焦点

`autocomplete`   默认值on ,关闭off    可以给`form`元素

`list`属性  `datalist`

```html
<form action = "#" >
    <input type = "text" list = "a">
    <datalist id = "a">
        <ontion value = "c++">c++</ontion>
    </datalist>
</form>
```

`form`属性  通过id

`novalidate`     不验证   用在`form`元素上或者提交按钮上

`pattern`属性    模式    可以在其中写正则表达式

`disabled`属性  禁用

`readonly`属性

## 4.多媒体标签

`video`

```html
<video src = "video/test.mp4" controls></video>
<video>
    <source src = "test.mp4" type ="type/mp4">
    <source src = "test.ogv" type ="type/ogv">
    <source src = "test.webm" type ="type/webm">
</video>
```

属性

1. `autoplay`  chrome63开始被禁用
2. `controls`
3. `currentSrc`(只读)   当前播放路径
4. `duration`(只读)   音视频长度
5. `currentTime`当前播放时间
6. `muted` 静音
7. `playbackRate`  播放速度
8. `ended`(只读)   检测视频是否播放完毕 返回true/false
9. `loop`  循环
10. `paused`(只读)  查看音视频是否暂停 返回true/false
11. `preload` 预加载   auto :自动加载   metadata:仅加载元数据   none:不加载
12. `poster`  播放前的封面(海报) poster = "1.jpg"
13. `networkState`  返回网络状态,4种状态
14. `readyState`  返回音视频就绪状态
15. `seekable`(只读)

方法

1. load()
2. play()
3. pause()
4. requestFullScreen()    注意兼容性

事件

1. play
2. pause
3. progress  正在下载视频资源
4. timeupdate  播放时间更新
5. error

## 5.`data`属性

```html
<div data-a = "A" data-b = "B" data-c = "C" id = "div"></div>

<script>
    var arr = div.dataset;  //不是数组
</script>
```

## 6.`canvas`

功能强大,使用js绘图,复杂动画转向canvas来做.

### 6.1`canvas`绘制矩形

1. `canvas`默认`width300px;height150px`

2. 通过添加`width`和`height`属性设置宽高

   ```html
   <canvas width="600" height="600">
       你的浏览器太旧了,请更新浏览器!   <!--在浏览器不支持的情况下提醒用户-->
   </canvas>
   <!--类似于img标签-->
   ```

3. 使用css设置宽高,保证宽高比2:1;实际不用css设置宽高!

使用案例:

```JavaScript
var canvas = document.querySelector("canvas");

//拿到护臂==画笔,获取一个和当前画布相关的2d上下文
var cxt = canvas.getContext("2d");

//绘制图形  只能绘制矩形和路径的基本图形
//坐标原点(0,0) canvas 左上角
cxt.strokeRect(10,20,100,100)   //矩形 参数(x,y,width,height)
cxt.fillRect(200,200,50,100)    //填充矩形
```

```JavaScript
//兼容性检测
function draw(){
    var canvas = document.getElementsByTagName("canvas");
    if(!canvas||!canvas.getContext) return;
    var cxt = canvas.getContext("2d");
    cxt.strokeRect(10,20,100,100)   //绘制一个矩形
    cxt.fillRect(200,200,50,100)    //填充一个矩形
    cxt.clearRect(0,0,100,100)  //清除指定的矩形区域
}
```

`cxt.fillStyle = white`画笔颜色

### 6.2简易动画

```javascript
function draw(){
    var canvas = document.querySelector("#cvs");
    if(!canvas||!canvas.getContext) return;
    var cxt = canvas.getContext("2d");
    var left = 0;
    setInterval(function (){
        cxt.clearRect(0,0,600,600);//清空矩形区域,只有清空矩形区域这一个清除!
        cxt.strokeRect(0,left,600,600);
        left += 4;
    })
}
```

### 6.3绘制路径(`path`)

1. 创建起始点
2. 调用绘制方法绘制路径
3. 把路径封闭
4. 一旦路径生成,通过描边或填充来渲染图片

案例:

```javascript
//绘制三角形
function draw(){
    var canvas = document.querySelector("#cvs");
    if(!canvas||!canvas.getContext) return;
    var cxt = canvas.getContext("2d");
    //1.开启路径    一定要先开启!
    cxt.beginPath();
    //2.把画笔移动到路径的起点
    cxt.moveTo(200,200)//参数坐标x,y
    //3.绘制一条线段
    cxt.lineTo(400,450);//参数坐标x,y
    cxt.lineTo(300,500);
    cxt.lineTo(200,200);
    //4.在路径上描边 对上一个路径描边
    //cxt.stroke();//描边
    cxt.fill();//填充,自动先闭合

    //5.闭合路径
    cxt.closePath();
}
```

### 6.4绘制圆弧

1.`arc(x,y,r,startAngle(开始角度),endAngle(结束角度),anticlockwise)`

`anticlockwise`:默认false,表示顺时针绘制

无需`moveTo`

```javascript
function draw(){
    var canvas = document.querySelector("#cvs");
    if(!canvas||!canvas.getContext) return;
    var cxt = canvas.getContext("2d");
    cxt.arc(300,300,200,0,Math.PI/2,true);
    cxt.stroke();//描边
    cxt.closePath();
}
```

2.`arcTo(x1,y1,x2,y2,radius)`

首先moveTo

和两条相交直接内切的圆弧

案例:绘制阴阳图

```javascript
    var canvas = document.querySelector("canvas");
    var p = Math.PI;
    draw();

    function draw() {
        if (!canvas || !canvas.getContext) return;
        var cxt = canvas.getContext("2d");
        cxt.beginPath();
        cxt.arc(600, 452, 400, 0, p * 2);
        cxt.stroke();
        // 右黑
        cxt.beginPath();
        cxt.arc(600, 452, 400, -p / 2, p / 2);
        cxt.fill();
        // 左白
        cxt.beginPath();
        cxt.arc(600, 452, 400, -p / 2, p / 2, true);
        cxt.fillStyle = "white";
        cxt.fill();
        // 右上黑
        cxt.beginPath();
        cxt.arc(600, 252, 200, 0, p * 2);
        cxt.fillStyle = "black";
        cxt.fill();
        // 左下白
        cxt.beginPath();
        cxt.arc(600, 652, 200, 0, p * 2, true);
        cxt.fillStyle = "white";
        cxt.fill();
        // 右上白
        cxt.beginPath();
        cxt.arc(600, 252, 60, 0, p * 2);
        cxt.fill();
        // 左下黑
        cxt.beginPath();
        cxt.arc(600, 652, 60, 0, p * 2, true);
        cxt.fillStyle = "black";
        cxt.fill();
    }
```

### 6.5贝塞尔曲线

在canvas中最多绘制到3次贝塞尔曲线

二次贝塞尔曲线:

`cxt.moveTo(200,200)`

`cxt.quadraticCurveTo(250,100,300,300)`

三次贝塞尔曲线:

`cxt.moveTo(200,200)`

`cxt.bezierCurveTo(250,100,300,300,100,400)`

### 6.6曲线运动

案例:正弦曲线

```javascript
    var canvas = document.querySelector("canvas");
    var initX = 100, initY = 450, x, y;
    duration = 2000;

    draw();

    function draw() {
        if (!canvas || !canvas.getContext) return;
        var cxt = canvas.getContext("2d");
        var startTimer = new Date();
        cxt.beginPath();
        var id = setTimeout(function step() {
            var p = (new Date() - startTimer) / duration;
            x = 200 * p + initX;
            y = 200 * Math.sin(p * Math.PI * 2) + initY;
            cxt.arc(x, y, 1, 0, Math.PI * 2);
            if (x >= 1500) {
                cxt.stroke();
                cxt.closePath();
                clearInterval(id);
                return;
            }
            setTimeout(step, 2)
        }, 2)
    }
```

### 6.7设置样式和颜色

**样式在绘制(stroke)之前设置!**

`cxt.fillStyle = "#f00"`   支持颜色、RGB值、RGBa值、八进制

`cxt.stokeStyle = "blue"`

透明度(Transparency)

`cxt.globalAlpha = value`    value =[0,1]

线的样式(line style)

`cxt.lineWidth = value`

起点终点坐标在线中心

线帽的样式

```javascript
cxt.lineCap = "butt";//默认
cxt.lineCap = "round";//圆形结束,长度多了一个线宽
cxt.lineCap = "square";//
```

线结合处样式

```JavaScript
cxt.lineJoin = "miter"; //默认,延申相交
cxt.lineJoin = "round"; //圆角
cxt.lineJoin = "bevel"; //方角
```

设置线条样式的方法

参数部分一般为偶数个,如果为奇数自动*2补齐偶数个

```JavaScript
//参数:1.实线部分长度2.空白部分长度
cxt.setLineDash([10,2]);

//参数:1.实线2.空白3.实现4.空白
cxt.setLineDash([20,10,10,5]);
```

```JavaScript
//设置起始偏移量
cxt.lineDashOffset = value;  //值可正可负

//配合定时器可使得线动起来
cxt.setLineDash([20])
var offset = 0;
setInterval(function (){
    cxt.clearRect(0,0,600,600);
    offset += 4;
    cxt.lineDashOffset = offset;
    cxt.strokeRect(100,100,400,400);
},20)
```

`getLineDash()`获取包含当前线条样式的一个数组

### 6.8阴影

```JavaScript
ctx.shadowColor = "gray";
ctx.shadowOffseX = 5;//偏移
ctx.shadowOffseY = 5;
ctx.shadowBlur = 10;//模糊半径
ctx.strokeRect(100,100,200,200);
```

案例:鼠标移入移出的动态阴影效果(与用户进行交互)

### 6.9绘制文本

```JavaScript
//参数1.字体大小2.字体
ctx.font = "20px sans-serif"
//参数:1.文本2.坐标
ctx.fillText("锄禾日当午", 100,100[,width]);    //文字填充
ctx.strokeText();   //文字描边

//文本垂直对齐方式 top  hanging  middle alphabetic(默认基线对齐) bottom
ctx.textBaseline = value;

//水平文字对齐方式 right  left  center或者start end
ctx.textAlign = "right";

```

### 6.10.绘制图片(`drawImage()`)

引入image元素,将绘制动作放入`onload`事件中

- 手动创建
- 使用`<img>`标签

```javascript
var img = new Image();
//或者 var img = document.createElement("img");
//var img = document.querySelector("img");
img.onload = function(){
    //参数1.图片对象 23.图片左上角在canvas中的坐标
    ctx.drawImage(img,10,10);

    //参数1.图片对象 23.图片左上角在canvas中的坐标 45.图片缩放的大小
    ctx.drawImage(img,0,0,600,600);

    //参数1.图片对象 23.原始图片开始切片的原点 45.图型切片宽高 67.绘制的原点  89绘制缩放大小
    ctx.drawImage(img,0,0,600,600);
}
img.src = "1.jpg";
```

### 6.11`canvas`的变换

**变换的是`canvas`的坐标系!**

平移、旋转和缩放

```JavaScript
//平移
ctx.teanslate(300,300);
ctx.stronRect(-50,-50,100,100);
ctx.arc(0,0,200,0,Math.PI*2);

//旋转
ctx.rotate(Math.PI/6)

//缩放 两个轴缩放的倍数
ctx.scale(2,1)
```

### 6.12`transform`(变形矩阵)

`transform(a,b,c,d,e,f)`

### 6.13状态的保存和恢复

`save()`  和  `restore()`

1. 当前的变形和属性值
2. 当前的裁剪路径

```JavaScript
ctx.save(); //保存状态
ctx.translate(300,300);
ctx.rotate(Math.PI / 3);
ctx.strokeRect(0,0,100,100);
ctx.save();
ctx.restore();  //恢复状态
ctx.restore();
```

案例:绘制钟表

案例:五子棋盘

### 6.14合成

`globalCompositeOperation = value;`  全局组合操作

- `source-over(default)`   新图形在所有的旧图形的上面

- `source-in`   仅显示新旧重叠部分的新图形,其他部分透明

- `source-out`   仅显示新旧没有重叠部分的新图形

- `source-atop`   老图形显示,新图形仅显示重叠部分

- `destination-over`   旧图形在上面

- `destination-in`    仅显示新旧重叠部分的旧图形,其他部分透明

- `destination-out`  仅显示新旧没有重叠部分的旧图形

- `destination-atop`  新图形显示,老图形仅显示重叠部分

- `ligher`  新老图形都显示,重叠区域颜色相加

- `darken`  重叠部分颜色值(RGB)小的那个

- `lighten`  重叠部分颜色值(RGB)大的那个

- `xor`   重叠部分透明

- `copy`   仅保留新图形,其余部分被清除

案例:刮刮乐

### 6.15裁剪路径

`clip()`

裁剪路径,把前面的路径结束才能绘制图形,其他区域不能绘制图形

只对裁剪后绘制的图形起作用

```JavaScript
ctx.beginPath();
ctx.arc(300,300,200,0,Math.PI*2)
ctx.closePath();
ctx.clip();
```

### 6.16动画

### 6.17像素操作

`canvas`把所有的像素存到一个类数组中

每一个像素在数组中占据了4个位置(rgba均为0~255)

数组长度:`width*height*4`

```javascript
//获取  参数1.获取的起点,2.长宽
var imageData = ctx.getImageData(0,0,600,600).data;
var data = imageData.data;
for(var i = 20000;i < 30000;i += 4){
    data[i] = 255;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 255;
}
ctx.putImageData(imageData,0,0);
```

案例:像素级操作
案例:图片的翻转(底片)
案例:怀旧照片操作(灰度处理)2种方法

```JavaScript
//将canvas1中的内容画到canvas2中
ctx2.drawImage(canvas1,0,0,600,600)
```

案例:
取色器
十进制转换成十六进制
马赛克

## 7.本地化存储

- HTTP cookie:标准方案 4KB
- userData:微软方案 每页64KB 每个站点640KB
- Flash cookie:
- Gears:谷歌方案
- HTML5:标准方案

`HTML5`的`web storage`

- sessionStroage:
- localStroage:
