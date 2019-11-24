# 对象类型的检测

1. `typeof` 检测
    结果:
    - `number`
    - `string`
    - `boolean`
    - `undefined`
    - `function`
    - `object`

    缺点:

    - 检测对象的时候, 结果没有实际参考意义.如果是检测的基本类型的数据, 才有用.

2. `instanceof`检测
    专门用来检测某个对象是否属于某个类型

    检测结果是`boolean`值

    ```javascript
    console.log(p2 instanceof Person);
    console.log(p1 instanceof Person);
    ```
