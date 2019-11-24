# 匿名函数和函数表达式

## 匿名函数

 没有名字的函数, 就是匿名函数.
 匿名不能单独存在

## 函数表达式

 ```javascript
var foo = function (){

}
 ```

## 匿名函数常见用法

- 我们常用的dom事件
- 把匿名函数作为参数传递, 或者作为返回值来返回.
- 用匿名函数来封装私有变量.

## 匿名函数自执行(立即执行)

 ```javascript
(function (){
    var a = 10;
    console.log(a);
})();

(function (){
    var a = 10;
    console.log(a);
}());
 ```
