# `Grid`布局

本文转载自:<https://www.zhangxinxu.com/wordpress/?p=814

​给`<div>`这类块状元素元素设置`display:grid`或者给`<span>`这类内联元素设置`display:inline-grid`，Grid布局即创建

```css
div {
    display: grid;
}
/*此时该div就是“grid容器”，其子元素称为“grid子项”。*/
```

## 1.作用在`grid`容器上的CSS属性

```css
grid-template-columns   /*X方向分配的宽度间隔*/
grid-template-rows      /*Y方向分配的宽度间隔*/
grid-template-areas
grid-template
grid-column-gap
grid-row-gap
grid-gap
justify-items
align-items
place-items
justify-content
align-content
place-content
grid-auto-columns
grid-auto-rows
grid-auto-flow
grid
```

### 1.1`columns`&`rows`

例子:

```css
.container {
    grid-template-columns: 80px auto 100px;
    grid-template-rows: 25% 100px auto 60px;
}
/*
grid-template-columns后面3个值，表示分为了3列，从左往右每列的尺寸分别是80px，auto（自动）和100px；
grid-template-rows属性值含4个值，表示分为了4行，从上往下每行的高度分别是25%，100px，auto（自动）和60px。
*/
```

```css
/*
可以给网格分隔线进行命名，语法是使用[]包裹我们自定义的命名,可以是中文
给Grid布局中的分隔线命名，为的就是可以更好地对区域进行描述。如果我们没有描述某片区域的的需求，自然也不需要命名了。
*/
.container {
    grid-template-columns: [第一根纵线] 80px [纵线2] auto [纵线3] 100px [最后的结束线];
    grid-template-rows: [第一行开始] 25% [第一行结束] 100px [行3] auto [行4] 60px [行末];
}

/*取名方式一*/
.container {
    grid-template-columns: [第一根纵线] 80px [第1根纵线结束 第2根纵线开始] 100px [最后的结束线];
}

/*repeat语法*/
/*例如，基于40px创建栅格，要是我们布局宽度960px，岂不是要写24次40px*/
.container {
    grid-template-columns: repeat(24, 40px [col-start]);
}
/*等同于:*/
.container {
    grid-template-columns: 40px [col-start], 40px [col-start], /* ...省略20个...*/, 40px [col-start], 40px [col-start];
}
```

**`fr`单位**

`fr`是单词fraction的缩写，表示分数。

```css
/*1:1:1，网格宽度三等分*/
.container {
    grid-template-columns: 1fr 1fr 1fr;
}

/*4列，后面3列宽度是grid容器宽度减去200像素后的1/3大小*/
.container {
    grid-template-columns: 200px 1fr 1fr 1fr;
}

/*当有设置fr尺寸的时候，auto的尺寸表现为“包裹”，为内容宽度。如果没有设置fr尺寸的网格，则表现为拉伸*/
.container {
    grid-template-columns: auto 1fr 1fr 1fr;
}

/*fr数值之和小于1时*/
/*这里计算就相对复杂些，首先，由于第一个网格尺寸设置为auto，因此fr计算需要的剩余空间尺寸是grid容器的宽度减去“宽auto”这几个字符的宽度。所以，后面3个0.25fr元素的宽度是：(容器宽度 - “宽auto”字符宽度) * 0.25。然后剩余尺寸就是第一个网格宽度。*/
.container {
    grid-template-columns: auto 0.25fr .25fr .25fr;
}
```

### 1.2`areas`

语法:

```css
.container {
  grid-template-areas:
    "<grid-area-name> | . | none | ..."
    "...";
}
/*
其中：
grid-area-name
    对应网格区域的名称。
.
    表示空的网格单元格。
none
    没有定义网格区域。
*/
```

例子:

```html
<div class="container">
    <div class="putao"></div>
    <div class="longxia"></div>
    <div class="yangyu"></div>
    <div class="xigua"></div>
</div>
<style>
.container {
    display: grid;
    width: 400px;
    height: 400px;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "葡萄 葡萄 葡萄"
        "龙虾 养鱼 养鱼"
        "龙虾 养鱼 养鱼"
        "西瓜 西瓜 西瓜";
}
.putao {
    grid-area: 葡萄;
}
.longxia {
    grid-area: 龙虾;
}
.yangyu {
    grid-area: 养鱼;
}
.xigua {
    grid-area: 西瓜;
}
</style>
```

**注意：**如果我们给网格区域命了名，但是没有给网格线命名，则会自动根据网格区域名称生成网格线名称，规则是区域名称后面加`-start`和`-end`。例如，某网格区域名称是“葡萄”，则左侧column线名称就是“葡萄-start”，左侧column线名称就是“葡萄-end”。

以及，我们的网格区域一定要形成规整的矩形区域，什么L形，凹的或凸的形状都是不支持的，会认为是无效的属性值。

### 1.3属性缩写

`grid-template`是`grid-template-rows`，`grid-template-columns`和`grid-template-areas`属性的缩写。

语法:

```css
.container {
    grid-template: none;
}
.container {
    grid-template: <grid-template-rows> / <grid-template-columns>;
}
/*
其中none表示将3个CSS属性都设置为初始值。
*/
```

例子:

```css
/*3.1.2改写为*/
.container {
    display: grid;
    width: 400px;
    height: 400px;
    grid-template:
        "葡萄 葡萄 葡萄" 1fr
        "龙虾 养鱼 养鱼" 1fr
        "龙虾 养鱼 养鱼" 1fr
        "西瓜 西瓜 西瓜" 1fr
        /1fr 1fr 1fr;
}
```

### 1.4网格间隙

`grid-column-gap`和`grid-row-gap`

语法:

```css
.container {
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}
/*
<line-size>网格间的间隙尺寸
*/
```

例子:

```css
.container {
    display:grid;
    width: 200px;
    height: 50px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
}
```

**属性缩写:**

```css
/*CSS grid-gap属性是grid-column-gap和grid-row-gap属性的缩写*/
.container {
    grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

改写上面的例子:

```css
.container {
    display:grid;
    width: 200px;
    height: 50px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-gap: 15px 10px;/*横竖都是死*/
}
```

### 1.5 `justify-items`

指定了网格元素的水平呈现方式，是水平拉伸显示，还是左中右对齐，语法如下：

```css
.container {
    justify-items: stretch | start | end | center;
}
/*
stretch
    默认值，拉伸。表现为水平填充。
start
    表现为网格水平尺寸收缩为内容大小，同时沿着网格线左侧对齐显示（假设文档流方向没有变）。
end
    表现为网格水平尺寸收缩为内容大小，同时沿着网格线右侧对齐显示（假设文档流方向没有变）。
center
    表现为网格水平尺寸收缩为内容大小，同时在当前网格区域内部水平居中对齐显示（假设文档流方向没有变）。
*/
```



### 3.1.6 `align-items`

指定了网格元素的垂直呈现方式，是垂直拉伸显示，还是上中下对齐，语法如下：

```css
.container {
    align-items: stretch | start | end | center;
}
/*
其中（假设文档流方向为网页默认）：
stretch
    默认值，拉伸。表现为垂直填充。
start
    表现为网格垂直尺寸收缩为内容大小，同时沿着上网格线对齐显示。
end
    表现为网格垂直尺寸收缩为内容大小，同时沿着下网格线对齐显示。
center
    表现为网格垂直尺寸收缩为内容大小，同时在当前网格区域内部垂直居中对齐显示。
*/
```

### 1.7`place-items`

`place-items`可以让`align-items`和`justify-items`属性写在单个声明中。语法如下：

```css
.container {
    place-items: <align-items> / <justify-items>;
}
/*
这里顺序是align-items在前，justify-items在后。首字母a,j，a,j，a,j，
如果有兼容性顾虑，建议还是分开书写。
*/
```

### 1.8`justify-content`

此属性指定了网格元素的水平分布方式。此属性仅在网格总宽度小于grid容器宽度时候有效果。例如，我们网格设定的都是固定的宽度值，结果还有剩余空间。

```css
.container {
    display: grid;
    width: 300px;
    grid-template: 100px 100px/100px 100px;
}
/*此时，水平和垂直方向都有100px的剩余*/
```

语法:

```css
justify-content: stretch | start | end | center | space-between | space-around | space-evenly;
/*
stretch:默认值。拉伸，宽度填满grid容器，拉伸效果需要网格目标尺寸设为auto时候才有效，如果定死了宽度，则无法拉伸。

start:默认值。逻辑CSS属性值，与文档流方向相关。默认表现为左对齐。

end:逻辑CSS属性值，与文档流方向相关。默认表现为右对齐。

cente:表现为居中对齐。

space-between:表现为两端对齐。between是中间的意思，意思是多余的空白间距只在元素中间区域分配。

space-around:around是环绕的意思，意思是每个flex子项两侧都环绕互不干扰的等宽的空白间距，最终视觉上边缘两侧的空白只有中间空白宽度一半。

space-evenly:evenly是匀称、平等的意思。也就是视觉上，每个flex子项两侧空白间距完全相等。
*/
```

### 1.9`align-content`

`align-content`可以看成和`justify-content`是相似且对立的属性，`justify-content`指明水平方向grid子项的分布方式，而`align-content`则是指明垂直方向每一行grid元素的分布方式。如果所有grid子项只有一行，则`align-content`属性是没有任何效果的。

语法:

```css
align-content: stretch | start | end | center | space-between | space-around | space-evenly;

/*
stretch:默认值。每一行flex子元素都等比例拉伸。例如，如果共两行flex子元素，则每一行拉伸高度是50%。

start:默认值。逻辑CSS属性值，与文档流方向相关。默认表现为顶部堆砌。

end:逻辑CSS属性值，与文档流方向相关。默认表现为底部堆放。

cente:表现为整体垂直居中对齐。

space-between:表现为上下两行两端对齐。剩下每一行元素等分剩余空间。

space-around:每一行元素上下都享有独立不重叠的空白空间。

space-evenly:每一行元素都完全上下等分。
*/
```

以上`justify-content`和`align-content`中的grid布局相关CSS都是:

```css
.container {
    grid-template: auto auto/auto auto;
}
```



### 1.9`place-content`

`place-content`可以让`align-content`和`justify-content`属性写在一个CSS声明中，也就是俗称的缩写。语法如下：

```css
.container {
    place-items: <align-content> / <justify-content>;
}
/*这里顺序是align-content在前，justify-content在后。*/
```

### 1.10`grid-auto-columns`和`grid-auto-rows`

​指定任何自动生成的网格轨道（也称为隐式网格轨道）的大小。 当网格项目多于网格中的单元格或网格项目放置在显式网格之外时，将创建隐式轨道。

语法:

```css
.container {
    grid-auto-columns: <track-size> ...;
    grid-auto-rows: <track-size> ...;
}
/*
<track-size>可以是长度值，百分比值，以及fr单位（网格剩余空间比例单位）。
*/
```

例子:

```css
.container {
    display: grid;
    width: 150px;
    grid-template-columns: 60px 60px;
    grid-template-rows: 30px 90px;
    grid-auto-columns: 60px;
}
.item-a {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
.item-b {
    /* 容器水平只有2个格子，但这里设定的是第3个，隐式网格创建 */
    grid-column: 3 / 4;
    grid-row: 2 / 3; 
    background-color: rgba(255,255,0, .5);
}
```

### 3.1.11`grid-auto-flow`

​`grid-auto-flow`属性控制没有明确指定位置的grid子项的放置方式。比方说定义了一个5*2的10格子，共有5个元素，其中2个元素指定了放在哪个格子里，还有3个则自生自灭排列。此时，这3个元素如何排列就是由`grid-auto-flow`属性控制的。

语法:

```css
grid-auto-flow: row | column | row dense | column dense
/*
row:默认值。没有指定位置的网格依次水平排列优先。
column:没有指定位置的网格依次垂直排列优先。
dense:这个英文是稠密的意思。如果有设置，则表示自动排列启用“密集”打包算法。如果稍后出现的网格比较小，则尝试看看前面有没有合适的地方放置，使网格尽可能稠密紧凑。此属性值仅仅改变视觉顺序，会导致DOM属性和实际呈现顺序不符合，这对于可访问性是不友好的，建议谨慎使用。
*/
```

### 1.12`grid`属性缩写

​grid是下面所有这些CSS属性的缩写集合，`grid-template-rows`，`grid-template-columns`，`grid-template-areas`，`grid-auto-rows`，`grid-auto-columns`和`grid-auto-flow`

语法:

```css
grid: none/*none表示设置所有的子属性为初始值。*/
```

```css
grid: <grid-template>/*和grid-template用法一致。*/

/*例如：*/
.container {
    grid: 100px 300px / 3fr 1fr;
}
/*等同于*/
.container {
    grid-template-rows: 100px 300px;
    grid-template-columns: 3fr 1fr;
}
```

```css
grid: <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>? 
/*问号?表示0或1，可有可无的意思。也就是dense关键字和grid-auto-columns值都可以省略。*/
```

## 2.作用在`item`上的CSS属性

```css
grid-column-start
grid-column-end
grid-row-start
grid-row-end
grid-column
grid-row
grid-area
justify-self
align-self
place-self
```
