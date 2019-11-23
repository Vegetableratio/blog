# `columns`分栏布局

本文转自:<https://www.zhangxinxu.com/wordpress/?p=8436>

​`Multiple-column`布局，也称多列布局、多栏布局，我自己喜欢叫做分栏布局，这种布局可以讲内容布局到一组列框，类似于报纸上的排版。

​分栏布局非常特殊，有别于传统布局方法，它将包括包括所有子元素在内的所有内容拆分为列，这与我们打印网页时候时页面内容分割成不同的页面的方式类似。

​分栏布局IE10+都可以使用，API稳定，移动端兼容性比flex布局要好，虽然设计初衷不一样，但很多布局都可以实现。甚至某些场景下，只能使用分栏布局才能实现。很有学习的必要。

```text
直接相关属性
    column-width    每一栏/列的最佳宽度
    column-count    理想的分栏数目
    columns         以上属性缩写
    column-rule-color   每个栏目中间分隔线的颜色,同border-color
    column-rule-style   每个栏目中间分隔线的类型,同border-style
    column-rule-width   每个栏目中间分隔线的宽度大小,同border-width,支持关键值和具体值
    column-rule     以上三个属性缩写
    column-span     某一个内容是否跨多栏显示
    column-fill     当内容分栏的时候，如何平衡每一栏填充的内容
    column-gap      每一栏之间空白间隙大小
间接相关属性
    break-after
    break-before
    break-inside
```

## 直接属性

### 1.`column-width`

每一栏/列的最佳宽度

语法:column-width: length | auto;

- **length:**表示设定的最佳列宽值。实际呈现的每一栏的宽度可能与指定值不同，具体内容参见下面的细节描述。

- **auto:**默认值。表示每一栏的宽度由其它CSS属性决定，例如`column-count`。

注意:

1. `column-width`有时候会无效。例如容器宽度400像素，设定的每一栏宽度是300像素，不足以分栏，此时内容填充填充表现为充分利用可用空间，最终呈现的列宽比设定的更宽。又例如容器宽度400像素，`column-width`设置为500像素，则最终分栏宽度不会超过容器宽度，比设定的500像素要小。
2. `column-width`不支持负值，也不支持百分比值。

### 2.`column-count`

理想的分栏数目

语法:column-count: integer | auto;

- **integer**

  表示分栏数目，整数值。

- **auto**

  默认值。表示分栏数目由其它CSS属性决定，例如`column-width`。

注意:

1. `column-count`与`column-width`都有可能有更高的优先级，要看具体场景。优先级计算诀窍就是统一转换`column-count`值，**哪个小就使用哪一个**。
2. `column-count`不支持负值，也不支持`0`。

### 3.`columns`

**`column-width`和`column-count`属性缩写**

```css
/* 栏目宽度 */
columns: 18em;

/* 栏目数目 */
columns: auto;
columns: 2;

/* 同时定义宽度和数目 */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;
```

### 4.`column-rule-width`

每个栏目中间分隔线的颜色

```css
/* 关键字值 */
column-rule-width: thin;
column-rule-width: medium;  /* 默认值 */
column-rule-width: thick;

/* 具体长度值 */
column-rule-width: 1px;
column-rule-width: 2.5em;
```

`column-rule-width`支持三个关键字属性值，分别是`thin`，`medium`（默认值）和`thick`，对应的具体尺寸大小如下：

1. **thin**：薄薄的，等同于`1px`；
2. **medium**（默认值）：薄厚均匀，等同于`3px`；
3. **thick**：厚厚的，等同于`4px`；

不知大家有没有想过这么一个问题：为什么默认宽度大小是`medium`，也就是3px，明明thin（1px）宽度更常用吧？这是因为……`column-rule-style:double`至少3px才有效果！

### 5.`column-span`

某一个内容是否跨多栏显示

语法:

```css
column-span: none;/*表示不横跨多栏，默认值。*/
column-span: all;/*表示横跨所有垂直列。*/
```

​实际开发的时候，非指定某个元素`column-span:all`，没有文本内容，就一个高度，或者加个水平边框，就可以将文章内容进一步上下分栏。于是，一篇文章的内容，就如报纸排版一样，想要在哪里分栏就随心所欲了。
当然，插入通栏广告也可以使用该属性。

### 6.`column-fill`

当内容分栏的时候，如何平衡每一栏填充的内容

语法:

```text
column-fill: auto;
column-fill: balance;
column-fill: balance-all;(可忽略)
```

**auto**
按顺序填充每一列。内容只占用它需要的空间。

**balance**
默认值。尽可能在列之间平衡内容。在分隔断开的上下文中，只有最后一个片段是平衡的。举例来说就是有多个`<p>`元素，正好最后一个`<p>`换行了，那这个`<p>`元素的内容前后等分，保持平衡。这就会造成最后一栏内容较少的情况。

**balance-all**（可忽略）
尽可能在列之间平衡内容。在分隔断开的上下文中，所有片段都是平衡的。

### 7.`column-gap`

**每一栏之间的那个空白间隙大小**
语法:

```css
column-gap: normal | <length-percentage>;
```

具体:

```css
/* 关键字值 */
column-gap: normal;

/* 长度值 */
column-gap: 3px;
column-gap: 3em;

/* 百分比值 */
column-gap: 3%;
```

其中：

- **normal**

  默认值。在多栏布局中为`1em`，在其它类型的布局中为`0`。

- **length**

  具体的长度值。不支持负数。

- **percentage**

  百分比值。和`column-width`不同，`column-gap`支持百分比值。同样，不能是负数

## 间接属性

​每个可能的断点（换句话说，每个元素边界）受三个属性的影响：前一个元素的`break-after`值，下一个元素的`break-before`值，以及包含元素的`break-inside`值。

​以上三个属性可以控制分栏布局中当前元素前后是否允许分栏。

### 1.break-after

`break-after`这个CSS属性定义页面，列或区域中断在生成的框之后应该如何表现。如果没有生成框，则忽略该属性。

`break-after`支持属性很多，但大多浏览器不支持，我们目前只要关注下面两个属性值就好了：

```css
break-after: auto;
break-after: avoid;
```

其中：

- **auto**

  允许但不强制在主框之后插入任何中断（page，column或region布局下）。

- **avoid**

  避免在主体框后插入任何分隔符（page，column或region布局下）。

### 2.break-before

`break-before`这个CSS属性定义页面，列或区域中断在生成的框之前应该如何表现。如果没有生成框，则忽略该属性。

`break-before`支持属性很多，但大多浏览器不支持，我们目前只要关注下面两个属性值就好了：

```css
break-before: auto;
break-before: avoid;
```

其中：

- **auto**

  允许但不强制在主框之前插入任何中断（page，column或region布局下）。

- **avoid**

  避免在主体框前插入任何分隔符（page，column或region布局下）。

### 3.break-inside

`break-inside`这个CSS属性定义页面、列或区域发生中断时候的元素该如何表现。如果没有中断，则忽略该属性。

`break-inside`支持属性相对少一些，同样的，我们目前只要关注下面两个属性值就好了：

```css
break-inside: auto;
break-inside: avoid;
```

其中：

- **auto**

  元素可以中断。

- **avoid**

  元素不能中断。

实例:

```css
.example {
    columns: 150px;
    column-gap: 2em;  
}
.example li {
    background: white;
    padding: 1em;
    margin: 0 0 1.3em;
    break-inside: avoid;
}
```

## 特殊布局应用

`CSS3 columns`多栏布局可以实现水平翻书阅读效果。

注意点:

- 标签默认样式上下有`1em`的`margin`间距,最后一栏会被`margin-bottom`占据

- column布局高度也是重要限制

  - ```text
    上面几个column-count示意都是定了个宽度600px，高度是默认的auto，因此，分栏的表现都很乖巧，反正高度是无限的，无论你设置多少栏，我都可以通过调整高度来实现。

    但是，如果我们高度也设定了固定的值，例如高度60px，则此时很多有意思的事情就会发生了。

    如果说仅仅只是指定了column-count，至少在容器元素的可视尺寸范围内，还是设定的分栏数目，例如column-count:3，虽然视觉上远不止3栏，但是容器可视尺寸范围就是3栏
    ```

- column-width会让column-count打酱油

  - ```text
    .col4 {
        width: 600px;
        column-count: 4;
        column-width: 200px;
    }
    显然这里有矛盾之处，每栏宽度200px，总共要4栏，就算不考虑每栏之间的间隙，也至少需要800px的宽度，但是，我们容器设定的宽度只有600px，怎么办呢？

    那即是column-count忽略无效打酱油，不要觉得不合理，也不要抱不平说为什么牺牲的是column-count，而不是其他属性？那是因为column-count天生注定就是要牺牲的命，因为其语义解释就是“最理想的分栏数目”，所谓最理想，就是你该牺牲的时候就要牺牲。

    实际上这里最终的每栏每列宽度表现并不是200px，如果我没算错的话，在没有样式重置的情况下，应该是292px。
    ```

- 宽同时限制可以实现完美分页

  - ```css
    .example {
        height: 120px;
        width: 100px;
        column-width: 100px;
    }
    ```

  - ```text
    此时就形成了一个永远只会显示一页宽度的视窗，然后下面的事情就简单了，我们通过JS一些一些touch相关的事件，控制我们的.example元素translateX位移，就可以实现一开始展示的水平滑屏浏览小说内容的效果了。
    ```
