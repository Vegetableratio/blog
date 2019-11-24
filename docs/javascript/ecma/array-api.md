# 数组的常用方法

## 数组转成字符串

1. `arr.toString()`
   - 把数组中每个元素用`,`给连起来
   - `undefined`和`null`会被变成`""`长度为0的字符串
2. `arr.join("连接符")`

## 栈方法(在数组末尾删除和添加元素)

栈是计算机中一种数据接口.  特点: 先进后出(first in last out  FILO)

js中没有栈这种数据结构, 但是js使用数组给我们模拟出来了一种栈.

```JavaScript
arr.push(ele, ele1, ....) // 先数组的尾部添加元素 返回长度
arr.pop() // 删除数组的最后一个元素 返回删除的元素
```

## 数组的头部添加和删除

```JavaScript
arr.unshift(ele1, ele2, ele3,....)  // 向数组的头部添加元素
arr.shift(); // 删除头部的元素
```

## `splice()`任意位置的添加,删除和替换

`splice()`

- 参数1:从数组的哪个位置开始操作
- 参数2:要删除的元素的个数,如果不需要删除元素,那就是`0`
- 参数3以后为要添加的元素
- 返回值:是由删除的元素组成的新数组
- `...a`展开数组`a`

---

## 数组的倒置

```javascript
arr.reverse()
```

## 数组中查找元素

`indexOf(ele)`

1. `arr.indexOf(ele)`

   返回值: 元素在数组中**第一次**出现的索引的位置

   如果不存在, 则返回`-1`

2. `arr.indexOf(ele, fromIndex)`

   参数2: 开始查找的位置

3. `arr.lastIndexOf(ele)`

   从后向前找

## 数组的拼接

```JavaScript
var arr1 = [10, 20, 30];
var arr2 = [100, 200, 300];
// 把arr1和arr2, 数组中的元素合并成一个新的数组, 新的数组包括了所有的元素
// arr1和arr2没有任何的改变
var arr = arr1.concat(arr2);
console.log(arr);
console.log(arr1, arr2);
```

## 截取数组`slice()`

`slice()`  用来截取数组, 不会对原数组造成损伤.

1. 参数1: 开始截取的位置 可选. 如果不提供, 表示 `0`
2. 参数2: 表示截取到哪个位置. 可选. 如果没有提供, 则一直截取的末尾.
3. 一般都是: 前面包括, 后面不包括
4. 参数2 要大于参数1, 否则截取不到元素.
5. 参数也可是负值, `-3`就表示倒数第三个

## `sort()`排序方法

```javascript
var arr = [2, 10, 5, 8, 9, 22, 13, 4, 6];
/*arr.sort(function (a, b){
    if(a > b){
        return -1;  // a 放前面  b后面
    }else if(a == b){
        return 0;
    }else{
        return 1;
    }
})*/
arr.sort(function (a,b){
    return a - b;
})
arr.sort()
console.log(arr);
```

## 数组中的高级函数

`map()`

语法:`array.map(callback[, thisArg])`

**callback函数的执行规则**
 参数：自动传入三个参数

> currentValue（当前被传递的元素）；
>
> index（当前被传递的元素的索引）；
>
> array（调用map方法的数组）

callback处理的数组范围：

> 1. 只处理有值的索引。没有被赋值、被delete删除的索引不会被处理。
> 2. 在处理过程中新增的元素不会被callback处理。
> 3. 在处理过程中被删除的元素不会被callback处理。
> 4. 在处理过程中被改变的元素，会以callback执行到该元素时的值被处理。

调用数组中的每一个对象并返回一个数组

```javascript
var arr = [10, 20, 30, 1, 3, 6];
var arr1 = arr.map(function (a){
    /*if(a % 2 == 0){
        a *= a;
    }*/
    return a;
})
console.log(arr1);
```

`filter()`

- 过滤的作用

```javascript
var arr = [10, 20, 30, 1, 3, 6];
var arr1 = arr.filter(function (a, i, self){
    return a % 2 == 1 && i % 2 == 1;
})
console.log(arr1);
```

`reduce()`

- 归纳

```javascript
var arr = [10, 20, 30, 1, 3, 6];
var r = arr.reduce(function (last, ele){
    return last + ele * ele;
},0);
/*var r = arr.reduce((last, ele) => last + ele, 0)*/
console.log(r);
```

## 数组的类型测试

1.`instanceof`

2.`Array.isArray(想测试的对象)`

静态方法和实例方法

- 电仪在原型上的方法或者创建在对象上的方法.实例方法
  - 直接定义在构造函数上的方法,静态方法.

## 数组的排序

1. 冒泡

2. 选择

3. 插入

4. 归并

5. 希尔

6. 快排
