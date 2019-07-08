// 数据类型

// 原始/基础数据类型 — number/string/boolean/null/undefined
// 复杂数据类型 - object对象 — Function/Array/Date...
// JS变量按照存储方式区分为 值类型 和 引用类型
// - https://blog.csdn.net/linxiaoduo/article/details/80117628 (js值类型和引用类型的区别)
// - https://www.cnblogs.com/xuniannian/p/7452086.html (JS中的六大数据类型)




// 数据类型检测
// - https://www.cnblogs.com/zt123123/p/7623409.html

typeof
//适合函数对象和基本类型的判断,遇到 null 失效
// true             --   boolean
// Array            --   function
// NaN              --   number
// undefined        --   undefined
// function         --   function
// new object()     --   object
// null             --   object<历史原因/兼容问题/硬性记忆>《采用严格等于判断NULL类型》
// Object           --   function

obj instanceof Object 
//判断对象类型<基于左边对象的原型链上是否有右边函数对象或函数构造器的prototype属性> //适合自定义对象, 也可以用来检测原生对象
//即 obj.__proto__ = Object.prototype 原型链->对象的_proto_属性指向创建它的构造函数的原型对象Object.prototype
[1,2] instanceof Array === true
new Object() instanceof Array === false

//函数对象或函数构造器<否则抛出prototype异常>
//obj对象<其余直接返回flase>
// 注意： instanceof判断对象是否相等，js按引用来判断，所以两个完全相同的空对象因为不是同一个对象所以也不会相等
// 因此有个坑： 不同window或iframe间的对象类型检测不能使用instanceof!
// 左侧为实例，右侧为原型对象


Object.prototype.toString.call
// JQ采用该方式

//通过{}.toSring拿到, 适合内置对象和基元类型 < 注意：IE6/7/8会有兼容性问题 null和underfined返回 [object,object] >
//Object.prototype.toString.apply(null); === "[object Null]"
//Object.prototype.toString.apply(function(){}); === "[object Function]"
//Object.prototype.toString.apply([]); === "[object Arra]"y


constructor // 任何对象都有该属性, 继承自原型, 会指向构造这个对象的构造器或构造函数, 其可以被改写, 使用谨慎
// console.log(({}).constructor === Object); // true
// console.log((function() {}).constructor === Function); // true
// constructor属性是可以被修改的，会导致检测出的结果不正确
function Fn(){};
Fn.prototype = new Array();
var f = new Fn();
console.log(f.constructor === Fn); // false
console.log(f.constructor === Array); // true


duck
// type(鸭子类型) 特征判断  join()、push() 函数 / 方法
// 比如判读是不是数组 判断length是不是数字 有没有join().push()方法等





// 垃圾回收机制
// JavaScript垃圾回收的机制很简单：找出不再使用的变量，然后释放掉其占用的内存，
// 但是这个过程不是时时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。