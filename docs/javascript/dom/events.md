# 事件

## 事件流

微软的工程认为, 事件应该从`内->外` , 冒泡流||网景的工程师认为, 事件是从`外->内`,  捕获流

w3c认为, 事件流都不对,  `DOM事件流`;分成三个阶段: 1. 捕获阶段2.处于目标阶段3.冒泡阶段

目前所有的浏览器都是支持的`DOM`事件流

每个元素上注册的事件不会多次触发. **默认情况下, 都是在冒泡阶段触发!**

## 事件的处理程序(事件三要素)

1. 事件源 (事件发生在哪个元素上)
2. 事件处理程序(事件监听器)
3. 事件对象(包含事件发生的所有的信息: 事件源是谁, 发生的坐标, 什么阶段...)

`html`事件处理程序(内容与行为没有分离,一般不用)

```JavaScript
<div onclick="foo()"></div>
<script>
function foo(){
    alert("aaa")
}
</script>

<div onclick="alert()"></div>
```

## `DOM0`级事件处理

```JavaScript
var box = document.querySelector("div");
box.onclick = function (){
    alert("aaaa")
}
```

- 优点:相比html事件处理程序, 实现了内容和行为的分离.
- 缺点: `DOM0`事件处理程序一个元素对同一个事件类型只能添加一个事件处理.

### 常见的事件类型

- Ul事件

  - onload  在页面或图像加载完成后立即执行

  ```javascript
  window.onload = function () {
      // 函数在⻚⾯执⾏完毕之后⾃动执⾏。
    alert("⻚⾯加载完毕")
  };
  
  //HTML事件处理： 给body 的onload属性直接设置 JavaScript代码， 也可以调⽤函数
  <body onload="alert('你好')">:
  ```

  - **onscroll**  页面滚动时在`window`上触发

    事件在window上面或任意元素上都可以触发;由于滚动过程会重复多次调用,所以逻辑代码不能过于复杂,否则影响用户滚动效果.

  - **onresize**  页面缩放时在`window`上触发

- 焦点事件

  利用这些事件与`document.hasFocus()`方法和`document.activeElement`属性配合,可以知晓用户在页面上的行踪.

  - onfocus  在元素获取焦点时触发.**该事件不会冒泡**

    ```javascript
    <body>
    <div>
        <input type="text" name="user">
    </div>
    <p>上⾯的⽂本框获得焦点后会我会变成红⾊</p>
    <script type="text/javascript">
        var p1 = document.getElementsByTagName("p")[0];
        var textInput = document.getElementsByTagName("input")[0];
        textInput.onfocus = function () {
            p1.style.color = "red";
        };
        var div1 =
            document.getElementsByTagName("div")[0];
        //当div中input获取焦点后，并会冒泡到上层div，所以这个函数不会执⾏。
        div1.onfocus = function () {
            div1.style.backgroundColor = "#000";
        } </script>
    </body>
    ```

  - onblur   在元素失去焦点时触发.该事件**不会冒泡**

    ```javascript
    <div>
        <input type="text" name="user">
    </div>
    <p>上⾯的⽂本框获得焦点后会我会变成红⾊,失去焦点会变成蓝⾊</p>
    <script type="text/javascript">
        var p1 = document.getElementsByTagName("p")[0];
        var textInput = document.getElementsByTagName("input")[0];
        textInput.onfocus = function () {
            p1.style.color = "red";
        };
        //失去焦点事件
        textInput.onblur = function () {
            p1.style.color = "blue";
        }
    </script>
    ```

- 鼠标事件

  - **onclick**  鼠标单击
  - ondblclick  鼠标双击
  - **onmouseover**  鼠标进入元素上方,**冒泡**
    - onmouseenter  **不冒泡**
  - **onmouseout**  鼠标离开元素上方,**冒泡**
    - onmouseleave  **不冒泡**
  - onmousedown  任意鼠标按下,**不能通货键盘触发**
  - onmouseup  鼠标释放

- 键盘事件

### 事件对象(`event`)

在触发`DOM`上的某个事件时,会产⽣⼀个事件对象`event,`这个对象中包含着所有与事件有关的信息。

包括:事件源,事件类型,其他特定相关信息

```javascript
<body>
<button id="btn">点我获取点击的click事件的事件类型</button>
<script type="text/javascript">
    var btn = document.getElementById("btn");
    //当点击事件发⽣的时候，浏览器会把发⽣的这次点击封装成⼀个事件对象，通过时间处理程序的参数传进来。
    //在处理程序内部就可以使⽤这个事件对象了。
    btn.onclick = function (event) {
        alert(event.type);
    }
</script>
```

### 事件的属性和方法

1. target   事件发生的目标元素
2. currentTarget     注册事件处理程序的元素
3. type     被触发的事件的类型
4. **preventDefault()**     取消事件的默认⾏为。如果 cancelable是true ，可以使⽤这个⽅法
5. stopPropagation()     取消事件的进⼀步捕获或冒泡

### 删除事件流

```javascript
box.onclick=null

var foo=function(e){
}
box.addEventListener("click",foo,布尔值)

box.removeEventListener("click",foo)
```

### 和坐标相关的几个属性

事件对象:

`offsetX,offsetY`

- 坐标原点是`target`的左上角.

`clientX, clientY`

- 当前光标相对于浏览器浏览器窗⼝客户区域左上⻆的坐标

- 坐标原点是浏览器的左上角

`pageX,pageY`

- 坐标原点是当前页面的左上角

`screenX,screenY`

- 显示器的左上角为坐标原点

## `DOM2`事件处理程序

```javascript
/*
三个参数:
参数1:事件类型   把on去掉
参数2:事件处理程序
参数3:是否在捕获阶段触发 true表示表示在捕获阶段 false或者不传入则是冒泡阶段
*/
box.addEventListener("click", function (e){
    console.log("a");
});
box.addEventListener("click", function (e){
    console.log("b");
}, true);
p.addEventListener("click", function (e){
    console.log("p...");
})
```

```javascript
var foo = function (e){
    console.log("a");
}
box.addEventListener("click", foo);

box.removeEventListener("click", foo);

```

`stopPropagation()`和`stopImmediatePropagation()`

停止事件流

```javascript
var div = document.querySelector("div");
var p = document.querySelector("p");
div.addEventListener("click", function (e){
    console.log("click1...");
    // e.stopPropagation();
    // e.stopImmediatePropagation();
}, true)
div.addEventListener("click", function (e){
    console.log("click2...");
    // e.stopImmediatePropagation();
}, true)
div.addEventListener("click", function (){
    console.log("click3...");
});
p.addEventListener("click", function (e){
    console.log("p...");
    e.stopPropagation();
})
```

一个函数处理多个事件

```javascript
var foo = function (e){
    var type = e.type;
    /*if(type == "click"){
        console.log("click...");

    }else if(type == "mouseenter"){
        console.log("mouseenter...");

    }else if(type == "mouseleave"){
        console.log("mouseleave...");
    }*/
    switch (type){
        case "click":

            break;
        case "mouseenter":

            break;
        case "mouseleave":

            break;
        default:
            break;
    }
};
box.addEventListener("click", foo);
box.addEventListener("mouseenter", foo);
box.addEventListener("mouseleave", foo);
```

### 键盘事件

1. `keydown`
   - 按下了键盘
   - 字母键来说, 他不区分大小写, 都是按照大写来处理.
2. `keyup`
   - 松开 键盘
3. `keypress`
   - 只有在按下的是字母键才会触发, 而且区分大小写.

监测事件类型:

```javascript
document.onkeydown = function (e){
    if (e.type == "keydown" && e.keyCode == 13){
       //.....
    }
};
```

### 事件代理(事件委托)

代码案例:

```javascript
<button class="btn">给ul中添加li</button>
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
</ul>
<script>
    var ul = document.querySelector("ul");
    var btn = document.querySelector(".btn");
    ul.onclick = function (e) {
        var target = e.target;
        if (target.tagName.toLowerCase() == "li") {
            alert(target.innerHTML);
        }
    };

    btn.onclick = function () {
        var li = document.createElement("li");
        li.innerHTML = "新增的内容...";
        ul.appendChild(li);
    };
</script>
</body>
```
