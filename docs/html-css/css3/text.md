# 文本的一些属性

## 1.`text-shadow`属性

给文本添加阴影

- 包含四个值： x偏移、y偏移、模糊半径、阴影颜⾊

- 模糊半径和颜⾊值都是可选的，也可以把颜⾊值写在其他值之前。

- 也可以提供多个shadow值，⽤逗号分开

```css
text-shadow: 10px 10px 20px gray, -10px 10px 20px blue;
```

## 2.自动换行

- `word-break` 让⽂本换⾏

- `overflow-wrap` 让⻓单词和URL换⾏

  **使用的标准**

  - ⾮中⽂的时候不在单词中间换⾏，
  - 中⽂的时候不让标点符号在⾏⾸。

2.1`word-break`

- `normal`   按照准则正常换行
- `break-all`   为了防⽌⽂本溢出, 对于⾮CJK (CJK 指中⽂/⽇⽂/韩⽂) ⽂本，可在任意字符间断⾏。
- `keep-all`   对于CJK⽂本, 不允许换⾏(如果有标点符号, 可以在标点符号出换⾏). 其他⽂本,与 normal ⼀样.
- `break-word`  仅chrome支持,一般不用

2.2`overflow-wrap`

- `normal`   正常换行
- `break-word`   对⽐较⻓的单词或者 url , 为了防⽌溢出, 则可能在任何地⽅换⾏.

2.3`text-overflow`

非`CSS3`属性。⽤来处理当⽂本有溢出的时候, 应该如何处理溢出的⽂本,配合其他属性使用.

`clip`   默认值

`ellipsis`    用`...`提示有溢出

```css
div{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:
}
```

`white-space:pre;`保证空格不被压缩

## 3.自定义字体

语法:

```css
@font-face {
    font-family: myFont; /*⾃定义字体的名字*/
    src: url(""); /*⾃定义字体的路径, 可以是相对路径,也可以是绝对路径*/
}
```

字体网站:

- <http://www.iconfont.cn/>
- <https://www.youziku.com/>
