# `HTML`常用标签

## 1.`<html>`标签

根标签，一个页面中有且只有一个根标签，网页中的所有内容都应该写在`html`根标签中.

## 2.`<head>`标签

该标签中的内容，不会在网页中直接显示，它用来帮助浏览器解析页面的.

## 3.`<title>`标签

默认会显示在浏览器的标题栏中，搜索引擎在检索页面时，会首先检索title标签中的内容，它是网页中对于搜索引擎来说最重要的内容，会影响到网页在搜索引擎中的排名.

## 4.`<body>`标签

用来设置网页的主体内容，网页中所有可见的内容，都应该在`body`中编写.

## 5.`<meta>`标签

`<meta>`标签用来设置网页的一些元数据，比如网页的字符集，关键字、简介

`<meta>`是一个自结束标签，编写一个自结束标签时，可以在开始标签中添加 一个/

使用`<meta>`标签还可以用来设置网页的关键字；
还可以用来指定网页的描述，搜索引擎在检索页面时，会同时检索页面中的关键词和描述，但是这两个值不会影响页面在搜索引擎中的排名；
使用`<mate>`可以用来做请求的重定向

```html
<meta http-equiv="refresh" content="秒数;url=目标路径"/>
```

```html
<meta name="keywords" content="HTML5,JavaScript,前端,Java"/>

<meta name="description" content="发布h5、js等前端相关的信息"/>

<meta http-equiv="refresh" content="5;url=http://www.baidu.com"/>
```

## 6.标题标签

在HTML中，一共有六级标题标签，`h1 ~ h6`在显示效果上h1最大，h6最小；但是文字的大小我们并不关心，使用HTML标签时，关心的是标签的语义，我们使用的标签都是语义化标签。

6级标题中，`h1`的最重要，表示一个网页中的主要内容，`h2 ~ h6`重要性依次降低。对于搜索引擎来说，h1的重要性仅次于`title`，搜索引擎检索完`title`，会立即查看`h1`中的内容。`h1`标签非常重要，它会影响到页面在搜索引擎中的排名，页面只能写一个`h1`。一般页面中标题标签只使用`h1` `h2` `h3`,`h3`以后的基本不使用。

## 7.`<a>`标签

```html
<a href="#">XXX</a>
```

`#`为目标地址,默认表示点击回到顶部.
`target`: 你希望用什么样的方式打开新链接
`_blank` 在新的页面中打开
`_self`  默认行为
跳转到指定位置需要配合`id`属性一起使用

```html
<a href="#zjl">周杰伦</a>
<h3 id="zjl">周杰伦</h3>
```

*关于`a`标签的伪类顺序要求的一些解释*
1.从特殊性上将一致
2.从状态上讲`link`和`visited`只存在一种状态
3.从动作顺序上来讲先有`hover`后才能执行`active`

## 8.`<br>`和`<hr>`

`br`: break row
标签的作用: 换行
其实在实际开发的时候很少使用.想换行, 应该考虑是否应该用新的段落.
`hr`水平的分割线.
也很少使用.

## 9`<img>`标签

是自闭和标签, 像`<meta>`

```html
<img src="图片地址" alt="图片的描述" title="" >
```

说明:

1. `src`: `source` 图片的源. 地址的写法和昨天讲的`<a>`标签的`href`属性的写法完全一样.
2. `alt="图片加载失败"` 这个属性, 在图片加载失败的时候会显示出来.
3. 图片的尺寸的修改: `widht`, `height`.设置的时候, 最好只设置一个, 这样不会造成图片的拉伸;不需要单位, 默认就是像素.

图片格式:

- `JPEG(JPG)`: 图片支持的颜色比较多，图片可以压缩，但是不支持透明,一般使用JPEG来保存照片等颜色丰富的图片
- `GIF`:支持的颜色少，只支持简单的透明，支持动态图.图片颜色单一或者是动态图时可以使用gif
- `PNG`:支持的颜色多，并且支持复杂的透明,可以用来显示颜色复杂的透明的图片

图片的使用原则：效果不一致，使用效果好的;效果一致，使用小的

   ​

## 10.列表

- 有序列表
- 无序列表
- 定义列表

### 10.1无序列表

`ul`,`li`
`ul`:`unordered list`

```html
<ul>
    <li></li>
    <li></li>
</ul>
```

注意:

1. `<li>`一定要放在`<ul>`中, 否则的话, `<li>`的语义不正确.
2. `<ul>`只能直接放置`<li>`, 不要放置其他的标签.
3. 常用的地方: 网页的导航的地方一般喜欢用无序列表.

代码案例:

```html
    <ul>
      <li>
        <h3>主食</h3>
        <ul>
          <li>米饭</li>
          <li>面条</li>
          <li>大饼</li>
        </ul>
      </li>
      <li>
        <h3>副食</h3>
        <ul>
          <li>鸡腿</li>
          <li>鸭腿</li>
          <li>牛肉</li>
        </ul>
      </li>
      <li>
        <h3>点心</h3>
        <ul>
          <li>蛋糕</li>
          <li>冰激凌</li>
          <li>团子</li>
        </ul>
      </li>
    </ul>
```

### 10.2有序列表

`ol, li`

`ol`: `ordered list`

```html
<ol>
    <li></li>
    <li></li>
</ol>
```

注意:
1.`<ol>`和 `<ul>` 仅仅是语义上的差别.
2.`<ol>`应该只直接嵌套`<li>` , 不应该嵌套其他元素.
3.`<ol>` 在实际开发中使⽤较少, 不如 `<ul>` 使⽤⼴泛. 即使我们需要⽤到数字序号的时候, 也会⼿动添加, ⽽不太喜欢使⽤`<ol>`

### 10.3定义列表

`dl`: `definition list`
`dt`: `definition title`
`dd:` `definition description`

```html
<dl>
    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dd></dd>
    <dd></dd>

    <dt></dt>
    <dt></dt>
    <dd></dd>

    <dt></dt>
    <dt></dt>
    <dd></dd>
    <dd></dd>
</dl>
```

## 11.表单标签

### 11.1`<form>`标签

`<form>`至少包含以下两个元素:

- `action`:点击提交按钮把数据发送到服务器的地址
- `method`:发送数据时使用`http`方法,主要是两个值:`get`,`post`,默认`get`

表单小部件:

```html
<form action="" method="">
    <input type="">
</form>
```

### 11.2`type`属性的值

- `text`:输入纯文本
- `passward`:输入密码,输入的值用*显示
- `radio`:单选按钮,多个radio可以做到只允许选中其中一个,只需将这些`radio`的`name`属性的值保持一致
- `checkbox`:多选框
  - 属性`checked="checked"`属性名与属性值一致,可以让某个单选框或者多选框默认被选中
  - 属性名和属性值一样的属性,属性值可以省略
- `submid`:提交数据
- `reset`:重制表单内容

### 11.3`<label>`标签

`<label>`标签为`input` 元素定义标注（标记）.

```html
<label for="input的id值"></label>
```

或直接用`<label>`标签包裹

### 11.4`<select>`标签

表示下拉列表

```html
<select name="provice" size="显示的个数" multiple >
    <option value="bj">北京</option>
    <option value="sh">上海</option>
    <option value="gd">广东</option>
    <option value="sd">山东</option>
</select>
```

- `size` 显示的个数
- `multiple` 是否允许多选,`multiple=multiple`;属性和属性值一致时可以简写

### 11.5`<textarea>`标签

- `cols` 列数
- `rows`行数

```html
<textarea cols="" rows=""></textarea>
```

表单代码案例:

```html
<form action="#" method="post">
<div>
    <label>用户名:
    <input type="text" name="username" /></label>
</div>
<div>
    <label>密码:
    <input type="password" name="password" /></label>
</div>
<div>性别:
    <label>男
        <input type="radio" name="sex" value="male" checked="checked" />
    </label>
    <label>女
        <input type="radio" name="sex" value="female" />
    </label>
</div>
<div>爱好:
    <label>敲代码
        <input type="checkbox" name="code" value="code" />
    </label>
    <label>看电影
        <input type="checkbox" name="movie" value="movie" />
    </label>
    <label>跑步
        <input type="checkbox" name="run" value="run" />
    </label>
</div>
<div>
    <select name="city" size="3" multiple>
    <option value="bj">北京</option>
    <option value="sh">上海</option>
    <option value="cq">重庆</option>
    <option value="gd">广东</option>
    </select>
</div>
<div>
    <label>个人介绍
    <textarea cols="30" rows="10"></textarea>
    </label>
</div>
<input type="submit" value="提交" />
<input type="reset" value="重置" />
</form>
```
