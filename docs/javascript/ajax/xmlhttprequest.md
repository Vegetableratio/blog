# XMLHttpRequest

通过使用`XMLHttpRequest`来发送`HTTP`请求以实现网站和服务器之间的数据交换。

通过构造函数`XMLHttpRequest()`,创建一个`XMLHttpRequest`实例对象，打开一个 URL，最后发送请求。当所有这些事务完成后，该对象将会包含一些诸如响应主体或`HTTP status`的有用信息。

```js
function reqListener () {
  console.log(this.responseText);
}

const oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://cn.bing.com");
oReq.send();
```

|属性                |方法                   |事件               |
|:----------------- |:----------------------|:-----------------|
|<a href="#readyState">readyState</a>    |<a href="#abort">abort()</a>|<a href="#onreadystatechange">onreadystatechange</a>|
|<a href="#response">response</a>        |<a href="#getAllResponseHeaders">getAllResponseHeaders()</a>|<a href="#abort">abort</a>|
|<a href="#responseType"> responseType</a>|<a href="#getResponseHeader">getResponseHeader()</a>|<a href="#error">error</a>|
|<a href="#responseText">responseText</a>|<a href="#open">open()</a>|<a href="#load">load</a>|
|<a href="#responseURL">responseURL</a>  |<a href="#overrideMimeType">overrideMimeType()</a>|<a href="#loadend">loadend </a>|
|<a href="#responseXML">responseXML</a>  |<a href="#send">send()</a>|<a href="#loadstart">loadstart</a>|
|<a href="#status">status</a>            |<a href="#setRequestHeader">setRequestHeader()</a>|<a href="#progress">progress</a>|
|<a href="#statusText">statusText</a>    |                                       |<a href="#timeout">timeout</a>|
|<a href="#timeout">timeout</a>          |||
|<a href="#upload">upload</a>            |||
|<a href="#withCredentials">withCredentials</a>|||

## 属性

`XMLHttpRequest`相关属性

### <a id="readyState">readyState</a>

`XMLHttpRequest.readyState`属性返回一个`XMLHttpRequest`代理当前所处的状态。一个`XHR`代理总是处于下列状态中的一个：

|值   |状态             |描述               |
|:----|:---------------|:-----------------|
|0    |UNSENT          |代理被创建，但尚未调用`open()`方法。|
|1    |OPENED          |`open()`方法已经被调用。在这个状态中，可以通过`setRequestHeader()`方法来设置请求的头部，可以调用`send()`方法来发起请求。|
|2    |HEADERS_RECEIVED|`send()`方法已经被调用，响应头也已经被接收。|
|3    |LOADING         |响应体部分正在被接收。如果`responseType`属性是“text”或空字符串，`responseText`将会在载入的过程中拥有部分响应数据。|
|4    |DONE            |请求操作已经完成。这意味着数据传输已经彻底完成或失败。|

```js
const xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState 为 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState 为 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState 为 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState 为 4
};

xhr.send(null);
```

只要`readyState`属性发生变化，就会调用相应的处理函数。这个回调函数会被用户线程所调用。

### <a id="response">response</a>

`The XMLHttpRequest response`属性返回响应的正文。返回的类型可以是`ArrayBuffer`、`Blob`、`Document` 、`JavaScript Object`或`DOMString`。这取决于responseType属性。

响应对象的类型取决于`responseType`的值。具体查看<a href="#responseType">responseType支持的值</a>

如果请求尚未完成或未成功，则取值是`null`。例外的，读取文本数据时如果将`responseType`的值设置成"text"或空字符串（""）且当请求状态还在是`LOADING` readyState(3)时，`response`包含到目前为止该请求已经取得的内容。

```js
var url = 'somePage.html'; //一个本地页面

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
```

### <a id="responseType">responseType</a>

可以通过设置`responseType`的值，以便通过特定的类型请求数据。`responseType`要在调用`open()`初始化请求之后调用，并且要在调用`send()`发送请求到服务器之前调用。

`XMLHttpRequest.responseType`属性是一个枚举类型的属性，返回响应数据的类型。它允许我们手动的设置返回数据的类型。默认值为"text"类型。

在工作环境(Work Environment)中的`responseType`值为"document"会被忽略. 当将`responseType`设置为一个特定的类型时，你需要确保服务器所返回的类型和你所设置的返回值类型是兼容的。如果两者类型不兼容，即使服务器返回了数据,返回的数据会变成了`null`。还有一个要注意的是，给一个同步请求设置`responseTyp`e会抛出一个`InvalidAccessError`的异常。

responseType支持以下几种值：
|值              |描述               |
|:--------------|:-----------------|
|""             |将`responseType`设为空字符串与设置为"text"相同，是默认类型（实际上是 DOMString）。|
|"arraybuffer"  |`response`是一个包含二进制数据的`JavaScript ArrayBuffer`。|
|"blob"         |`response`是一个包含二进制数据的`Blob`对象 。|
|"document"     |`response`是一个`HTML Document`或`XML XMLDocument`，这取决于接收到的数据的[MIME](https://www.iana.org/assignments/media-types/media-types.xhtml)类型。|
|"json"         |`response`是一个`JavaScript`对象。这个对象是通过将接收到的数据类型视为`JSON`解析得到的。|
|"text"         |`response`是包含在`DOMString`对象中的文本。

### <a id="responseText">responseText</a>

`XMLHttpRequest.responseText`:在一个请求被发送后，从服务器端返回文本

`DOMString`是`XMLHttpRequest`返回的纯文本的值。当`DOMString`为`null`时，表示请求失败了。当`DOMString`为""时，表示这个请求还没有被`send()`

当处理一个异步`request`的时候，尽管当前请求并没有结束，responseText的返回值是当前从后端收到的内容。

当请求状态`readyState`变为`XMLHttpRequest.DONE`(4)，且`status`值为200("OK")时，`responseText`是全部后端的返回数据。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);
```

### <a id="responseURL">responseURL</a>

只读属性`XMLHttpRequest.responseURL`返回响应的序列化`URL`，如果`URL`为空则返回空字符串。如果`URL`有锚点，则位于`URL`#后面的内容会被删除。如果`URL`有重定向，`responseURL`的值会是经过多次重定向后的最终`URL`。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/test', true);
xhr.onload = function () {
  console.log(xhr.responseURL); // http://example.com/test
};
xhr.send(null);
```

### <a id="responseXML">responseXML</a>

### <a id="status">status</a>

### <a id="statusText">statusText</a>

### <a id="timeout">timeout</a>

### <a id="upload">upload</a>

### <a id="withCredentials">withCredentials</a>

## 方法

## 事件

### <a id="onreadystatechange">onreadystatechange</a>

```js
XMLHttpRequest.onreadystatechange = callback;
# 当readyState的值改变的时候，callback函数会被调用。
```
