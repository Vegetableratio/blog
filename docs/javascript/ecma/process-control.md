# 流程控制

流程控制包含:顺序,选择,循环

## `if`语句

语法规则:

```javascript
if(条件){
   //代码
}
```

```javascript
if(条件){
   //条件为true时执行
}else{
    //条件为false时执行
}

```

```javascript
if(条件1){
    // 条件1是true的执行
}else if(条件2){
    //条件2是true的执行
}else if(条件3){
    //
}

```

```javascript
if(条件1){
    // 条件1是true的执行
}else if(条件2){
    //条件2是true的执行
}else if(条件3){
    //
}else{
    //
}
//...
```

```javascript
if(条件)}{
    //...
    break;//结束if
}
```

## `switch`语句

主要用来处理一些离散值,相比`if`要差一点,使用不如`if`广泛

语法规则:

```javascript
switch(表达式){//此处表达式会得出一个固定的值
    case 值1:
        //语句
    break;
    case 值2:
        //语句
    break;
        //...
    default:
        //语句
}
```

## 循环

包含有三种:`for`循环;`while`循环;`do...while`循环

### `for`循环

语法规则:

```javascript
for(表达式1;表达式2;表达式3){
    //循环体
}
```

说明:

1. 表达式1: 一般是初始化循环控制变量. 声明一个变量并给它赋值为一个数据
2. 表达式2: 将来当做一个布尔值来用.
   - 如果是true, 就开始执行循环体的代码
   - 如果是false, 整个循环结束
3. 表达式3: 一般是对循环控制变量做变换(++, --)
4. 循环体就是我们想要做业务逻辑.

`for`循环的一些细节

1. 圆括号中的三个表达式都可以省略.

   ```javaScript
   var i = 0;
   for(  ; ;  ){


       i++;
   }
   ```

   - 表达式1和表达式3省略就不需要初始化对循环的控制变量进行操作
   - 表达式2省略, 表示永远是`true`

2. 2个`;`不能省. 如果省略是语法错误.

3. 如果循环体只有一行代码, 则大括号可以省略. **以后任何情况都不要省略大括号.**

### `while`循环

```JavaScript
while(条件){
    // 循环体
}
```

`for`和`while`他们的功能完全一样, 也可以完全的互相替换.

1. 如果循环的次数能够提前确定,  这个使用`for`更加方便一些.
2. 如果循环的次数不能提前确定,  使用`while`更加的方便.

注意:

`while`中的条件不能省略.

猜数字案例:

```javascript
while (true) {
        var n = parseInt(Math.random() * 101);
        while (true) {
            var num = +prompt("请输入一个0~100整数", n);
            if (n == num) {
                alert("恭喜你猜对啦!");
                break;
            } else if (num > n) {
                alert("猜大啦!");
            } else {
                alert("猜小啦!");
            }
        }
        var again = confirm("是否再来一局?'确定'再来一局,'取消'退出");
        if (!again) {
            break;
        }
    }
```

### `do...while...`循环

```JavaScript
do{

}while(条件);

```

将来很少使用!

至少执行一次循环体!
