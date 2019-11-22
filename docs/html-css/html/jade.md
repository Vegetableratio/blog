# Jade模板引擎

## 1.模板引擎

模板引擎:处理服务器渲染问题

存在于服务端的html

目前使用较广的模板引擎有以下几种：Jade / Pug / EJS /Handlebars.

```txt
jade兼容原生HTNL

编译:
-P jade name //不压缩编译
-P -w jade name //有改动自动编译
```

```lang
标签靠缩进表示嵌套层次
标签属性 标签后加()
    html(lang="en")
```

## 2.jade语法

1. 文档声明

```jade
doctype html
```

2.标签
在Jade中标签不用使用尖括号来定义。注意好标签的嵌套层次即可。

3.属性

```jade
//-  基本写法
div(class="wrap")

//-  可分行
div(
    class="wrap"
    title="name"
    id="box"
    style="background:pink"
    )
//-  style
style.
    div {
        width: 100px;
        height: 100px;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: pink;
        text-align: center;
        line-height: 100px;
    }

//-  id属性
div#app

//-  class属性
div.app

//-  自定义属性
div#divBox(data-p="p")&attributes({'data-x':'x'})
```

4.文本

```jade
//-  直接跟在标签后的字符 都算是标签的文本
div 你好

//-  | 强制命令jade将字符解析成文本
div
    |你好
    |不好

//-  .代表使用代码块
div.
    你好
    不好
```

5.注释

```jade
//注释会被解析
//-注释不会被解析
```

6.script代码

```jade
body
    div 你好
        div #{name}
script.
    var name = "李四";
//代码不会被解析
```

```jade
body
    - let name ="李四"
    div 你好
        div #{name}
//代码会被解析,代码顺序不能乱,必须先定义后使用
```

7.使用外部JSON对象

```jade
jade 01_helloWorld.jade -P -w -O ./json/01.json
在Jade中使用js要以-开始。这一类的js都是不会被输出到目标文件中的
```

8.命令行指定参数

```jade
p=  title
jade file.jade -P -w --obj "{'title':'cmd'}"
```

9.转义字符

```jade
body
    - var code = "<div>item</div>"
    div!= code
    div \#{code}
```

10.循环

```jade
-var arr = ["a","b","c"]
-for(var i in arr)
p= arr[i]
-for(var item of arr)
div= item
-for(let i =0;i<arr.length;i++)
h1= arr[i]
-each team in arr
h2= team
```

```jade
-var objArr = [{id:1,arr:["1-1","1-2","1-3"]},{id:2,arr:["2-1","2-2","2-3"]}];
ul
    each item in objArr
        li
            each item2 in item.arr
                li= item2
```

11.include

   ```jade
   body
       include ./header.jade
       include ./content.jade
       include ./footer.jade
   ```

12.extends

```jade
//./01_layout.jade
doctype html
html(lang="en")
    head
        title damu
        meta(charset="UTF-8")
    body
        block header
        block content
        block footer
//02_headerFooter
extends ./01_layout.jade

block header
    header Article head

block footer
    footer My footer


extends ./02_headerFooter

block content
    -var a = "aaaa"
        p= a

```

12.混合

```jade
mixin createUl(arr)
    ul
        each item in arr
            li= item

-var arr = [1,2,3,4]
+createUl(arr)

-var arr = ["a","b"]
+createUl(arr)
```

```jade
mixin creat(arr)
    if block
        block
    ul&attributes(attributes)
        each item in arr
            li= item
-var app = [1,2,3,4,5]
+creat(app)(
    id="box",
    class="p"
    )
    p= "我是一个P标签"
```

## 3.API

```jade
render
    jade.render(source, options)
    source string – The source jade to render
    options options – An options object
    returns string – The resulting html string

var jade = require('jade');
var html = jade.render('string of jade', {});
// => '<string>of jade</string>'

renderFile
    jade.renderFile(filename, options)
    filename string – The path to the jade file to render
    options options – An options object
    returns string – The resulting html string

var jade = require('jade');
var html = jade.renderFile('path/to/file.jade', options);
```
