# 日期和时间

## `GMT`和`UTC`

## 创建日期对象

1.获取当前时间-字符串形式,直接调⽤`Date()`函数

`var date = Date()`

2.创建当前日期-`new Date()`

```javascript
//调用Date()构造函数,创建的对象表示当前日期
var now = new Date();

//创建指定字符串日期的对象
var d1 = new Date("May 31, 2016 09:00:00");
console.log(d1); //Tue May 31 2016 09:00:00 GMT+0800 (中国标准时间)
var d2 = new Date("2016-11-12");
console.log(d2); //Sat Nov 12 2016 08:00:00 GMT+0800 (中国标准时间)
var d3 = new Date("2016/11/12");
console.log(d3); //Sat Nov 12 2016 08:00:00 GMT+0800 (中国标准时间)
```

## `Date`对象的常用方法

1.`getTime()`和`setTime(毫秒值)`

- `getTime()`返回表示⽇期的毫秒值，与`valueOf()`⼀样

2.`getFullYear()`和`setFullYear(年份)`

3.`getMonth()`和`setMonth(⽉份)`

4.`getDate()`和`setDate(⽇)`

5.`getDay()`

6.`getHours()和setHours(⼩时)`

7.`getMinutes()`和`setMinutes(分钟)`

8.`getSeconds()`和`setSeconds(秒)`

9.`getMilliSeconds()`和`setMilliSeconds(毫秒值)`
