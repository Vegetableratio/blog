# CSS3选择器

## 1.属性选择器

- `[attr]`

  属性名为attr的元素

- `[attr=value]`

  属性名为 attr，并且这个属性值为 value 的元素

- `[attr~=value]`

  匹配具有属性名为attr的属性，并且一个或多个属性值中必须有⼀个是value

- `[attr|=value]`

  匹配具有属性名attr的属性，并且attr的属性值是value或者是以 value- 开头的元素。 最常⽤语lang属性。**注意：是value-开头。value后⾯是⼀个连接符。**

- `[attr^=value]`

  属性值以value开头（value是前缀）

- `[attr$=value]`

  属性值以value结尾（value是后缀）

- `[attr*=value]`

  属性值中包含⾄少⼀个value(value是属性值的⼀个字符串)

- `[attr operator value i]`

  在⽅括号的结束的时候添加⼀个字⺟ i 或者 I ，则匹配属性值的时候会忽略⼤⼩写

## 2.状态伪类选择器

- `:active` 户按下⿏标，但是没有松开的时候的状态 主要⽤a和button标签.
- `:hover`         ⿏标移动到元素上⽅的时候的状态
- `:focus`         获取焦点的时候状态。 ⼀般⽤在 input、textarea 上
- `:enable`
- `:display`
- `:read-only`     只读
- `:read-writer`    读写
- `:checked`      选中之后的状态
- `:required`     具有 required 表单元素。
- `:optional`    不具有 required 表单元素
- `:target`    目标伪类。当激活⼀个锚点的时候，会选中激活的那个锚点

```javascript
btn.onclick = function () {
        this.disabled = true;
}
```

```html
</style>
    :target{
        color: #00B51D;
    }
</style>

<body>
    <!--name作为描点-->
    <a href="#qwe">111</a>
    <p><a name="qwe">121212</a></p>
    <!--id作为描点-->
    <!--<a href="#qwe">111</a>
	<div></div>
	<p id="qwe">121212</p>-->
</body>
```

## 3.结构伪类选择器

- `:root`   根元素
- `:not(x)`   否定伪类。最终的结果不满⾜ x 的被选中
- `:empty`  没有子元素的被选中
- `:nth-child(n)`
- `:nth-last-child(n)`
- `:nth-of-type(n)`  第 n 个⼦元素( 某类元素)
- `:nth-last-of-type(n)`

## 4.伪元素选择器

- `::first-letter`    选中首字符
- `::first-line`     选中第一行
- `::after`    给选中的元素的最后添加⼀个⼦元素。 必须设置content属性
- `::before`   给选中的元素最前⾯添加⼀个⼦元素。 必须设置conent元素
- `::selection`    ⽤⿏标选中的状态. ⼀般⽤于选中⽂本
