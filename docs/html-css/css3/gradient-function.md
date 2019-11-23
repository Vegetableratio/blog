# 渐变函数

渐变不是一种颜色, 而是一种图片, 没有固定大小的图片, 可以完全覆盖元素背景区域.
`background:`
`background-image:`

渐变分两种:
​        1. 线性渐变
​           - `linear-gradient()`
​           - `repeating-linear-gradient()`
​        2. 径向渐变---沿着虚拟的轴从中⼼向外渐变
​           - `radial-gradient()`
​           - `repeating-radial-gradient()`

```css
div {
    width: 780px;
    height: 200px;
    border: 1px solid #000;
    margin: 100px;
    /*参数1:渐变的方向  参数2, 3, 4... 表示颜色*/
    /*background-image: linear-gradient(to left top, blue 30%, white 50%, green 60%);*/
    /*background-image: linear-gradient(10deg, blue 30%, white 50%, green 60%);*/
    /*background-image: linear-gradient(90deg, black, black 30px, white 30px, white 60px);*/
    background-image: repeating-linear-gradient(90deg, black 0, black 30px, white 30px, white 60px);
}
```

```css
div {
    width: 600px;
    height: 400px;
    border: 1px solid #000;
    margin: 100px;
    /*background-image: radial-gradient(circle closest-corner at 100px 200px, white, blue, red 100px);*/
    background-image: repeating-radial-gradient(circle closest-corner at 100px 200px, white, blue, red 100px);
}
```

倒影

`-wekit-box-reflect:below 0 linear-gradient(,)`

```css
img {
    display: block;
    width: 256px;
    height: 363px;
    -webkit-box-reflect: below 0 linear-gradient(transparent, white);
}
```
