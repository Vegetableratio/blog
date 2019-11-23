# 盒模型-块元素

`css`把任意的元素都看出一个盒子, 这些有一些共同的特征: `content`,`padding`,`border`,`margin`

目前为止所有的盒子都是矩形

## 块元素的盒模型

1.水平方向(7个属性值,从左往右)

2.垂直方向(7个值从上往下)

注意:

    1.`content`或着子元素一定处于父容器的`content`区域
        
    2.如果增加` padding`和`border`都会导致整个盒子的变形
        
    3.水平:`margin-left,margin-right和width`可以设置为`auto`,水平方向其他属性只能是具体的值.
         - 一个块级盒子的总的水平方向的尺寸,一定是等于父容器的`width`的值.


    - `width:auto > margin-left:auto = margin-right的auto`
    - `width`如果不设置是`auto`, `margin-left和margin-right`如果不设置是`0`  
    - 任何方向, 如果`padding`和`border`没有声明, 一定是`0`  
    - `margin`可以是负值, 其他的只能是大于等于`0`的值.

    ```css
    margin:0 auto;
    ```

4.垂直: `height`如果设置为`auto`, 高度会自动包含住内容. 其他的`auto`的都会成为`0`

## 属性的简写

`padding:30px`

简写属性会有一个叫做值复制的动作在里面:右复制上,下复制上,左复制右

`margin`的简写规则和`padding`一致

`border`的简写

    ```CSS
    border: 20px solid red;
    border-color: red blue green;
    border-style: solid dotted;
    border-width : 10px 50px;
    ```

遵循上右下左的的顺序
