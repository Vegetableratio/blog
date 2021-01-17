# 基本使用

## 虚拟`DOM`

虚拟 DOM 的两种创建方式:

1.使用 jsx 创建

```jsx
const VDOM /* 此处一定不要写引号，因为不是字符串 */ = (
  <h1 id="title">
    <span>Hello,React</span>
  </h1>
);
```

2.使用`React`提供的`createElement`方法创建

```js
const VDOM = React.createElement(
  "h1",
  { id: "title" },
  React.createElement("span", {}, "Hello,React")
);
```

关于虚拟`DOM`  
1.本质是`Object`类型的对象（一般对象）  
2.虚拟`DOM`比较“轻”，真实`DOM`比较“重”，因为虚拟`DOM`是`React`内部在用，无需真实`DOM`上那么多的属性。  
3.虚拟`DOM`最终会被`React`转化为真实`DOM`，呈现在页面上。

## `jsx`的基本语法规则

```
1.定义虚拟DOM时，不要写引号。
2.标签中混入JS表达式时要用{}。
3.样式的类名指定不要用class，要用className。
4.内联样式，要用style={{key:value}}的形式去写。
5.只有一个根标签
6.标签必须闭合
7.标签首字母
    (1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
    (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
```

## 组件

1.函数式组件

```jsx
//1.创建函数式组件
function MyComponent() {
  return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>;
}
//2.渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById("test"));
/* 
执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
    1.React解析组件标签，找到了MyComponent组件。
    2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/
```

2.类组件

```jsx
//1.创建类式组件
class MyComponent extends React.Component {
  render() {
    //render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
    //render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
    return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>;
  }
}
//2.渲染组件到页面
ReactDOM.render(<MyComponent />, document.getElementById("test"));
/* 
  执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
      1.React解析组件标签，找到了MyComponent组件。
      2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
      3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/
```

## 组件实例属性之:`state`

```jsx
//1.创建组件
class Weather extends React.Component {
  //构造器调用几次？ ———— 1次
  constructor(props) {
    console.log("constructor");
    super(props);
    //初始化状态
    this.state = { isHot: false, wind: "微风" };
    //解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this);
  }

  //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
  render() {
    console.log("render");
    //读取状态
    const { isHot, wind } = this.state;
    return (
      <h1 onClick={this.changeWeather}>
        今天天气很{isHot ? "炎热" : "凉爽"}，{wind}
      </h1>
    );
  }

  //changeWeather调用几次？ ———— 点几次调几次
  changeWeather() {
    //changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
    //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

    console.log("changeWeather");
    //获取原来的isHot值
    const isHot = this.state.isHot;
    //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
    this.setState({ isHot: !isHot });
    console.log(this);

    //严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
    //this.state.isHot = !isHot //这是错误的写法
  }
}
//2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById("test"));
```

生产开发中简写:

```jsx
//1.创建组件
class Weather extends React.Component {
  //初始化状态
  state = { isHot: false, wind: "微风" };

  render() {
    const { isHot, wind } = this.state;
    return (
      <h1 onClick={this.changeWeather}>
        今天天气很{isHot ? "炎热" : "凉爽"}，{wind}
      </h1>
    );
  }

  //自定义方法————要用赋值语句的形式+箭头函数
  changeWeather = () => {
    const isHot = this.state.isHot;
    this.setState({ isHot: !isHot });
  };
}
//2.渲染组件到页面
ReactDOM.render(<Weather />, document.getElementById("test"));
```

注意点:

```html
1.render方法中的this为组件实例对象 2.组件中自定义方法中this为undefined解决方式:
1)bind改变this指向 2)使用赋值语句+箭头函数方式 3.状态数据不能直接修改或更新
```

## 组件实例属性之:`props`

```jsx
//创建组件
class Person extends React.Component {
  render() {
    const { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    );
  }
}

//对标签属性进行类型、必要性的限制
Person.propTypes = {
  name: PropTypes.string.isRequired, //限制name必传，且为字符串
  sex: PropTypes.string, //限制sex为字符串
  age: PropTypes.number, //限制age为数值
  speak: PropTypes.func, //限制speak为函数
};
//指定默认标签属性值
Person.defaultProps = {
  sex: "男", //sex默认值为男
  age: 18, //age默认值为18
};

//渲染组件到页面
ReactDOM.render(
  <Person name="jerry" age={19} sex="男" />,
  document.getElementById("test1")
);
ReactDOM.render(
  <Person name="tom" age={18} sex="女" />,
  document.getElementById("test2")
);

const p = { name: "老刘", age: 18, sex: "女" };
ReactDOM.render(<Person {...p} />, document.getElementById("test3"));
```

简写

```jsx
//创建组件
class Person extends React.Component {
  constructor(props) {
    //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
    super(props);
    console.log("constructor", this.props);
  }

  //对标签属性进行类型、必要性的限制
  static propTypes = {
    name: PropTypes.string.isRequired, //限制name必传，且为字符串
    sex: PropTypes.string, //限制sex为字符串
    age: PropTypes.number, //限制age为数值
  };

  //指定默认标签属性值
  static defaultProps = {
    sex: "男", //sex默认值为男
    age: 18, //age默认值为18
  };

  render() {
    // console.log(this);
    const { name, age, sex } = this.props;
    //props是只读的
    //this.props.name = 'jack' //此行代码会报错，因为props是只读的
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    );
  }
}

//渲染组件到页面
ReactDOM.render(<Person name="jerry" />, document.getElementById("test1"));
```

函数组件使用`props`

```jsx
//创建组件
function Person(props) {
  const { name, age, sex } = props;
  return (
    <ul>
      <li>姓名：{name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{age}</li>
    </ul>
  );
}
Person.propTypes = {
  name: PropTypes.string.isRequired, //限制name必传，且为字符串
  sex: PropTypes.string, //限制sex为字符串
  age: PropTypes.number, //限制age为数值
};

//指定默认标签属性值
Person.defaultProps = {
  sex: "男", //sex默认值为男
  age: 18, //age默认值为18
};
//渲染组件到页面
ReactDOM.render(<Person name="jerry" />, document.getElementById("test1"));
```

## 组件实例属性之:`refs`

使用`ref`的三种方式:  
1.字符串形式

```jsx
//创建组件
class Demo extends React.Component {
  render() {
    return (
      <div>
        <input ref="input1" type="text" placeholder="点击按钮提示数据" />
      </div>
    );
  }
}
```

2.回调函数形式

```jsx
class Demo extends React.Component {
  //展示左侧输入框的数据
  showData = () => {
    const { input1 } = this;
    alert(input1.value);
  };
  //展示右侧输入框的数据
  showData2 = () => {
    const { input2 } = this;
    alert(input2.value);
  };
  render() {
    return (
      <div>
        <input
          ref={(c) => (this.input1 = c)}
          type="text"
          placeholder="点击按钮提示数据"
        />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
        <input
          onBlur={this.showData2}
          ref={(c) => (this.input2 = c)}
          type="text"
          placeholder="失去焦点提示数据"
        />
        &nbsp;
      </div>
    );
  }
}
```

注意:回调`ref`中回调执行次数的问题  
如果`ref`回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数`null`，然后第二次会传入参数`DOM`元素。这是因为在每次渲染时会创建一个新的函数实例，所以`React`清空旧的`ref`并且设置新的。通过将`ref`的回调函数定义成`class`的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

3.`createRef`

```jsx
class Demo extends React.Component {
/* 
  React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
*/
  myRef = React.createRef();
  myRef2 = React.createRef();
  //展示左侧输入框的数据
  showData = () => {
    alert(this.myRef.current.value);
  };
  //展示右侧输入框的数据
  showData2 = () => {
    alert(this.myRef2.current.value);
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据" />
        &nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
        <input
          onBlur={this.showData2}
          ref={this.myRef2}
          type="text"
          placeholder="失去焦点提示数据"
        />
        &nbsp;
      </div>
    );
  }
}
```

## 事件处理

(1).通过onXxx属性指定事件处理函数(注意大小写)  
  a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性  
  b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效  
(2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref  

## 受控组件与非受控组件

一言以概:组件的状态由代码管理为受控组件,反之为非受控.  
可以参考[官网案例](https://zh-hans.reactjs.org/docs/uncontrolled-components.html)
