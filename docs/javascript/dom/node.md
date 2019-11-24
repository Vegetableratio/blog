# 节点

在`DOM`中可以将页面中的所有东西都看成是节点.

当我们在`JS`中获取到这些节点之后他们都是一个对象.

任何一个节点都有这三个属性(了解):

- `nodeName`
  - 标签节点:标签名
  - 属性节点:属性名
  - 文本节点:`#text`

- `nodeValue`
  - 标签节点:`null`
  - 属性节点:属性值
  - 文本节点:文本内容
- `nodeType`
  - 标签节点:`1`
  - 属性节点:`2`
  - 文本节点:`3`

## 节点之间的关系

```javascript
div.childNodes      //获取所有的子节点.包括所有可能的节点(文本、注释)
div.firstChild      //第一个子节点
div.lastChild       //最后一个子节点
div.nextSibling     //下一个兄弟节点
div.previousSibling //上一个兄弟节点
div.parentdNode     //父节点
```

```javascript
children
firstElementChild
lastElementChild
nextElementChild
prviousElementSibling
parentElement
```

获取子元素节点

```JavaScript
var nav = document.querySelector(".nav")
console.log(nav.firstElementSibling);//第一个子元素节点
console.log(nav.lastElementSibling);//最后一个子元素节点
console.log(nav.children);//所有的子元素节点

var item5 = document.querySelector(".item5");
console.log(item5.nextElementSibling);//下一个兄弟元素节点
console.log(item5.previousElementSibling);//上一个兄弟元素节点
console.log(item5.parentElement);//父元素节点

console.log(nav.childElementCount);//子元素节点个数
```


## 属性节点

1.查找

```javascript
p.getAttributeNode("属性名")
```

2.创建

```javascript
var node = document.createAttribute("属性名")
node.nodeValue = "属性值"
```

3.设置属性节点

```javascript
p.setAttributeNode(属性节点)
```

属性节点的**简化**操作

```javascript
// 1. 创建属性节点 2. 给属性节点的nodeVlaue赋值
var box = document.querySelector("div");
box.setAttribute("id","box");

//获取属性值
console.log(box.getAttribute("class"));

/*1. 先找到属性节点 3.删除属性节点*/
var box = document.querySelector("div");
box.removeAttribute("class");

//判断是否有这样的属性值
element.hasAttribute(attributename);
```

`classList`方便操作class

```javascript
var list = div.classList;
list.add(类名)  // 给div元素添加一个类.
list.remove(类名)  // 删除div的一个类.
list.toggle(类名)  // 如果存在就删除m,如果不存在就添加
```

## `attribute`和`property`的区别

`attribute`简写:`attr`

`property`简写:`prop`

Attribute指`html`中标签的属性

Property在`js`中对象的属性,`html`中元素的`Attribute`在js中都会有相应的`property`对象,所以一般直接操作`property`

**常用的`property`**

1. `id`
2. `className`
3. `innerHTML`
   - 给元素添加内容, 添加到内会作为正常的`HTML`解析.
4. `innerText`
   - 给元素添加内容, 但是内容中的标签会当做纯文本来对象.
   - 在获取的时候, 只拿到那些纯文本. 标签名不会当前文本得到.
5. `value`
   - 表单元素中使用.
6. `checked`
   - 用在`checkbox`, `radio`
7. `tagName`
   - 获取元素的标签名: `div.nodeName`
8. `scr`



## 创建、插入、删除、替换

1.创建文本节点

```javascript
document.createTextNode("文本")
```

2.创建元素节点

```JavaScript
document.createElement("标签名")
```

3.追加子节点

```javascript
parent.appendChild(childNode)
// 追加成功之后, 子节点会成为父容器的最后一个子节点
```

4.插入元素到某个子元素的前面

```javascript
ul.insertBefore(li,ul.firstElementChild);
```

5.删除节点

```javascript
parent.removeChild();//()配合获取子元素节点
```

6.替换节点

```javascript
ul.replaceChild(newNode,oldNode);
```

7.节点复制

```javascript
var cn = ul.cloneNode(true/false);
// 参数是布尔值, 表示是否深复制 true表示深复制, false或者不传, 表示浅复制
// 深复制表示把元素的后代一起复制, 浅复制表示只复制这个元素自己
```

## 查找元素

js操作dom,其实操作页面的各种节点.

查找任何节点, 都是找到元素, 根据其他节点与元素之间的关系, 再去找.

基本的元素查找方法:

```javascript
document.getElementById("ID名");//通过ID来查找元素
document.getElementsByTagName("标签名");//通过标签名
document.getElementsByClassName("");//通过类名
document.getElementsByName("");//通过name属性值,一般用于表单元素

document.querySelector(选择器);//找到满足选择器的第一个元素
document.querySelectorAll(选择器);//找到满足选择器的所有元素
```

## `js`操作样式

也叫做`css`的脚本化

1.获取`css`属性

- `div.style.css属性值` `div.style["css属性名"]`只能访问行内样式!

- 获取正在生效的属性值

  ```javascript
  // ie9+, 和其他高级浏览器
  var style = window.getComputedStytle(box, null);
  style.width
  style["width"]
  
  // 兼容所有浏览器
  var style = window.getComputedStyle ? window.getComputedStyle(box, null) : box.currentStyle;
  style.width
  style["width"]
  ```

2.设置`css`属性

只能设置元素的行内样式,有则改之无则添加

```javascript
div.style.width = "300px";
div.style["width"] = "300px"
div.style.width = "";
```

## 获取尺寸的简便方法

```javasc
offsetWitdth
offsetHeight
offsetLeft
offsetTop

offsetParent
```

```javascript
box.getBoundingClinetRect();
// left
// top
// right
// bottom

// width
// height
```
