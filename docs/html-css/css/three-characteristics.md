# `CSS`三大特性

`CSS`的三大特性

- 继承性
  - 后代元素会继承祖先元素的某些属性
    - 可以继承的属性:`color,font-xxx,text-xxx,line-xxx`
    - 不能继承:`background-color,盒模型相关的`
- 层叠性
- 优先级

多个选择器同时选中一个元素, 最后总有一个会起作用, 这其实就是一种层叠性

优先级决定了谁胜出.

继承性代码案例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>0继承性</title>
    <style>
        .box div{
            color: green;
        }
    </style>
</head>
<body>
    <div class="box">
        <div>
            文本
            <p>abc</p>
        </div>
    </div>
    <p>aaaa</p>
</body>
</html>
```
