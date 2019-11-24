# 正则表达式

## 语法

`RegExp()`

1.构造函数

`var a = new RegExp()`

```javascript
var re = new RegExp("box", "gi");
var s = "afasdlfja";
console.log(re.test(s));
```

2.字面量

```javascript
var re = /box/gi;
```

`g`: 全局, 在进行匹配的时候, 会从上次匹配的结果继续匹配. 如果没有`g`, 每次都会从头开始匹配.

## 常用方法

```JavaScript
var s = "girlaGIrl"
var re = /girl/gi;

console.log(re.lastIndex);//最后一次检测后的下标

var result = re.test(s);
console.log(result);
console.log(re.lastIndex);
console.log(re.exec(s));    //输出的是数组,只有一个元素
console.log(re.lastIndex);

```

## 正则表达式核心规则

```javascript
[abc]  a或者b或者c  注意: 方括号是匹配一个
[a-z] 字母a-z之一

\d : 匹配一个数字  等价于:[0-9]  d:digital
\D : 匹配非数字  [^0-9]
\w : 匹配单词字符   数字, 字母和下划线  [a-z0-9_]           w:word
\W : 匹配非单词字符
. : 匹配任意(非换行, 非回车)字符.
\. : 只匹配 .
\s : 匹配空白字符. (space)  \r \n \t 空格
\S : 匹配非空白  [^\s]
^a: 以a开头
b$: 以b结尾
    限制死字符串的长度.
    用来验证完整的字符串.
|： 或的意思

数量词:
    a+ : 表示一个或多个a
    a* : 表示0个或多个a
    a? : 0个或1个a
    a{n} : 正好n个a
    a{n,}: 大于等于n个a  至少n个a  {1,}=== +  {0,}===*
    a{n,m} 大于等于n小于等于m个  至少n个至多m个

    贪婪模式:
            默认情况下的模式,尽量多地匹配

    懒惰模式:
            尽量少地匹配,在数量词后加?
```

## 4.正则表达式中字符串的方法

- `search()`用来替换`indexof`

- `match(reg)`查找满足正则表达式的子字符串,并放入数组并返回,替换正则表达式的`exec()`

- `replace(reg,newString)`参数1:正则表达式 参数2:用来去替换的字符串

- `split(reg)`在满足表达式的地方劈开字符串

```javascript
var s = "a32u9823jklekjo3uoflkdsj984";
console.log(s.search(/\d{6}/i));  // s.indexOf("")
console.log(s.match(/\d{4}/gi));
var ss = s.replace(/[^\d]+/gi, "");
var ss = s.replace(/\d{2}/gi, "");
console.log(ss);

var s = "我要吃吃吃吃饭饭啦啦";  // 我要吃饭
var ss = s.replace(/(.)\1+/gi, "$1");
console.log(ss);

var s = "1223aab122fal";  // 123 "" "" 122 "" "" ""
var arr = s.split(/\D/gi);  // splice

var s = "192.168.10.188";
var arr = s.split(/\./gi);
var arr = s.match(/\d+/gi);
```
