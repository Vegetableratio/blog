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

只读属性`XMLHttpRequest.responseXML`，它返回一个包含请求检索的`HTML`或`XML`的Document，如果请求未成功，尚未发送，或者检索的数据无法正确解析为`XML`或`HTML`，则为`null`。默认是当作“text/xml” 来解析。当`responseType`设置为 “document” 并且请求已异步执行时，响应将被当作 “text/html” 来解析。

`responseXML`对于任何其他类型的数据以及`data:URLs`为`null`。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// 如果已指明，responseType 必须是空字符串或 "document"
xhr.responseType = 'document';

// overrideMimeType() 用来强制解析 response 为 XML
xhr.overrideMimeType('text/xml');

xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseXML);
    }
  }
};

xhr.send(null);
```

### <a id="status">status</a>

只读属性`XMLHttpRequest.status`返回了`XMLHttpRequest`响应中的数字状态码。`status`的值是一个无符号短整型。在请求完成前，`status`的值为0。值得注意的是，如果`XMLHttpRequest`出错，浏览器返回的`status`也为0。

`status`码是标准的`HTTP status codes`。举个例子，status 200 代表一个成功的请求。如果服务器响应中没有明确指定status码，XMLHttpRequest.status将会默认为200。

```js
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.status);

xhr.open('GET', '/server', true);
console.log('OPENED', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING', xhr.status);
};

xhr.onload = function () {
  console.log('DONE', xhr.status);
};

xhr.send(null);

/**
 * 输出如下：
 *
 * UNSENT（未发送） 0
 * OPENED（已打开） 0
 * LOADING（载入中） 200
 * DONE（完成） 200
 */
 ```

### <a id="statusText">statusText</a>

只读属性`XMLHttpRequest.statusText`返回了`XMLHttpRequest`请求中由服务器返回的一个`DOMString`类型的文本信息，这则信息中也包含了响应的数字状态码。不同于使用一个数字来指示的状态码`XMLHTTPRequest.status`，这个属性包含了返回状态对应的文本信息，例如"OK"或是"Not Found"。如果请求的状态`readyState`的值为"UNSENT"或者"OPENED"，则这个属性的值将会是一个空字符串。

如果服务器未明确指定一个状态文本信息，则`statusText`的值将会被自动赋值为"OK"。

```js
var xhr = new XMLHttpRequest();
console.log('0 UNSENT', xhr.statusText);

xhr.open('GET', '/server', true);
console.log('1 OPENED', xhr.statusText);

xhr.onprogress = function () {
  console.log('3 LOADING', xhr.statusText);
};

xhr.onload = function () {
  console.log('4 DONE', xhr.statusText);
};

xhr.send(null);

/**
 * 输出如下:
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
 ```

### <a id="timeout">timeout</a>

`XMLHttpRequest.timeout`是一个无符号长整型数，代表着一个请求在被自动终止前所消耗的毫秒数。默认值为0，意味着没有超时。超时并不应该用在一个`document environment`中的同步`XMLHttpRequests`请求中，否则将会抛出一个`InvalidAccessError`类型的错误。当超时发生，<a href="#timeout">timeout事件</a>将会被触发。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.timeout = 2000; // 超时时间，单位是毫秒

xhr.onload = function () {
  // 请求完成。在此进行处理。
};

xhr.ontimeout = function (e) {
  // XMLHttpRequest 超时。在此做某事。
};

xhr.send(null);
```

### <a id="upload">upload</a>

`XMLHttpRequest.upload`属性返回一个`XMLHttpRequestUpload`对象，用来表示上传的进度。这个对象是不透明的，但是作为一个`XMLHttpRequestEventTarget`，可以通过对其绑定事件来追踪它的进度。

可以被绑定在upload对象上的事件监听器如下：
|事件           |相应属性的信息类型|
|:--------------|:----------|
|onloadstart    |获取开始|
|onprogress     |数据传输进行中|
|onabort        |获取操作终止|
|onerror        |获取失败|
|onload         |获取成功|
|ontimeout      |获取操作在用户规定的时间内未完成|
|onloadend      |获取完成（不论成功与否）|

### <a id="withCredentials">withCredentials</a>

`XMLHttpRequest.withCredentials`属性是一个Boolean类型。它指示了是否该使用类似cookies,authorization headers(头部授权)或者TLS客户端证书这一类资格证书来创建一个跨站点访问控制（cross-site Access-Control）请求。在同一个站点下使用`withCredentials`属性是无效的。

此外，该标志还用于指示何时在响应中忽略`cookie`。默认为`false`。

来自其他域的`XMLHttpRequest`不能为自己的域设置`cookie`值，除非在发出请求之前将`withCredentials`设置为`true`。通过将`withCredentials`设置为`true`获得的第三方`cookie`仍将遵循同源策略，因此请求脚本无法通过`document.cookie`或从响应标头访问。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```

## 方法

相关方法

### <a id="abort">abort()</a>

如果该请求已被发出，`XMLHttpRequest.abort()`方法将终止该请求。当一个请求被终止，它的`readyState`属性将被置为0(UNSENT)。

### <a id="getAllResponseHeaders">getAllResponseHeaders()</a>

`XMLHttpRequest.getAllResponseHeaders()`方法返回所有的响应头，以`CRLF`分割的字符串，或者`null`如果没有收到任何响应。

注意：对于复合请求(multipart requests)，这个方法返回当前请求的头部，而不是最初的请求的头部。

```js
var headers = XMLHttpRequest.getAllResponseHeaders();
```

### <a id="getResponseHeader">getResponseHeader()</a>

`XMLHttpRequest.getResponseHeader()`方法返回包含指定头文本的字符串。

如果在返回头中有多个一样的名称，那么返回的值就会是用逗号和空格将值分隔的字符串。`getResponseHeader()`方法以UTF字节序列的形式返回值。搜索标题名称是不区分大小写的。

```js
var myHeader = getResponseHeader(name);
# 如果响应尚未收到，或者响应中不存在标头，则返回null。
```

### <a id="open">open()</a>

`XMLHttpRequest.open()`方法初始化一个请求。

```js
xhrReq.open(method, url [,async, user, password]);
/*
参数:
    method
        要使用的HTTP方法，比如「GET」、「POST」、「PUT」、「DELETE」、等。对于非HTTP(S)URL被忽略。
    url
        一个DOMString表示要向其发送请求的URL。
    async
        表示要不要异步执行操作，默认为true。
    user/passworld
        用于认证,默认null
*/
```

### <a id="overrideMimeType">overrideMimeType()</a>

指定一个MIME类型用于替代服务器指定的类型，使服务端响应信息中传输的数据按照该指定[MIME](https://www.iana.org/assignments/media-types/media-types.xhtml)类型处理。

例如强制使流方式处理为"text/xml"类型处理时会被使用到，即使服务器在响应头中并没有这样指定。此方法必须在send()方法之前调用方为有效。

```js
XMLHttpRequest.overrideMimeType(mimeType)
```

### <a id="send">send()</a>

`XMLHttpRequest.send()`方法用于发送`HTTP`请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；如果是同步请求，则此方法直到响应到达后才会返回。

`XMLHttpRequest.send()`方法接受一个可选的参数，其作为请求主体；如果请求方法是`GET`或者`HEAD`，则应将请求主体设置为`null`。

如果没有使用`setRequestHeader()`方法设置`Accept`头部信息，则会发送带有"*/*"的`Accept`头部。

### <a id="setRequestHeader">setRequestHeader()</a>

`XMLHttpRequest.setRequestHeader()`是设置`HTTP`请求头部的方法。此方法必须在`open()`方法和`send()`之间调用。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头。

如果没有设置`Accept`属性，则此发送出`send()`的值为此属性的默认值*/* 。

安全起见，有些请求头的值只能由`user agent`设置：`forbidden header names`和`forbidden response header names`.

自定义一些`header`属性进行跨域请求时，可能会遇到"not allowed by Access-Control-Allow-Headers in preflight response"，你可能需要在你的服务端设置"Access-Control-Allow-Headers"。

```js
myReq.setRequestHeader(key, value);
```

## 事件

```js
const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');
const log = document.querySelector('.event-log');

function handleEvent(e) {
    log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
    log.textContent = '';

    const xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;  
}

xhrButtonSuccess.addEventListener('click', () => {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
});

xhrButtonError.addEventListener('click', () => {
    runXHR('https://somewhere.org/i-dont-exist');
});

xhrButtonAbort.addEventListener('click', () => {
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg').abort();
});
```

### <a id="onreadystatechange">onreadystatechange</a>

`XMLHttpRequest.onreadystatechange`会在`XMLHttpRequest`的`readyState`属性发生改变时触发`readystatechange`事件的时候被调用。

这个方法不该用于**同步**的`requests`对象

当一个`XMLHttpRequest`请求被`abort()`方法取消时，其对应的`readystatechange`事件不会被触发。

```js
XMLHttpRequest.onreadystatechange = callback;
# 当readyState的值改变的时候，callback函数会被调用。
```

### <a id="abort">abort</a>

当一个请求终止时`abort`事件被触发，比如程序执行`XMLHttpRequest.abort()`

### <a id="error">error</a>

当请求遇到错误时，将触发`error`事件。

### <a id="load">load</a>

当一个`XMLHttpRequest`请求完成的时候会触发`load`事件。

### <a id="timeout">timeout</a>

当进度由于预定时间到期而终止时，会触发`timeout`事件。

### <a id="loadstart">loadstart</a>

当程序开始加载时，`loadstart`事件将被触发。这个事件可以被`XMLHttpRequest`调用, 也适用于`<img>`和`<video>`元素.

### <a id="loadend">loadend</a>

loadend事件总是在一个资源的加载进度停止之后被触发 (例如，在已经触发“error”，“abort”或“load”事件之后)。这适用于`XMLHttpRequest`调用, 以及`<img>`或`<video>`之类元素的内容。

### <a id="progress">progress</a>

进度事件会被触发用来指示一个操作正在进行中。

xhr.onprogress和xhr.upload.onprogress的区别：这两个都能显示进度百分比，但是，前者显示的是服务器返回的数据，后者是发送给服务器的。例如，我们ajax get一张图片，则前者合适；如果我们是ajax post上传一张图片，则后者合适。
