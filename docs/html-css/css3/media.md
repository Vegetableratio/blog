# 响应式布局

三大要素:

流式布局(百分比)+弹性布局  and   not   only   ,

媒体查询:`@media`

丰富媒体查询`screen`  `print`  `all`

```css
@media screen{
    div{
        color: pink;
    }
}
@media print{
    div{
        color: red;
    }
}
```

```css
@media screen and (max-width:800px){
}
/*max-width上限  min-width下限  width*/
```
