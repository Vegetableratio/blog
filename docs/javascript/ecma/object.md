# 创建对象的方式

## 字面量

1. 对象 **字面量** 的形式 (object literal)
    可以直观的看出这个对象有哪些属性.
    对象中都是属性(property)!

 2.如果一个对象的属性的值是函数, 那么我们通常称这个属性叫方法!(`method`)

 注意: 以后我们说属性一般不包含方法!

 数据属性, 方法

 对象本质: 是对数据和行为的一种封装.

### 访问对象的属性和方法的方式

有两种方式:
1.`.`语法

```javascript
console.log(obj.name);
obj.play();
```

2.`[]` 方括号语法

- 支持变量的值来作为属性名

**方括号语法和点语法的异同**
如果提前知道属性的名字, 则应该用点语法.
点语法只能提前知道属性名,

方括号语法不仅仅支持直接写字符串, **还支持变量**!

```javascript
var pn = prompt("请输入一个属性名");
console.log(obj[pn]);
```

### 删除对象的属性

删除指定属性:

```javascript
delete obj.name;  
```

### 遍历对象的属性

```javascript
// for...in 用来遍历对象的属性的, 可以遍历出来每个属性名
// pn就是对象中的属性名
// 对象[pn] 来获取对应的属性名的值
for(var pn in obj){
    console.log(pn, obj[pn]);
}
```

## 工厂方法创建对象

解决字面量创建对象的代码重复问题.

```javascript
function createPerson(name, age, sex){
    var p = {
        name: name,
        age: age,
        sex: sex
    }
    return p;
}

var p1 = createPerson("李四", 20, "男");
var p2 = createPerson("李四1", 201, "男");
var p3 = createPerson("李四2", 210, "男");
console.log(p1);
console.log(p2);
console.log(p3);
```

**`this`的第一种用法**
如果一个方法通过`对象.方法()`来调用,则方法中的this就表示前面那个对象.
