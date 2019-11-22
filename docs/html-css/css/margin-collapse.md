# 六.margin塌陷

***结论***:

- 在文档流(`normal flow`)中垂直方向的`margin`才会有可能发生塌陷. 水平方向绝对不会.
- 如果两个`margin`接触到一起, 就会出现塌陷.

---



1. `margin`塌陷之后, 最终的`margin`会成为最大的一个.`margin`值都是正值.

2. 如果`margin`有正有负, 塌陷之后, "最大的正数 + 绝对值最大的负数"

3. 如果全部是负数: 塌陷之后, 是绝对值最大的那个负数.

    

塌陷发生在那些元素之间:

1. 子元素与父容器之间
2. 兄弟元素之间
3. 自己的上下margin也会塌陷



三角形案例代码:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>三角形</title>
	<style>
		div{
			width: 0;
			height: 0;
			border: 40px solid black;
			border-color:transparent transparent pink transparent
		}
        /*transparent 透明*/
	</style>
</head>
<body>
	<div></div>
</body>
</html>
```