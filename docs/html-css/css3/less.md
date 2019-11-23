# CSS预编译语言

```text
1.变量  @name
2.嵌套
3.混合(mixin)   .name(){}
    放在顶层调用
    混入的优点:灵活 可以传参数;缺点:代码重复
4.继承(extend)  &:extend(.class all)
    一些不变的东西(如预处理样式),继承不灵活,只能继承类
5.循环 (本身没有循环,通过递归实现循环)
6.模块化    @import "路径"
```

`less`  `sass`  `stylus`

预编译形式:

- 实时进行编译:在页面中引入less(...),再提供一个工具(js文件),进行实时编译
- 在开发阶段编译成CSS,页面中引入CSS

方式一:(耗浏览器资源)

```html
<link rel="stylesheet/less" href="hello.less">
<script src="less.js"></script>
```

方式二:(node)

```text
node    //进入node

//全局状态下安装
npm install -g less  //安装less
node uninstall -g less  //卸载less
lessc   //查看less
lessc --version  //查看版本号
```

## `less`语法

`less`相关语法

### 变量

```less
@charset "ntf-8";
@a : 100;
@b : 200;
@c : @a + @b ;
div{
    width : 100px;
    height :@c + 0px; /*字符串拼接*/
    background : @b;
    @b : red ;
}
```

### 混入(`mixin`)

类似于js中函数的使用和调用

- 普通的混入(类混入)

  ```less
  .a{
      width : 100px;
      height :100px;
  }
  div{
      .a
  }
  ```

- 没有编译的混入   类似于js中函数

  ```less
  .b(){
      width : 100px;
      height :100px;
  }
  p{
      .b;   /*或 .b()*/
  }
  ```

- 带参数的混入

  ```less
  .c(@aa){
      width : @aa;
      height : 3 * @aa;
  }
  div{
      .c(100px)
  }
  ```

- 参数带默认值的混入

  ```less
  .d(@aa : 100px){
      width : @aa;
      height : 3 * @aa;
  }
  div{
      .d()
  }
  ```

- 默认参数混入

  ```less
  .e(@aa : 100px , @bb : 200px ,@cc : 300px){
      width : @aa;
      height : 3 * @bb;
      lian-height : @cc
  }
  div{
       .e(@cc : 30px); /*只改@cc值*/
  }
  ```

- `arguments`

  ```less
  .bd(@w : 1px , @style : solid , @color : black){
      border:@arguments   /*@arguments表示所有的参数*/
  }
  p{
      .bd()
  }
  div{
      .bd(2px, dashed , red)
  }
  ```

**混入的优点:灵活 可以传参数;缺点:代码重复**

### 继承

```less
.a{
    width : 100px;
    height :100px;
}
div:extend(.a all){  /*all 把所有嵌套的也继承过来*/
     background :red;
}
/*000*/
```

```less
.a{
    width : 100px;
    height :100px;
}
div{
    &:extend(.a);
    background :red;
}
```

和混入的异同点:

1. 混入比较灵活,不仅可以和类的混入,还可以函数混入
2. 缺点:代码重复
3. 继承不灵活,只能继承类
4. 优点:代码不重复

### 嵌套

```less
&/*求父选择器*/
```

### 字符串和选择器插入

```less
@base_url : "img/";
div{
    background : url("@{base_url}1.jpg")
}
p{
    background : url("@{base_url}2.jpg")
}
```

选择器插入

```less
@i :1;
div:nth-child(@{i}){
    width: 100px
}
```

```less
@type: nth-child;
@i:1;
div:@{type}(@{i}){
    width: 100px;
}
```

### 循环

```less
.loop(@i)when(@i <= 10){
    div:nth-child(@{i}){
        background; url("img/@{i}.jpg") no-repet;
        background-position-x: (@i - 1) * -80px;
    }
    .loop(@i+1);
}
.loop(1);
```
