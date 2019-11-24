# 数据类型

## 简单数据类型(基本数据类型)

1.`Number`

2.`String`

- 用单引号或者双引号来表示数据为字符串

3.`Boolean`

- 只有两个值:`true`,`false`

4.`Undefined`

- 只有一个值`undefined`
- 如果一个变量只有声明没有赋值,那变量中存储的就是`undefied`

5.`Null`

- 只有一个值:`null`
- 将来如果一个变量向让他表示一个对象, 但是现在没有给他指向对象, 这个时候最好给他认为赋值一个`null`
- **`typeof null`的结果为`object`**

使用typeof后可能出现的几种值:

`number string boolean undefined object function`

## 复杂数据类型

也叫引用数据类型, 对象类型

## `Number`类型

- 整数

  - 表示方法

        二进制`0b`开头;八进制`0o`开头;十六进制`0x`开头

- 浮点数

  - 对计算机来说不能精确地表示,只能近似值

- 无穷大(正无穷、负无穷)

  - `Infinity,-Infinity`
  - 任何数字都小于正无穷,大于正无穷

- `NaN`(`not a number`)

  - 表示不是一个数的数

解析出整数和浮点数

    ```javascript
    parseInt(其他类型的数据) //把参数中的整数部分解析出来
    parseFloat(其他类型的数据) //把参数中的浮点数解析出来
    ```

`parseInt(string, radix)` 的参数radix必须介于2~36之间，而且字符串string中的数字不能大于radix才能正确返回数字结果值

没有指定radix时,radix为0：

> 1. 参数string以“0x”或“0X”开头，radix取16；
> 2. 参数string以“0”开头，ECMAScript5规定radix只能取10，然而ECMAScript3允许radix取8。具体的解析结果依然由实现环境而定。
> 3. 其他情况下，radix取10.

`radix`为1或大于36时：解析结果为`NaN`。
`radix`处于2到36之间时：如果`string`参数的第一个字符（除空白以外），不属于`radix`指定进制下的字符，解析结果为NaN；如果第一个字符属于`radix`指定进制下的字符，则解析到不属于`radix`指定进制下的字符时，将忽略该字符及其后的所有字符。

## `String`类型

有个别的字符, 不能像`ab`这样直接表示出来,  用转义的方式来表示这些特殊的字符.

`\`转义字符

- `\n` 换行
- `\r` 回车
- `\"` "
- `\'` '
- `\t`  tab制表符
- `\\`  \

查看字符串的长度

`s.length` 得到的是一个数字, 表示字符串中字符的个数.
