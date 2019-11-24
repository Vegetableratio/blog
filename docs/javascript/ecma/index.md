# 引入JS文件的方式

1.在`html`页面中的任意地方添加`script`标签在标签内写入js代码.

   **注意:书写时尽量写在`body`内部的最后面.**

```html
<script type='text/javascript'>
    // Js代码
</script>
```

2.把js代码写在专门的js文件中,然后在`html`页面中引入js文件.

   **注意:在引入文件的同时,不要在`script`标签中书写js代码**

```html
<script src="文件的地址" ></script>
```
