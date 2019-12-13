# JavaScript模块化历史

文章推荐:[前端模块化的前世今生](https://mp.weixin.qq.com/s/88q3P-rRDxVSD7HJxYAigg)

## 先天残疾

`Javascript`自诞生以来,曾经很长的一段时间内。没有人把它当做一门真正的语言，认为他不过是一种网页小脚本而已。在Web1.0时代，这种脚本语言在网络中主要有两个作用广为流传，一个是表单校验。另一个是网页特效。由于语言的不起眼，在设计之初就没有考虑太多复杂的问题，导致它自身的各种陷阱和缺点被各种编程人员广为诟病。

    JavaScript没有模块系统。没有原生的支持密闭作用域或依赖管理。
    JavaScript没有包管理系统。不能自动加载和安装依赖
    JavaScript没有标准库。除了一些核心库外，没有文件系统的API，没有IO流API等
    JavaScript没有标准接口。没有如Web Server或者数据库的统一接口。

`JavaScript`先天就缺乏一种功能：模块！

- 在其他高级语言中`java`有类文件，`Python`有`import`机制，`Ruby`有`require`，`PHP`有`include`和`require`。而JavaScript在html文件中通过`<script>`标签来引入代码的方式显得杂乱无章。
- 语言自身毫无组织和约束能力（在一个js文件中你是没有办法引入另外一个js文件的。）

## 早期`js`代码组织模式

1.全局函数

- 容易造成功能函数命名冲突

2.命名空间

- 将各项功能函数封装到对象中去。将函数变成对象的属性。
- 使用命名空间是可以解决功能函数命名冲突的。但代码的组织形式还是不容乐观

## `CommonJS`的推出与发展

大概09年 - 10年期间，`CommonJS`社区大牛云集。`CommonJS`原来叫`ServerJS`。`CommonJS`标准包含了`JavaScript`需要在服务端运行所需的能力。其中影响最深的还是`CommonJS`的模块化方案，`CommonJS`的模块化方案是`JavaScript`社区第一次在模块系统上取得的成果，不仅支持依赖管理，而且还支持作用域隔离和模块标识。推出 `Modules/1.0`规范后，在`Node.js`等环境下取得了很不错的实践。09年下半年这帮充满干劲的小伙子们想把 ServerJS 的成功经验进一步推广到浏览器端，于是将社区改名叫`CommonJS`。

思想的碰撞就会产生火花；激烈争论`Modules`的下一版规范；分歧和冲突由此诞生，逐步形成了三大流派：

- **Modules/1.x**流派。这个观点觉得1.x规范已经够用，只要移植到浏览器端就好。要做的是新增`Modules/Transport`规范，即在浏览器上运行前，先通过转换工具将模块转换为符合`Transport`规范的代码。主流代表是服务端的开发人员。现在值得关注的有两个实现：越来越火的`component`和走在前沿的`es6 module transpiler`。

- **Modules/Async**流派。这个观点觉得浏览器有自身的特征，不应该直接用`Modules/1.x`规范。这个观点下的典型代表是`AMD`规范及其实现`RequireJS`。

- **Modules/2.0**流派。这个观点觉得浏览器有自身的特征，不应该直接用`Modules/1.x`规范，但应该尽可能与`Modules/1.x`规范保持一致。这个观点下的典型代表是 `BravoJS`和`FlyScript`的作者。`BravoJS`作者对`CommonJS`的社区的贡献很大，这份`Modules/2.0-draft`规范花了很多心思。`FlyScript`的作者提出了 `Modules/Wrappings`规范，这规范是`CMD`规范的前身。可惜的是`BravoJS`太学院派，`FlyScript`后来做了自我阉割,有趣的是`FlyScript`作者将`GitHub`上的项目和官网都清空时，在官网上留下了这么一句话:“我会回来的，带着更好的东西”

CMD规范更多的来自于`Modules/2.0`的观点，但尽可能去掉了学院派的东西，加入了不少实战派的理念

## 代码实现

```shell
早期代码的问题
    1.无法解决文件的依赖问题
    2.全局函数命名冲突
    3.IIFE

模块化方案:
    1.common--服务器端
    2.AMD-客户端
    3.CMD-客户端
```

### 模块化方案1-sea.js

```shell
解决了依赖问题
解决了命名冲突

没有解决模块化合并
    可以合并,过程复杂
```

```js
//在index.html页面中引入sea.js
<script src="assets/sea-modules/seajs/1.3.0/sea.js"></script>


<script>
  // 加载入口模块
  //a,b,c分别是接受到的模块:module.exports
  seajs.use(['./js/a.js','./js/b.js','./js/c.js'],function(a,b,c){
        a.index1();
        console.log(b.a);
        c.index3();
    })
</script>

//书写模块代码
//common 对应模块的 module.exports;即依赖关系所暴露的功能
define(function(require, exports, module) {
  // 获取依赖，此模块 只依赖common.js
  var common = require("./common.js");

  // 下面是核心功能代码
  function Spinning1() {
        console.log("A")
  }

  function Spinning2() {
        console.log("B")
  }

  // 模块的暴露(3种方式)
      /*注意!:
      exports 和 module.exports 指向同一个引用(深入体会一下内存图)
      */
  //1.给exports添加属性
  exports.Spinning1 = Spinning1;

  //2.给module.exports赋值
  module.exports = Spinning1;

  //3.给module.exports赋值一个对象
  module.exports = {
      Spinning1:Spinning1,
      Spinning2:Spinning2
  };
})
```

### 模块化方案2-commonjs

```shell
1.每个文件是一个模块，有自己的作用域
2.在模块内部  module变量代表模块本身
3.module.exports属性代表模块对外的接口

解决了依赖问题
解决了命名冲突
解决了模块化合并
```

```JavaScript
//common.jc
function common(){
    return "common";
}
module.exports = common;//对外提供接口(3种方式,同sea.js)

//-----------------------------------------------------------------------
//c.js
var common = require('./common.js')
function index1(){
    console.log( "index1 " + common() +" from a" )
}
function index2(){
    console.log( "index2" + common() +" from a")
}
function index3(){
    console.log( "index3" + common() +" from a")
}

// 对外提供接口
module.exports = {
    index1:index1,
    index2:index2,
    index3:index3
}
//-------------------------------------------------------------------
//b.js
var common = require("./common.js");
function index1(){
    console.log( "index1 " + common() +" from b" )
}
function index2(){
    console.log( "index2" + common() +" from b")
}
function index3(){
    console.log( "index3" + common() +" from b")
}

var a =1;
//exports 和 module.exports 指向同一个引用
exports.index1=index1;
exports.index2=index2;
exports.index3=index3;
exports.a = a;

//----------------------------------------------------------------
//index.js
var a = require("./js/a.js");
var b = require("./js/b.js");

a.index1();
b.index2();
//----------------------------------------------------------------
//通过browserify打包

```

```shell
安装browserify -g全局
    npm install browserify -g
查看安装目录
    npm config get prefix
是否安装成功/查看所有命令
    browserify -h
编译,进入相应目录进行操作       -o:输出  目录
    browserify ./编译文件所在目录.js -o disk/index.js
```

### 模块化方案3-ES6

```shell
ES6模块化方案,可以静态分析,编译阶段即可解析分析
    import
        import+代码块
    export
        export+代码块
```

```JavaScript
//静态

//common.js
export function common(){
    return "common";
}
  
//a.js
import {common} from "./common.js"

export function index1(){
    console.log( "index1 " + common() +" from a" )
}
export let a ="a from a"

//index.js
import * as a from "./a.js"
a.index1();
console.log(a.a);
//使用webpack进行模块化合并
```

```JavaScript
//动态

//common.js
export default function common(){
    return "common";
}
  
//a.js
import common from "./common.js"

function index1(){
    console.log( "index1 " + common() +" from a" )
}

export let a ="a from a"
export default{
    index1,
    a
}

//index.js
import a from "./a.js"
a.index1();
console.log(a.a);

//使用webpack进行模块化合并
```

注意点:

1.很多环境下打包后的代码是运行在严格模式下的;[模块内部代码最好遵循严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

2.暴露出的模块不能去修改

3.ES6的模块化时静默分析的   暴露出的模块只能放在当前作用域的最顶层

4.每个模块对应的作用域是局部(函数)作用域

## 脚本与模块的区别

`JavaScript`文件有时候被称为脚本有时候被称为模块,那么这两者有什么区别呢?

这个区分是在`ES6`引入了模块机制开始的。脚本是可以由浏览器或者`node`环境引入执行的，而模块只能由`JavaScript`代码用`import`引入执行。(此处只考虑`ECMAScript`模块化标准)

从概念上，我们可以认为脚本具有主动性的`JavaScript`代码段，是控制宿主完成一定任务的代码；而模块是被动性的`JavaScript`代码段，是等待被调用的库。我们对标准中的语法产生式做一些对比，不难发现，实际上模块和脚本之间的区别仅仅在于是否包含`import`和`export`。脚本是一种兼容之前的版本的定义，在这个模式下，没有`import`就不需要处理加载“.js”文件问题。

现代浏览器可以支持用`script`标签引入模块或者脚本，如果要引入模块，必须给`script`标签添加`type=“module”`。如果引入脚本，则不需要`type`。
```html
<script type="module" src="xxx.js"></script>
```

## 总结

`javascript`模块化的概念是在`Node.js`中被提出的，然后慢慢嫁接到浏览器端的。在嫁接的过程中出现了分歧，大致出现了两个不同的理念

- A.遵循之前Node模块化的方案的 CommonJS  CMD

    实现库：seajs

- B.与之前Node模块化方案有比较大出入的 AMD

    实现库：require.js

- C.当然发展到现在在浏览器端最权威的模块化方案当属ECMA发布在ES6中的方案。我们称为ES6模块化

```js
commonjs 是node社区为node量身定做的模块化方案
    AMD:require.js
    CMD:seajs
        定义模块:define
        暴露模块：
            module.exports
                随意玩
            exports
                只能添加属性
                不能重新赋值（赋值-->值与引用的问题）
        依赖：require
            require("路径")拿到的就是module.exports
            路径：
                模块的相对路径参照与自身
                普通js文件参照于引用者
                相对路径一定要写 ./
        命名冲突：命名空间
        seajs的模块化合并（大问题）
commonjs
        commonjs的模块化合并（borwserify）

es6
    es6的模块化合并（webpack）
    import  {xxx}  from "路径"
        xxx是什么？
            对象
                export var a = {name:"xiaoming"};
            函数
                export function name(){}
            基本数据类型的值
                export var a =1;
            类
                export class name{};

    import  * as xxx from "路径"
        xxx是什么？
            无论是什么暴露都是对象

    import  xxx from "路径"
            对象
                export default {};
            函数
                export default function name(){}
            基本数据类型的值
                export default var a =1;
            类
                export default class name{};
    export  代码块
```
