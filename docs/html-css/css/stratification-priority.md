# 层叠性和优先级

## 重要性

```css
color: red !important; /*不到万不得已不要使用*/
```

## 选择器的特殊性

选择器由四个部分决定它们的优先级:

- 1.内联样式
- 2.id选择器
- 3.类,伪类,属性选择器的个数
- 4.元素,伪元素选择器的个数

注意:

- `>,~,+`不影响特殊性
- `*`的特殊性是0(只是帮助选中,但是优先级贡献度为0

## 源码的顺序

如果特殊性一样, 看源码的顺序.  源码在后的, 优先级胜出

`CSS`来源

1. 作者
2. 用户
3. 用户代理(浏览器)

真正的优先级:(优先级是依次降低)

1. 用户重要属性
2. 作者的重要属性
3. 作者的普通属性
4. 用户的普通属性
5. 浏览器的默认属性

层叠性的一些细节

继承根本就没有资格进行比较.
