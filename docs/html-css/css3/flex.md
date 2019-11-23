# `flex`布局

让父容器控制子元素

主轴(`main axis`)起点、方向和长度

侧轴(`cross axis`)由主轴方向确定,与主轴方向垂直

**无论作用在flex容器上，还是作用在flex子项，都是控制的flex子项的呈现，只是前者控制的是整体，后者控制的是个体。**

## 父容器(`flex container`)上的属性

```css
flex-direction/*主轴方向*/
flex-wrap/*从轴方向*/
flex-flow/*以上属性缩写*/
justify-content/*水平方向子项的对齐和分布方式*/
align-items/*flex子项们相对于flex容器在垂直方向上的对齐方式，一起顶部对齐、底部对齐、拉伸对齐*/
align-content/**/
```

`display : flex/inline-flex`将元素渲染成为一个块级容器/行内伸缩容器,主轴默认水平向右

`flex-direction` 设置**主轴**方向,

- `row`默认水平向右
- `row-reverse`水平向左
- `column`从上往下
- `column-reverse`从下往上

`flex-wrap` 用来控制子项整体单行显示还是换行显示

- `nowrap`  默认值，表示单行显示，不换行
- `wrap`  宽度不足换行显示
- `wrap-reverse` 宽度不足换行显示，但是是从下往上开始，也就是原本换行在下面的子项现在跑到上面。

**以上两项属性简写**:`flex-flow`

`justify-content:`  让弹性容器去控制弹性项目在弹性容器中**沿着主轴方向**的排列

​CSS `text-align`有个属性值为`justify`，可实现两端对齐，所以，当我们想要控制flex元素的水平对齐方式的时候，记住`justify`这个单词，`justify-content`属性也就记住了。`justify-content`可以看成是`text-align`的远房亲戚，不过前者控制flex元素的水平对齐外加分布，后者控制内联元素的水平对齐。

- `left`或`flex-start`  默认值,主轴起点方向对齐//逻辑CSS属性值，与文档流方向相关。默认表现为左对齐。
- `flex-end`  主轴终点方向对齐//逻辑CSS属性值，与文档流方向相关。默认表现为右对齐。
- `center`  表现为居中对齐
- `space-around`  空白围绕在元素两边
- `space-between`  两端对齐
- `space-evenly`  空白均匀围绕在元素两边

`align-items:`  flex子项们相对于flex容器在垂直方向上的对齐方式

- `stretch`  默认值。将元素在侧轴方向的的尺寸拉升,填满容器

- `flex-start`  侧轴方向起点对齐//逻辑CSS属性值，与文档流方向相关。默认表现为容器顶部对齐。
- `flex-end`  侧轴方向终点对齐//逻辑CSS属性值，与文档流方向相关。默认表现为容器底部对齐。
- `center`  表现为垂直居中对齐。
- `baseline`  文本的基线对齐//所有flex子项都相对于flex容器的基线对齐

`align-content:`  设置`items`**侧轴方向**有多个元素的情况,如果侧轴方向只有一个则无效

- `stretch` 默认值。每一行flex子元素都等比例拉伸。

- `flex-start`  逻辑CSS属性值，与文档流方向相关。默认表现为顶部堆砌。
- `flex-end`  逻辑CSS属性值，与文档流方向相关。默认表现为底部堆放。
- `center`  表现为整体垂直居中对齐。
- `space-around` 每一行元素上下都享有独立不重叠的空白空间。
- `space-between` 表现为上下两行两端对齐。剩下每一行元素等分剩余空间。
- `space-evenly` 每一行元素都完全上下等分。

## 用于`item`的属性

```css
order/*改变某一个flex子项的排序位置*/
flex-grow/*扩展所侵占的空间就是除去元素外的剩余的空白间隙。*/
flex-shrink/*空间不足时候如何收缩腾出空间*/
flex-basis/*在分配剩余空间之前元素的默认大小*/
flex/*以上三个属性简写*/
align-self/**/
```

`order:<integer>`  整数值，默认值是 0。更改`items`的显示顺序值越大越靠后

`flex-grow:<number>`   数值，可以是小数，不支持负数，默认值是 0。让`items`占据剩下的`space`的份数

`flex-shrink:<number>`   当主轴方向空间不够的时候压缩情况

- 0:不收缩,保持原始的`fit-content`宽度
- 1:默认值,默认所有的flex子项都会收缩
- 大于等于1:收缩的比例;默认1

`flex-basis:<length> | auto;`  在分配剩余空间之前元素的默认大小

- 默认值是`auto`，就是自动。有设置`width`则占据空间就是`width`，没有设置就按内容宽度来
- 如果同时设置`width`和`flex-basis`，就渲染表现来看，会忽略`width`。flex顾名思义就是弹性的意思，因此，实际上不建议对flex子项使用`width`属性，因为不够弹性。

`flex`属性是`flex-grow`，`flex-shrink`和`flex-basis`的缩写。默认值:`0 1 auto`

经过一番测试，我们可以得到如下结论：

- `flex`默认值等同于`flex:0 1 auto`；
- `flex:none`等同于`flex:0 0 auto`；
- `flex:auto`等同于`flex:1 1 auto`；

`align-self:` 语法同`align-items`

## 总结

- 在Flex布局中，flex子元素的设置`float`，`clear`以及`vertical-align`属性都是没有用的。
- Flexbox布局最适合应用程序的组件和小规模布局（一维布局），而Grid布局则适用于更大规模的布局（二维布局）

## 元素居中方式

1.元素在父容器中居中

- `Normal flow`中`margin:0 auto`

- ```css
  div{
      left: 0 ;
      right: 0 ;
      top: 0 ;
      bottom: 0;
      margin: auto
  }
  ```

- ```css
  div{
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
  }
  ```

- ```css
  div{
        isplay:flex;
        justify-content:center;
        align-items:center;
    }
  ```

- 父容器`display:flex`; 子容器:`margin:auto;`

2.文本居中:

- `text-align:center`  水平
- `line-feight:height`  单行

多行文本居中:

- 把文本放入容器中,然后容器居中

- ```css
  div{
        display:flex;
        justify-content:center;
        align-items:center;
    }
  ```
