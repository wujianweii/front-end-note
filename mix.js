// 杂记

解决行内块元素出现空白间隙
// https://www.cnblogs.com/bluecoding/p/7513543.html

1px显示
// 

BFC 
// 块级格式化上下文
// https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context#%E4%BD%BF%E7%94%A8display_flow-root
// https://www.cnblogs.com/ranyonsue/p/9204986.html
// https://blog.csdn.net/riddle1981/article/details/52126522
// 形成BFC的条件 display/position/overflow/float
// BFC常见作用- 清除浮动/不被浮动元素覆盖/阻止外边距折叠

url-页面整个渲染过程

事件委托

http协议

性能优化

App开发

Js加载阻塞 解决方案

Vue 的数据双向绑定原理

虚拟dom

diff算法

封装一个双向数据绑定的指令

双向数据绑定

三次四次

mvvm / mvc

内联元素 / 内联块状元素 / 块级元素
// https://www.imooc.com/code/2048 - 2050


https://juejin.im/post/5d23e750f265da1b855c7bbe#heading-35

var b = 10;
(function b() {
  // 内部作用域，会先去查找是有已有变量b的声明，有就直接赋值20，确实有了呀。发现了具名函数 function b(){}，拿此b做赋值；
  // IIFE的函数无法进行赋值（内部机制，类似const定义的常量），所以无效。
  // (这里说的“内部机制”，想搞清楚，需要去查阅一些资料，弄明白IIFE在JS引擎的工作方式，堆栈存储IIFE的方式等)
  // 'use strict' // "Uncaught TypeError: Assignment to constant variable."
  b = 20;
  console.log(b); // [Function b]
  console.log(window.b); // 10，不是20
})();

