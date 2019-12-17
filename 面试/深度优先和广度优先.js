/*深度优先遍历三种方式*/
let deepTraversal1 = (node, nodeList = []) => {
    if (node !== null) {
        nodeList.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            deepTraversal1(children[i], nodeList)
        }
    }
    return nodeList
}
let deepTraversal2 = (node) => {
    let nodes = []
    if (node !== null) {
        nodes.push(node)
        let children = node.children
        for (let i = 0; i < children.length; i++) {
            nodes = nodes.concat(deepTraversal2(children[i]))
        }
    }
    return nodes
}
// 非递归
let deepTraversal3 = (node) => {
    let stack = []
    let nodes = []
    if (node) {
        // 推入当前处理的node
        stack.push(node)
        while (stack.length) {
            let item = stack.pop()
            let children = item.children
            nodes.push(item)
            // node = [] stack = [parent]
            // node = [parent] stack = [child3,child2,child1]
            // node = [parent, child1] stack = [child3,child2,child1-2,child1-1]
            // node = [parent, child1-1] stack = [child3,child2,child1-2]
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}

// 广度优先
let widthTraversal2 = (node) => {
    let nodes = []
    let stack = []
    if (node) {
        stack.push(node)
        while (stack.length) {
            let item = stack.shift()
            let children = item.children
            nodes.push(item)
            // 队列，先进先出
            // nodes = [] stack = [parent]
            // nodes = [parent] stack = [child1,child2,child3]
            // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
            // nodes = [parent,child1,child2]
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }

// console.log('script start');

// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');
//=================
// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     new Promise(function (resolve) {
//         console.log('promise1');
//         resolve();
//     }).then(function () {
//         console.log('promise2');
//     });
// }
// console.log('script start');

// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
// async1();

// new Promise(function (resolve) {
//     console.log('promise3');
//     resolve();
// }).then(function () {
//     console.log('promise4');
// });

// console.log('script end');


/**
 * script start
 * async1 start
 * promise1
 * promise3
 * script end
 * async1 end
 * promise2
 * promise4
 * setTimeout
 */
/**
 * script start
 * async1 start
 * promise1
 * promise3
 * script end
 * promise2
 * async1 end
 * promise4
 * setTimeout
 */

//==========

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     setTimeout(function () {
//         console.log('setTimeout1')
//     }, 0)
// }
// async function async2() {
//     setTimeout(function () {
//         console.log('setTimeout2')
//     }, 0)
// }
// console.log('script start');

// setTimeout(function () {
//     console.log('setTimeout3');
// }, 0)
// async1();

// new Promise(function (resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function () {
//     console.log('promise2');
// });
// console.log('script end');
/**
 * script start
 * async1 start
 * promise1
 * script end
 * promise2
 * setTimeout3
 * setTimeout2
 * setTimeout1
 */

//========================


// async function a1() {
//     console.log('a1 start')
//     await a2()
//     console.log('a1 end')
// }
// async function a2() {
//     console.log('a2')
// }

// console.log('script start')

// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)

// Promise.resolve().then(() => {
//     console.log('promise1')
// })

// a1()

// let promise2 = new Promise((resolve) => {
//     resolve('promise2.then')
//     console.log('promise2')
// })

// promise2.then((res) => {
//     console.log(res)
//     Promise.resolve().then(() => {
//         console.log('promise3')
//     })
// })
// console.log('script end')

/**
 * script start
 * a1 start
 * a2
 * promise2
 * script end
 * promise1
 * a1 end
 * promise2.then
 * promise3
 * setTimeout
 */

let a = 0
let b = async () => {
    a = a + await 10
    console.log('2', a) // -> '2' 10
}
b()
a++
console.log('1', a) // -> '1' 1