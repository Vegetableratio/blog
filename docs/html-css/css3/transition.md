# 过渡`transition`

- 开启过度的属性`transition-property:all`慎用

   过度需要的时间   `transition-duration:`    单位m,ms

- 过渡延迟时间   `transiton-delay:`   单位s

- 时间函数(动画算子)   `transition-timing-function:`

  - `ease`  默认值
  - `ease-in`
  - `ease-out`
  - `ease-in-out`
  - `linear`    线性
  - `step-start`   时间开始后立即变换
  - `step-end`   时间到后变换
  - `steps(3,end)`   **阶跃函数** 参数1:变换时间分的段数  参数2:过度的时间点(end/start)

- 属性的简写

```css
div{/*先周期后延迟 顺序一定!*/
    transition: width 5s 1s ease,height 1s,...
}
```

```css
    div {
        width: 100px;
        height: 100px;
        background: #16cc32;
        /*transition-property: width ,height ,background;*/
        /*transition-duration: 5s;*/
        /*transition-delay: 1s;*/
        /*transition-timing-function: steps(5,end);*/
        transition: width 5s 1s ease, height 2s 1s ease-in-out, background 9s steps(9, end);
    }

    div:hover {
        width: 300px;
        height: 300px;
        background: #ae4026;
    }
```
