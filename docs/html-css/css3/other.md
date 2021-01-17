
## 时间动画

运动的路程, 应该是时间的函数

`f(t)`

`p`归一化的时间

1. 匀速运动

   ```JavaScript
   dis * p
   ```

2. 匀加速

   ```JavaScript
   dis * p * p
   ```

3. 匀减速

   ```JavaScript
   dis * (2 - p) * p
   ```

4. 正弦

   ```JavaScript
   dis * sin(2 * pi * p)
   ```

```javascript
p
p * p
(2 - p) * p
sin(2 * pi * p)

动画算子:
```





# 十.`nonzero`和`evenodd`填充规则

​	只要是路径填充，都有两种规则，nonzero和evenodd，无论是SVG中的路径填充，还是Canvas中的路径填充，如果还有其他和路径相关的技术（甚至设计软件），也离不开这两种填充规则。

​	填充规则的关键，就是确定复杂路径构成的图形，哪些是内部，哪些是外部。内部则填充，外部则透明。

```
“nonzero规则”顾名思意就是“非零规则”，用通俗的话讲，就算计算某些东西是不是0，如果不是0则内部，填充；如果是0则外部，不填充。
nonzero规则计算顺时针逆时针数量。
(将射线和路径方向起点移动至同一零点;固定射线,转动路径方向至射线方向是否为顺时针,顺时针方向则+1，如果是逆时针方向则-1,最后计算数值)

“evenodd规则”顾名思意就是“奇偶规则”，用通俗的话讲，就算计算某些东西是不是奇数，如果是是奇数则内部，填充；如果是偶数则外部，不填充。
evenodd是交叉路径数量。

nonzero是计算顺时针逆时针数量，evenodd是交叉路径数量。
```


# Bootstrap(迅速、简单)

```
UI库
	foundation
	bootstrap
```



```
固定容器	  阈值		标记		  width
			1200px		lg			1170
			992px		md			970
			768px		sm			750
			<768		xs			auto
```

```
less
~"calc()"
阻止解析
变量用作选择器或者:@{}
```



栅格系统源码分析

自定义栅格系统

```

```



less中的函数

```

```



bootstrap盒模型的设计

```
容器
    padding-left:  15px;
    padding-right: 15px;

行
    margin-left:  -15px;
    margin-right: -15px;

列
    padding-left:  15px;
    padding-right: 15px;
```



```
列padding-->槽宽
行有负margin是为了在和列嵌套时不破坏槽宽
因为行有负margin 才需要容器要有正padding来抵消 这样容器可以包住行
```
