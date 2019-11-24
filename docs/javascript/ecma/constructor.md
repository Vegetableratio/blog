# 构造函数

## 构造函数和普通函数的区别

共同点:

1. 他们都是函数
2. 函数上的一些特点都可以用在构造 函数上.

不同点:

1. 如果一个函数, 使用`new`的方式来调用, 那么这个函数就是构造函数.
2. 如果一个函数, 调用的时候不使用`new`, 那么这个函数就是普通的函数.
3. 为了使用的时候方便, 一般情况都是如果向当做构造函数, 则所有函数名中所有单词的首字母大写(`大驼`).

## 类型(类)和对象的关系

张三 是个对象, 人类就是张三的类型.
大黄 是一个狗(对象), 狗就是大黄的类型

类型和对象的关系: 抽象和具体

面向对象分析:
​    先有对象, 分析出来类型怎么设计.

代码实现:
​    先有类型, 再根据需要创建对象.

- 在ES6之前, 是由构造函数来充当类型的职责.
- 构造函数和一个普通的函数的唯一的区别:他们的调用方式不一样.

- 构造函数必须通过`new`来调用

**`this`的第二种用法**
当`new`一个构造函数的, 构造函数中的`this`表示这次创建出来的那个对象.

```javascript
<script>
/*
使用构造来创建 二维平面上的点

属性:
    x属性  x标准
    y属性  y坐标

方法:
    计算一个点与另外一个点之间的距离
*/
function Point(x, y){
    this.x = x;
    this.y = y;
    this.distance = function (other){
        if(!other instanceof Point){
            throw new Error("类型错误, 请传入一个Point类型的对象!")
        }

        // this 和other之间的距离
        return Math.sqrt((this.x - other.x) * (this.x - other.x) + (this.y - other.y) * (this.y - other.y));
    };
}

/*
表示平面上的圆
属性:
    圆心
        圆心的类型应该是个Point
    半径
方法:
    求面积
    求周长
    两个圆的圆心之间的距离
*/
function Circle(center, r){
    this.center = center;
    this.r = r;
    this.area = function (){
        return Math.PI * this.r * this.r;
    };
    this.zhouchang = function (){
        return Math.PI * 2 * this.r;
    };
    this.centetDis = function (other){
        var p1 = this.center;
        var p2 = other.center;
        return p1.distance(p2);
    }
}

var c1 = new Circle(new Point(10, 20), 100);
console.log(c1.area());
console.log(c1.zhouchang());
var c2 = new Circle(new Point(10, 10), 50);
console.log(c1.centetDis(c2));
```
