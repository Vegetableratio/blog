# array

```js
let arr = [];
let arrayMethod = Object.create(Array.prototype);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
    Object.defineProperty(arrayMethod, method, {
        enumerable: true,
        configurable: true,
        value: function () {
            let args = [...arguments]
            Array.prototype[method].apply(this, args);
            console.log(`operation: ${method}`);
        }
    })
});
arr.__proto__ = arrayMethod;
arr.push(1); // 劫持到了 push 方法
```
