作用域
// 作用域就是一套规则，用于确定在何处以及如何查找变量（标识符）的规则
// ？链式作用域 / 作用域链
// - https://www.jianshu.com/p/7685863ca21f
// - https://www.jianshu.com/p/60ca27e185ec

闭包
// http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html (阮一峰)
// 闭包是能够读取其他函数内部变量的函数 - 在JS中，只有函数内部的子函数才能读取局部变量(函数作用域) - 简单理解成 定义在一个函数内部的函数
// 本质上 - 闭包就是将函数内部和函数外部连接起来的一座桥梁

// 最大用处
// 1.可以读取函数内部的变量
// 2.让这些变量的值始终保持在内存中

IIFE (立即执行函数 / 立即调用函数表达式)
// https://www.cnblogs.com/cnfxx/p/7337889.html

内存泄露

垃圾回收机制