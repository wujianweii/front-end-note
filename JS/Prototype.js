// 重要概念

// 原型和原型链是JS实现继承的一种模型。
// 原型链的形成是真正是靠__proto__ 而非prototype


函数对象

function f1(){}; 
var f2 = function(){};
var f3 = new Function('str','console.log(str)');
console.log(typeof f1); //function 
console.log(typeof f2); //function 
console.log(typeof f3); //function  
// 凡是通过 new Function() 创建的对象都是函数对象

// 所有函数对象的proto都指向Function.prototype，它是一个空函数（Empty function）
console.log(Function.prototype)// function(){} (空函数)
// 所有的构造器都来自于Function.prototype，甚至包括根构造器Object及Function自身
Object.__proto__ === Function.prototype  // true
Object.constructor == Function // true

// Function.prototype - 函数对象
Function.prototype.__proto__ === Object.prototype
// Function.prototype是个函数对象，理论上他的__proto__应该指向 Function.prototype，就是他自己，自己指向自己，没有意义。
// JS一直强调万物皆对象，函数对象也是对象，给他认个祖宗，指向Object.prototype。Object.prototype.__proto__ === null，保证原型链能够正常结束。

Object.prototype.__proto__ === null // true


原型对象(即普通对象 - 除Function.prototype ) - Person.prototype // 原型对象（Person.prototype）是 构造函数（Person）的一个实例
Person.prototype.constructor == Person;
console.log(typeof Function.prototype) // Function，这个特殊  函数对象

person1.constructor == Person; // person1 是 构造函数 Person 的实例 // 实例的构造函数属性（constructor）指向构造函数

person1.__proto__ == Person.prototype
// 每个对象都有 __proto__ 属性，但只有函数对象才有 prototype 属性
// JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__ 的内置属性，用于指向创建它的构造函数的原型对象。

// 原型链
Person() - 构造函数 - Person.__proto__ === Function.prototype


// 这个连接存在于实例（person1）与构造函数（Person）的原型对象（Person.prototype）之间，而不是存在于实例（person1）与构造函数（Person）之间


//--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#


function Person(name) {
  this.name = name
}
// 重写原型
Person.prototype = {
  getName: function() {}
}
var p = new Person('jack')
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__ === p.constructor.prototype) // false
console.log(p.constructor === Person) // false
console.log(p.constructor === Object) // true


constructor // 任何对象都有该属性, 继承自原型, 会指向构造这个对象的构造器或构造函数, 其可以被改写, 使用谨慎
// console.log(({}).constructor === Object); // true
// console.log((function() {}).constructor === Function); // true
// constructor属性是可以被修改的，会导致检测出的结果不正确
function Fn(){};
Fn.prototype = new Array(); // 重写原型
var f = new Fn();
console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // true


//--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#--#


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

Object.getOwnPropertyNames()



// 特性
// - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

configurable
enumerable
writable





// 实现继承的方式

function Person() {}
function Student() {}

//1. Student.prototype = Person.prototype; // 问题：实现继承后 在Student上增加方法会改变Person
//2. Student.prototype = new Person(); // Student还只是类 还未创建示例(传参会奇怪) new - 通常用来创建实例
//3. 
Student.prototype = Object.create(Person.prototype); // (ES5之后支持) // 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__

//Object.create()模拟方法
if (!Object.create) {
  Object.create = function(proto) {
    function F() {};
    F.prototype = proto;
    return new F;
  }
}

console.log(Student.prototype.constructor === Person) // true

Student.prototype.constructor = Student; // 保证构造器的一致性