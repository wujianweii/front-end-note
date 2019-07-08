// 如何查看自身的prototype？ - hasOwnProperty检查 / 更直观？





// 原型链·几个重要的方法

new
// new一个对象的过程
// - 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例
// - https://www.cnblogs.com/kevin2chen/p/6418327.html
// - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new

Object.create()
// - 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__  
// - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Object.hasOwnProperty(prop) 
// - 返回一个布尔值，指示对象是否具有指定的属性作为其自己的属性（而不是继承它）
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

Object.defineProperty(obj, prop, descriptor)
// - 会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
// - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty





// 特性
// - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

configurable
enumerable
writable