# `BOM`事件

## 通过`window`获取窗口尺寸

```javascript
//兼容所有的浏览器
var w = window.innerWidth || document.documentElement.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight;
console.log(w, h);
```

## 通过`window`创建新窗口

`var newWin = open(url,"_blank/self/abc","width,height,top,left...")`

关闭窗口

`newWin.close()`

广告弹窗

```javascript
var newWin;
setTimeout(function (){
    newWin = open("new.html", "", "width=100, height=100");
    setInterval(function (){
        if(newWin.closed){
            newWin = open("new.html", "", "width=100, height=100");
        }
    }, 1000)
}, 4000);
```

## `Location`

```JavaScript
http://www.baid.com:8080/a/b/index.html?name=lisi&pwd=zs
http : //网络访问协议
www.baid.com:8080 //host
www.baid.com  //hostName
8080   //port
a/b/index.html  //path
?name=lisi&pwd=zs //search
```

`replace`和`assgin`

## `History`

```javascript
history.length   //历史记录中的个数
history.forward() // 向前
history.back()  //向后
history.go(2)  // 正数是向前走, 负数是向后者.   向前两个页面
history.go(-2)  // 正数是向前走, 负数是向后者.   向后两个页面
```

## `navigator`

```javascript
document.write("appCodeName: " + navigator.appCodeName + "<br/>");
document.write("appName: " + navigator.appName + "<br/>");
document.write("appVersion: " + navigator.appVersion + "<br/>");
document.write("systemLanguage : " + navigator.systemLanguage + "<br/>");
document.write("language: " + navigator.language + "<br/>");
document.write("onLine: " + navigator.onLine + "<br/>");
document.write("cookieEnabled : " + navigator.cookieEnabled + "<br/>");
document.write("platform: " + navigator.platform + "<br/>");
document.write("userAgent: " + navigator.userAgent + "<br/>");
document.write("plugins: " + navigator.plugins + "<br/>");
```
