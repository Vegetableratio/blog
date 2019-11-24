# 字符串

1. 基本类型的字符串

   - `""`
   - `''`
   - `String()`
   - `"" + 2`

2. 对象类型的字符串(包装类型)
   - `new String(2)`
   - `new String("abc")`

   ---

## 字符串的不可变性

**在js中的 字符串是不可变的!**

以后只要涉及到字符串的更改, 都是创建的新的字符串!

## 常用方法

属性:

1.`length`

方法:

1.`s.charAt(index)`

- `index`必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
- 返回值：返回的是指定位置的字符。但是 `Javascript` 没有字符类型，其实返回的是⻓度为1 的字符串。

2.`s.charCodeAt(index)`

- 返回指定位置的字符的 `Unicode` 编码。

3.`String.fromCharCode(整数)`

- 根据给的 charcode , 返回对应的字符.

查找字符串

1.`s.indexOf(searchvalue,fromindex)`:⽅法可返回某个指定的字符串值在字符串中⾸次出现的位置.

2.`s.lastIndexOf(searchvalue,fromindex)`:⽅法可返回⼀个指定的字符串值最后出现的位置，在⼀个字符串中的指定位置从后向前搜索。

截取

1.`s.substring(start,stop)`:提取字符串中介于两个指定下标之间的字符

2.`s.substr(start, length)` :在字符串中抽取从 start 下标开始的指定数⽬的字符。

3.`s.slice(start,end)`:提取字符串的某个部分，并以新的字符串返回被提取的部分。

大小写转换

1.`s.toUpperCase` 字符串中所有的字符转变成为⼤写

2.`s.toLowerCase` 字符串中的所有的字符转变成⼩写

去除首尾空白字符

`s.trim()`:

只是去除字符串的⾸尾的所有空⽩字符. 字符串内部的空⽩字符不做任何处理
