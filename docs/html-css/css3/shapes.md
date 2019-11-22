# 一.`shapes布局`

效果:实现不规则的文字环绕效果，需要和浮动配合使用

使用场景:移动端，内部中后台项目

相关属性

```css
shape-outside
shape-margin
shape-image-threshold
```

## 1.1`shape-outside`

```css
/* 关键字值 */
shape-outside: none;/*普通的矩形环绕*/
/*<shape-box> – 图形盒子;要来指定文字环绕的时候是依照哪个盒子的边缘来计算的。*/
shape-outside: margin-box;
shape-outside: content-box;
shape-outside: border-box;
shape-outside: padding-box;

/* 函数值 */
/*<basic-shape>指的是基本形状函数，和CSS clip-path剪裁属性支持的基本形状函数一模一样*/
shape-outside: circle();/*圆*/
shape-outside: ellipse();/*椭圆*/
shape-outside: inset(10px 10px 10px 10px);/*内矩形(包括圆角矩形)*/
shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);/*多边形*/

/* <url>值 */
/*<image>值的是图像类，包括URL链接图片，渐变图像，cross-fade()，element()等*/
shape-outside: url(image.png);

/* 渐变值 */
shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);
```

关键字案例:

```html
<style>
.shape {
    float: left;
    width: 60px; height: 60px;
    padding: 10px; margin: 10px;
    border: 10px solid;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: content-box;
    color: #cd0000;
    shape-outside: none;  /* 或margin-box，border-box，padding-box，content-box */
}
</style>

<span class="shape"></span>
<p>在CSS Shapes问世之前...</p>
```

**基本形状函数语法**

```css
circle( [<shape-radius>]? [at <position>]? )/*半径 at 圆心*/
/*其中问号?是正则表达式中的特殊字符，表示0和1，也就是说shape-radius（圆半径）和position（圆心位置）都是可以缺省的，表示。因此，下面的写法都是合法的：*/
shape-outside: circle();
shape-outside: circle(50%);
shape-outside: circle(at 50% 50%);
shape-outside: circle(50% at 50% 50%);
shape-outside: circle(50px at 50px 50px);
/*默认情况下，半径值由元素的大小决定;修改圆时，圆心和半径都需要显式地定义；只指定其中一个是非法的*/

/*和关键字属性值加border-radius实现的圆形环绕相比，circle()得实现相对更加灵活一些，比方说想弄一个半圆的环绕效果，可以：*/
shape-outside: circle(50% at 0% 50%);
```



```css
ellipse( [<shape-radius>{2}]? [at <position>]? )/*x轴半径，y轴半径，以及椭圆的圆心位置*/
shape-outside: ellipse();
shape-outside: ellipse(50px 75px);
shape-outside: ellipse(at 50% 50%);
shape-outside: ellipse(50px 75px at 50% 50%);

/*x，y半径除了具体数值，还支持farthest-side和closest-side这两个关键字，顾名思义，分别表示到最长边的长度和最短边的长度。例如：*/
ellipse(farthest-side closest-side at 25% 25%)
/*表示在浮动元素25% 25%位置，以距离浮动元素最长边的距离作为椭圆的x坐标，以距离浮动元素边缘最短的距离作为椭圆的y坐标。*/
```



```css
/*shape-arg是必须参数，可以是1~4个值。当提供所有前四个参数时，它们表示从参考框向内的顶部，右侧，底部和左侧偏移，也就是定义了插入的矩形的边缘位置。 这些参数遵循边距缩写的语法（类似margin、padding等属性），我们可以使用1个，2个，3个或4个值。border-radius表示圆角大小，可以缺省。*/
inset( <shape-arg>{1,4} [round <border-radius>]? )/*内矩形*/

shape-outside: inset(10px);
shape-outside: inset(10px 20px);
shape-outside: inset(10px 20px 30px);
shape-outside: inset(10px 20px 30px 40px);
shape-outside: inset(10px 20px 30px 40px round 10px);
```



```css
polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )/*多边形*/
/*fill-rule表示填充规则，可以是nonzero以及evenodd，默认值是nonzero*/

polygon( x1 y1, x2 y2, x3 y3, ... )/*一个一个多边形的点坐标*/
shape-outside: polygon(0 0, 0 100px, 100px 200px);
shape-outside: polygon(0 0, 100px 0, 0 50px, 100px 100px, 0 100px);
```

以上实际开发的时候可以直接省略，或者换成其他字符或者位图，如照片，风景画，插画等

**图像类**

图像类只举URL和渐变的例子，因为这两种类型最常用。

```css
.shape {
    float: left;
    width: 200px; height: 300px;
    /* 文字环绕这个鹦鹉 */
    shape-outside: url(./birds.png);
    /* 鹦鹉赋色并显示 */
    background-color: #cd0000;
    mask: url(./birds.png) no-repeat;
}
/*注意：url()链接的图片尺寸无法修改；url()链接的图片不能跨域，否则会没有效果*/
```



**gradient渐变与环绕**

`渐变可以是:线性渐变,径向渐变以及repeat渐变`

```css
/*绘制斜向线性渐变*/
.shape {
    float: left;
    width: 150px; height: 120px;
    --gradient: linear-gradient(to right bottom, #cd0000, transparent 50%, transparent 90%, #cd0000);
    shape-outside: var(--gradient);
    background: var(--gradient);
}
```



## 1.2`shape-margin`

​	文字环绕图形时候，距离边界的位置，这个属性很有用。因为在Shape布局中，文字环绕有时候是无视`margin`属性的，想要撑开间距，多半还得用`shape-margin`属性。

```css
/* 长度值 */
shape-margin: 10px;
shape-margin: 20mm;

/* 百分比值 */
shape-margin: 60%;
```

​	虽然该属性包含了`margin`，但是行为表现和CSS的`margin`属性却有很大的差别。首先，`shape-margin`只支持1个值，`margin`则1~4个；然后`shape-margin`的有效数值范围是有限制的，从0到浮动元素的边界（此时布局效果表现如同普通浮动布局）。



## 1.3了解`shape-image-threshold`

​	threshold这个单词是“阈(yu)值”的意思，`shape-image-threshold`指图像环绕时候的半透明阈值，默认是`0.0`，也就是图像透明度为`0`的区域边界才能环绕。同理，如果值是`0.5`表示透明度小于0.5的区域都可以文字环绕。

​	这个属性也非常实用，也很好理解，例如，我们写一个实色到透明的倾斜线性渐变，则从0~1的透明度都覆盖到了，此时，不同的`shape-image-threshold`值则会产生不同的布局变化，如下GIF图示意：

![ä¸åéæåº¦éå¼çæå­ç¯ç"è¡¨ç°](https://image.zhangxinxu.com/image/blog/201902/shape-image-threshold.gif)

分别展示了如下阈值的环绕表现：

```css
shape-image-threshold: 0.0;
shape-image-threshold: 0.3;
shape-image-threshold: 0.6;
shape-image-threshold: 0.8;
```



案例:iPhone X刘海头

![shape-outside urlå®ç°çç¯ç"åè¡¨ææ](https://wx1.sinaimg.cn/mw690/4b4d632fgy1fjo5qvf2zvg208e0dnacs.gif)

