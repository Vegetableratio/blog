# 变量以及变量的声明、赋值

```javascript
var myFirstDay;  // 变量的声明
myFirstDay = 20;
```

## 变量的声明提前

在js声明变量时,会把变量**声明提前**到脚本的最前方(`script`中的前方)

注意:只有变量声明会提前,赋值运算并不会

**声明多个变量**
多个变量之间用`,`隔开

```javascript
var(a, b ,c );
```

 案例分析:

```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
var a;
console.log(a); // 10
```
