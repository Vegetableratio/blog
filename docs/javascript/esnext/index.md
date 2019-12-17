# ES5->ESNext

关于JavaScript的命名历史可以参考这篇译文:[ES5, ES6, ES2016, ES.Next: JavaScript 的版本是怎么回事?](https://huangxuan.me/2015/09/22/js-version/?utm_source=caibaojian.com)

这里简单列举一下从ES5开始到现在(2018)的一些新特性.

开发中可能用到的兼容性查阅列表:[kangax.github.io](https://kangax.github.io/compat-table/es6/);[Can I use?](https://caniuse.com/)

## ES6(ES2015)

1.`let`和`const`

2.箭头函数

3.`class`

4.默认参数

5.模板字符串

6.解构赋值

7.增强的对象字面量

8.`for-of`循环

注意和`for-in`的区别

9.[Promise](../other/promise.html)

10.`String`新方法

- repeat()
- codePointAt(

11.`Object`新方法

- Object.is() 确定两个值是不是同一个
- Object.assign() 用来浅拷贝一个对象
- Object.setPrototypeOf 设置一个对象的原型

12.展开运算符

13.`Set`

14.`Map`

15.`Generators`生成器函数

16.[模块](../other/module.html)

## ES2016

1.Array.prototype.includes()

2.求幂运算符

## ES2017

1.字符串填充

字符串填充的目的是给字符串添加字符，以使其达到指定长度。

- String.prototype.padStart(targetLength [, padString])
- String.prototype.padEnd(targetLength [, padString])

2.Object.values()

该方法返回一个数组，数组包含了对象自己的所有属性.

3.Object.entries()

该方法返回一个数组，数组包含了对象自己的所有属性键值对，是一个[key, value]形式的数组.

4.Object.getOwnPropertyDescriptors()

该方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

5.尾逗号

该特性允许在函数定义时有尾逗号，在函数使用时可以有尾逗号：

```js
const doSomething = (var1, var2,) => {
  //...
}
doSomething('test2', 'test2',)
```

该改变将鼓励开发者停止“在一行开始时写逗号”的丑陋习惯

6.共享内存and原子操作

`WebWorkers`可以在浏览器中创建多线程程序。它们通过事件的方式来传递消息，从`ES2017`开始，你可以使用`SharedArrayBuffer`在每一个 `Worker`中和它们的创建者之间共享内存数组.由于不知道写入内存部分需要多长的周期来广播，因此在读取值时，任何类型的写入操作都会完成，`Atomics`可以避免竞争条件的发生。

## ES2018

1.Rest/Spread Properties

ES2015 引入了解构数组的方法

ES2018 为对象引入了同样的功能。

2.异步迭代器(Asynchronous iteration)

`for-await-of`允许你使用异步可迭代对象做为循环迭代

```js
for await (const line of readLines(filePath)) {
  console.log(line)
}
```

3.Promise.prototype.finally()

当一个`Promise`是`fulfilled`时，它会一个接一个的调用`then`。如果在这个过程中发生了错误，则会跳过`then`而执行`catch`。而`finally()`允许你运行一些代码，无论是成功还是失败：

4.正则表达式改进

你可以在[JavaScript正则指南](https://flaviocopes.com/javascript-regular-expressions/)中找到对应的改进.

## ES2019
