// for...in(主要是为遍历对象而设计的，不适用于遍历数组)
// for...of(数组方便 对象需要进一步变换Object.keys())


// 遍历(数组)

var arr = ['a', 'b', 'c'];
var obj = {a: 1, b: 2, c: 3};

// for循环
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}


// forEach
arr.forEach(function(value) {
  console.log(value);
});


// for...in(主要是为遍历对象而设计的，不适用于遍历数组)
// 以任意顺序遍历一个对象自有的、继承的、可枚举的、非Symbol的属性
for (let value in arr) {
  console.log(value); // 0 1 2
}

// for...of
// 对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。
for (let value in arr) {
  console.log(value);
}
// 0 1 2
for (let value of arr) {
  console.log(value);
}
// a b c

// 对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。
for (let value of obj) {
  console.log(value);
}
// TypeError: es6[Symbol.iterator] is not a function

// 1 - 使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
for (var key of Object.keys(obj)) {
  console.log(key + ': ' + obj[key]);
}
// 2 - 使用 Generator 函数将对象重新包装一下。
function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}
for (let [key, value] of entries(obj)) {
  console.log(key, '->', value);
}
// a -> 1 b -> 2 c -> 3