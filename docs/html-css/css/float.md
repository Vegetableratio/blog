# 元素的浮动

以`float:left`为例:

1. 元素浮动后会脱档
2. 从没有浮动的位置开始向左跑, 直到碰到父元素的边距, 或者另外一个左浮动的右边距.
3. 对其他没有浮动的元素来说, 就好像浮动的元素不存在.
4. 任何的两个浮动的元素绝不会重叠.
5. 元素的浮动不会出现在垂直方向上.

浮动元素的特点:

1. 浮动的元素没有块级和行内的区别. 都可以正常的设置`width`,`height`, `margin`, `padding`等.
2. 浮动元素没有办法自动撑起父容器的高度.
3. 不浮动的元素会钻到浮动元素的"底部", 但是, 文本不会跑到浮动元素的下面.(字围绕效果)
4. 浮动的元素, 垂直方向不再会出现`margin`的塌陷

## 清浮动

    为什么去浮动?
    >浮动元素不能撑起父元素高度

### 手动给父元素添加`height`

    缺点:不够灵活

### `clear`属性,消除前面`float`对自身的影响

    ```css
    clear:right
    clear:left
    clear:both
    ```

    缺点:
        
    *1.后面元素的`margin-top`失效
        
    2.父元素依然没有高度

代码案例(`margin-top`失效):

    ```html
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        ul{
            list-style: none;
        }
        ul li{
            width: 200px;
            height: 100px;
            margin-left: 20px;
            float: left;
            background-color: pink;
        }
        .box{
            width: 500px;
            height: 300px;
            background-color: gray;
            clear: both;
            margin-top: 200px;
        }
    </style>

    <body>
        <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
        </ul>
        <div class="box"></div>
    </body>
    ```

### 外墙法:使用专门的元素来清理浮动

缺点:
    1.专门搞一个元素,破坏了`html`结构
    2.父元素依然没有高度

    ```html
    <style>
        i{
            display:block;
            clear:both;
        }
    </style>

    <ul>
        <li>1</li>
    </ul>
    <i></i>
    ```

### 内墙法:将元素放在放在浮动元素的父元素中

优点:
    1.浮动元素的父元素有了高度
    2.后面元素的`margin-top`有效了
缺点:
    需要专门另外搞一个元素

    ```css
    <style>
        ul li{
            width: 200px;
            height: 100px;
            margin-left: 20px;
            float: left;
            background-color: pink;
        }
        i{
            display:block;
            clear:both;
        }
    </style>

    <ul>
        <li>1</li>
        <i></i>
    </ul>
    ```

### 伪元素法(内墙法升级)

    ```css
    <style>
        ul::after{
            content"";
            display:block;
            clear:both;
        }
    </style>
    ```

### `overflow`

    ```css
    ul{
        overflow: hidden;
    }
    ```
