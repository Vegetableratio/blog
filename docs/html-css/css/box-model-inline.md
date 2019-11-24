# 盒模型-内联元素

## 非替换元素:显示内容是标签内容

`a,span,i`都是非替换元素

特点:

    1.宽设置无效
        
    2.边框有效
        
    3.水平方向`padding`可以生效,并且符合预期
        
    4.垂直方向`padding`有效,但效果不符合预期
        
    5.`margin`水平正常,上下无效

## 替换元素:内容会用其他内容器替换

`img,input,video,audio`都是替换元素

    除了不会独占一行其他性质和块元素一样

- 在父容器中单独占一行.
- 可以设置宽和高
- 块级元素的内部可以嵌套任意的元素.

## 元素的显示和隐藏

    ```css
    diaplay:none;/*元素从页面上完全消失*/
    visibility:hidden;/*视觉上隐藏,但还留有元素占据的位置*/
    ```

    ```css
    display: block;
    display: inline; 
    display: inline-block; /*除了不能独占一样, 其他都是一个真正的块*/
    ```

## 溢出的处理

    ```css
    overflow: visible;
    overflow : hidden;  /*不显示溢出的部分  这个用的最多*/
    overflow : auto;  /*由浏览器自己决定改如何处理溢出的部分  一般是显示滚动条*/
    ```
