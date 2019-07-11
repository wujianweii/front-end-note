// * 数组去重 (先理思路·在码代码)
// - https://juejin.im/post/5aed6110518825671b026bed


var arr = [1, 2, 2, 3, 3, 4, 4];
// 1.双循环去重 for (去重·排序) ？？


// 2.indexOf去重
function unique(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res; // [1, 2, 3, 4]
}


// x.ES6 Set方法
function dedupe(array) {
  // var set = ...new Set(array); // -> Set数据结构
  // Array.from()方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例
  // ... Spread Operator 扩展运算符 - 用于取出参数对象的所有可遍历属性，拷贝到当前对象之中(浅拷贝)
  return Array.from(new Set(array)) || [...new Set(array)];
}
console.log(dedupe(arr)); // [1, 2, 3, 4]