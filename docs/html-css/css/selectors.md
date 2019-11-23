# 选择器

## 基本选择器(4种)

1.标签选择器(元素选择器)

```css
/*标签名*/
p{

}
```

2.`id`选择器

```css
/*#加id值*/
#box{

}
```

- 给一个特有, 单独的标签设置样式, id选择器是首选.

- 给id起名字:
  - 一般是有`英文字符(多用小写),下划线_, 连字符-, 数字`
  - 不能有特殊字符,汉字, 数字不能开头

   注意:

   给元素添加id, 一定不能重复使用. 如果重复使用, 浏览器也不会报错, 将来js会出现问题.

3.类选择器

```css
/*.类名*/
.box{

}
```

- 如果有多个标签, 他们有一些共同的特点, 就可以使用类选择器
- 类的命名,和id一致.
- 一个标签可以拥有多个类, 一个类也可以被多个标签所拥有

4.通配选择器

```css
*{

}
```

一般不用

## 组合选择器(6种)

1.后代选择器

```css
div div p{

}
```

- 体现了标签的一种嵌套关系
- 相对比较灵活,当嵌套的层数变多的时候, 一般不会影响以前的后代选择器的选中效果.

2.子代选择器

```css
div > p{

}
```

- 体现了一种直接嵌套的关系(父与子)
- 没有后代选择器灵活. 但是指向性更强.
- 后代和子代可以综合一起使用.

3.交集选择器

```css
div.box{

}
```

- 如果把两个选择器直接写在一块,中间不要添加任何的符号, 就是交集选择器.
- 最常用的是: 标签和类,   标签和属性

4.并集选择器

```css
.box, p, h1{

}
```

完全等价于:

```css
   .box{
       color: red;
   }
   p{
       color : red;
   }
   h1{
       color: red;
   }
```

- 如果多个选择器他们中的样式一样, 或者有相同的部分, 则可以把他们抽取出来, 组成并集选择器

5.相邻兄弟选择器(下一个)

```css
div + div{

}
```

```css
div + *{

}
```

6.通用兄弟选择器(通配兄弟)

```css
div ~ p{

}
```

## 属性选择器(7种)

1.有`class`属性的都会被选中

```css
[class]{

}
```

2.存在属性`class`并且值也等于`aaa`

```css
[class="aaa"]{

}
```

3.包含`单词as`,as在值中与其他的使用空格隔开

```css
[class~="as"]{

}
```

4.以字符串`as`开头

```css
[class^="as"]{

}
```

5.以字符串`gh`结尾

```css
[class$="gh"]{

}
```

6.前缀为`un`

```css
[class|="un"]{

}
```

完全等价于:

```css
[class^="un-"]{

}
```

7.包含有字符串`un`

```css
[class*="un"]{

}
```

8.结尾加i

代码案例:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>属性选择器代码案例</title>
    <style type="text/css">
                [class~="a"]{
                        background-color: red;
                }
                [class*="bc"]{
                        background-color: red;
                }
                [class^="ab"]{
                        background-color: red;
                }
                [class$="b c"]{
                        background-color: red;
                }
                [class|="a"]{
                        background-color: red;
                }
</style>
  </head>
  <body>
    <div id="box1" xyz="aaa">a</div>
    <div class="a-b c">11111</div>
    <div class="a-bc">22222</div>
    <div class="ab d">33333</div>
  </body>
</html>
```

## 伪类选择器(2+3+1+4)

语法:

```css
:伪类{

}
```

1.状态伪类

`:link`: 如果一个`a`从来没有被点击过的一种状态,用于超链接

`:visited`: 链接被点击过后的状态 用于超链接

```css
a{

}
/* 相当于同时设置了 a:link和a:visited */
```

2.动作伪类

`:hover`: 当鼠标移动到任意元素的上方的时候会触发这个伪类

`:active`: 鼠标按下, 但是没有抬起, 中间这段时间会触发这个伪类.

`:focus` : 得到焦点的状态 用于`input`或者用于任何可以获取焦点的元素.

注意:

1. 这两个伪类可以用于任意的元素
2. 当用在a标签的时候, 这个两个伪类一定要放在状态伪类的后面.

问:`爱恨原则`从特殊性从动作前后状态分析

3.伪类的结合性

```css
a:visited:hover{

}
```

4.结构伪类

```css
li:first-child{}/*选中第一个子元素*/

li:last-child{}/*选中最后一个子元素*/

li:nth-child(n)/*选中第n个子元素,n从零开始取值*/

li:nth-child(2n+1)/*选中奇数个*/

li:nth-child(n+2)/*从第二个开始选*/

li:nth-child(-n+3)/*选中前3个*/

li:nth-last-child(n)/*从最后一个往前数第n个子元素,n从零开始取值*/
```

## 伪元素选择器

1.`::first-letter`首个字符

2.`::first-line`首行

3.`::selection`选中

4.`::before`和`::after`

和content属性一起使用

```css
p::before{
    content="我在最前";
}
```
