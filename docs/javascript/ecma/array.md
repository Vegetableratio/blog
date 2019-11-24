# 数组的概念

用来存储大量的类似的数据.

## 如何创建数组

1. 数组字面量的形式来创建数组

   ```JavaScript
   var arr = [10, 20, "a", true, 30];
   console.log(arr);
   ```

2. 可以通过构造函数来创建

   ```JavaScript
   var arr = new Array(10, 20, 30);
   console.log(arr.length);
   console.log(arr);
   ```

   - 使用构造函数创建数组, 如果只传入一个参数并且这个参数是一个整数, 则这个整数表示数组的长度.这个时候可以使用`Array.of()`

   ```javascript
   var arr = Array.of(10, 20)
   ```

## 创建数组总结

1. 以后创建数组对象, 尽量用 `[]`字面量的形式

2. 同一个数组, 可以存储任意的数据类型. 但是, 在实际使用的时候, 尽量一个数组中元素的类型只有一种.

3. 数组中的元素可以重复.

4. 数组的属性:`length`表示数组中元素的个数

5. 数组的元素的在数组中的顺序是一定的.

   数组中的元素: 有序可重复

6. `js`的数组是动态数组: 长度可以变化.

---

## 访问数组中的元素

数组中的每个元素都有一个序号, 我们称为 索引(`index`), 下标

索引的是基于`0` 开始计算的, 最后一个元素的下标:`arr.length-1`

```javascript
arr[0]
```

- 索引超出正常的范围之后, 并不会抛出异常, 而是返回一个`undefined`

1. `arr[0]`
2. `arr[0] = 10`
3. `arr.length = 100`

## 修改数组中的元素

```JavaScript
arr[0] = 100
```

- 如果索引不存在, 则会在这个索引的位置添加一个元素, 这个元素就会成为最后一个元素.
- `arr[arr.length] = 10`在数组的尾部添加元素
- 甚至可以直接更改`arr.length`的值.

## 遍历数组中的元素

```JavaScript
/*普通的for循环*/
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

```JavaScript
// for...in遍历, 遍历出来是数组的索引  遍历数组一般不适用for...in..
for(var i in arr){
    console.log(arr[i]);
}
```

```javascript
// for...of, 是es6新增的一种遍历方式, 他遍历出来的是数组中的具体的元素
// 通过for...of只能读取到数组中元素, 不能修改数组中的元素.
for(var a of arr){
    console.log(a);
}
```

```JavaScript
arr.forEach(function (ele, index, self){
    console.log(ele);
})
```

`forEach`实现思路:

```JavaScript
<script>
    Array.prototype.myForEach = function (fun) {
        for (var i = 0; i < this.length; i++) {
            fun(this[i], i, this);
        }
    };

    var arr = [20, 30, 10, 50, 45, 12, 30, 69, 99, 52];

    arr.myForEach(function (ele, index, self) {
        console.log("元素:" + ele + ",索引:" + index + ",数组:" + self);
    });
</script>
```
