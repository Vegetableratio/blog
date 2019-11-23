# `CSS`

`CSS`:`Cascading Style Sheets`,层叠样式表

## 引入`CSS`的方法

- 行内样式(内联样式)

  给需要css的标签添加一个`style`属性, 这个属性的值写`css`属性就可以了.

  只对添加`style`的起作用.

  主要是将来 js 会通过这种方式来给元素添加样式.

  ```html
  <p style="color:red;font-size:40px;">锄禾日当午，汗滴禾下土</p>
  ```

- 内部样式

  在`html`文件中添加`style`标签,  这样的样式就是内部样式

  本质来说, `style`标签可以添加网页中的任何的位置, 但是, 作为国际惯例, 都写在的`head`标签中.

```html
<style type="text/css">
    p{
        color:red;
        font-size:40px;
    }
</style>
```

- 外部样式

  把样式写在单独的文件中, 然后在html中通过链接的方式引入.

   ```html
  <link rel="stylesheet" type="text/css" href="css文件的地址">
   ```

## 语法格式

```css
/*选择器*/
p{
    color:red;/*属性名:属性值;*/
    /*css申明*/
}
/*多个css声明形成css声明块,用大括弧括起来*/
/*选择器+声明块被称为规则集,简称规则*/
```
