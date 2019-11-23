# 动画`animation`

```css
div{
    /*动画名字(必须)*/
    animation-name: move;

    /*动画周期(必须) 单位s ms*/
    animation-duration: 3s;

    /*时间函数*/
    animation-timing-function:linear;

    /*动画延迟一段时间后执行*/
    animation-delay:1s;

    /*动画执行次数  支持浮点数(以时间为基准)*/
    animation-iteration-count:infinite;

    /*动画执行方向  默认normal: 0%--->100%
                    alternate: 来回交替
                    reverse: 从后往前执行
                    alternate-reverse:
    */
    animation-direction: alternate;

    /*动画执⾏前或执⾏后元素的状
        默认none 动画结束后元素立即回到开始前的位置
        forwards 元素停在最后一帧
        backwords:动画开始时,在延迟期间的状态;让元素去第一帧的位置等待
        both:forwards 和 backwords
    */
    animation-fill-mode:both;

    /*running  paused*//*一般在JS用控制动画用*/
    animation-play-state:paused;
}

/*设置关键帧*/
@keyframes move{
    0%{ /*from*/
        transform:translate(0px,0px)
    }
    50%{
        transform:translate(100px,300px)
    }
    100%{  /*to*/
        transform:translate(400px,500px)
    }
}
```

简写

```css
div{
    /*无书写顺序*/
    animation:move 2s 1s ...;
}
```

- `animation-timing-function`

  内置的值或者贝塞尔曲线

  贝塞尔(bezier)曲线:`cubic-bezier()`

  在线生成网站:`http://cubic-bezier.com`

- 阶跃函数steps(n,start/end)  每个关键帧中分n次

## `JS`动画事件

```javascript
    var div = document.querySelector("div");
    //监听动画开始事件
    div.addEventListener("animationstart", listener, false);
    //动画结束
    div.addEventListener("animationend", listener, false);
    //动画切换周期
    div.addEventListener("animationiteration", listener, false);
    div.className = "move"//添加类之后动画
```

## `animate.css`

`animate.css`是⼀个有趣，酷炫的，跨浏览器的动画库，你可以将它⽤于你的项⽬中。不管是主⻚，滑动切换，⼜或者是其它⽅⾯，你都可以通过它来制作出惊⼈的效果。

下载网址:<https://daneden.github.io/animate.css/>
