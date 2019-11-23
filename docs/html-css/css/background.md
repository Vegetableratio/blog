# 背景

任何元素都可以有背景

1. `background-color`

2. `background-img`

   - 值是一个图片的`url`地址.
   - 背景图片没有的地方, 才会有背景颜色.

3. `background-repeat`

   - 设置背景的图片在元素中的重复的模式.

4. `background-position`

   - 表示背景图片在`x,y`方向的偏移量.
   - 如果只写一个值: 表示`x`的偏移量`y`方向会居中.
   - `left, top, right, bottom, center`

5. 简写属性:

   ```css
   background : 背景色 图片的url 是否重复 位置;
   ```

```css
background-image: url("a.jpg");/*背景图片*/
background-color: pink;/*背景颜色*/
background-repeat: no-repeat;/*重复*/
background-position:  center bottom;/*图片显示位置*/
background: rgba(0, 0,0, 0.1) url(a.jpg) repeat no-repeat center;/*以上值可以简写*/
backgroung-attachment:fixed;/*背景图片永远参考视窗*/
```

雪碧图:用于加载几张小图合成的大图,加快访问速度

## 颜色值

三原色:`red, green, blue`

1. 十六进制法

```css
color:#ffffff;
```

2.`rgb`:十进制的值

```css
color : rgb(100, 200, 200);
```

3.`rgba`十进制带透明度的颜色 (alpha通道)

```css
color : rgba(100, 200, 200, 0.3);

a:alpha 透明度
0-1 0表示完全透明, 1表示完全不透明
```

4.英文单词

   ```css
   red, blue, green, yellow...
   ```
