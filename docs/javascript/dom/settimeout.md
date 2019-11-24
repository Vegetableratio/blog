# 定时器

```javascript
setTimeout(function(){
    console.log("时间到");
},5000);
//5s后,把函数放入到事件队列中
```

```javascript
setInterval(function(){
    console.log("a");
},5000);
//每隔5s,把函数放入到事件队列中
```

清除定时器

`clearTimeout()` `clearInterval()`需要获取ID

```javascript
requestAnimationFrame(function(){

})
```

清除定时器

`cancelAnimationFrame()`
