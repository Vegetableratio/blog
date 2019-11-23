# `2D`变换`transform`

CSS属性:`transform`

```css
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0); /**/
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);
```

不会对盒模型有影响,不会对其他元素造成影响

移动位置相对于没变换前的位置

- 平移`translate(X,Y)`
  - `translateX()`
  - `tanslateY()`
- 旋转`rotate(45deg)`
  - `rotateZ()`于上完全等价,一般用Z,开启3D加速
- 缩放`scale(1,1)`   默认1倍;**值为负反转,倒影效果**
  - `scaleX()`
  - `scaleY()`
  - 缩小放大不会影响盒模型
- 扭曲`skew(10deg,45deg)`
  - `skewX()`   以Y轴偏向X轴方向扭曲
  - `skewY()`   以X轴偏向Y轴方向扭曲

**任何变换的默认变换原点:元素的几何中心**
`transform-origin`  指定元素的变化原点,具体的值或百分比(参照自己的值)
默认值:50% (几何中心)
