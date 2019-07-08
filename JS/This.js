// this
// https://www.imooc.com/video/6430 慕课网·JavaScript深入浅出·this


// ## 0. 全局的this(浏览器)


// ## 1.一般函数的 this(浏览器)

function f1() { //指向 window
	return this;
}
f1() === window; // true, global object(NodeJS)

function f2() { // 严格模式下"use strict"  指向undefined
	"use strict"; // see strict mode
	return this;
}
f2() === undefined;


// ## 2.作为对象方法的函数中的 this - 指向对象本身

// 把函数作为一个对象属性的值时，也称为一个对象的方法
// 并不是看函数怎么创建的，只要该函数作为对象的方法即可

var o = {
	prop: 37,
	f: function () {
		return this.prop; //this 指向对象o
	}
};
console.log(o.f());//logs 37

var o = { prop: 37 };
function independent(){
	return this.prop;
}
o.f = independent;
console.log(o.f());//logs 37


// ## 3.对象原型链上的 this - 不论对象原型链上的 this 还是对象本身的 this 都可以指向该对象

var o = { f: function () { return this.a + this.b } };
var p = Object.create(o); // 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
p.a = 1;
p.b = 4;
console.log(p.f()); //5


// ## 4.get / set方法与 this

//一般也指向 get / set 方法所在的对象

function modules() {
	return Math.sqrt(this.re * this.re + this.im * this.im);
}
var o = {
	re: 1,
	im: -1,
	get phase() {
		return Math.atan2(this.im, this.re);
	}
};
Object.defineProperty(o, "modules", {
	get: modules, enumerable: true, configurable: true
});
console.log(o.phase, o.modules); //logs -0.78 1.4142


// ## 5.构造器中的 this

// 用 new 把它作为构造器去调用的话，那么这里面的this会指向一个空的对象，并且这个对象的原型会指向MyClass.prototype
// this 会指向原型为 MyClass.prototype 属性这样一个空对象 因为没有return或者return的是基本类型的话,会将默认的this会作为返回值
//但是return语句返回的是一个对象，会将return的这个对象作为返回值

function MyClass() {
	this.a = 37;
}
var o = new MyClass();
console.log(o.a); //37
cosnole.log(o.constructor == MyClass); //true 原型链
//o是MyClass的实例
//实例的构造函数属性（constructor）指向构造函数

function C2() {
	this.a = 37;
	return { a: 38 };
}
o = new C2();
console.log(o.a);//38


// 除了不同的调用方式以外，那么每一个函数对象还有一些方法可以去修改函数执行时的this


// ## 6. call / apply方法与 this

// 调用一个对象的一个方法，用另一个对象替换当前对象 将一个函数的对象上下文从初始的上下文改变为由this指定的新对象
// 两者的区别：call 在传参的时候是扁平的去把参数传进去的，而 apply 是以数组Array的方式传参


// ## 7. bind 方法与 this // ES5才提供，IE9+支持
// - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

// 语法 function.bind(this,arg1,arg2,...)
// - 创建一个新的函数，在调用时设置this关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。

// bind()方法会创建一个新的函数，称为绑定函数, function方法在this环境下调用
// 该方法可传入两个参数，第一个参数作为this，第二个及以后的参数则作为函数的参数调用

function f() {
	return this.a;
}

var g = f.bind({ a: "test" });
console.log(g()); //test

var o = { a: 37, f: f, g: g };
console.log(o.f(), o.g()); //37, test
