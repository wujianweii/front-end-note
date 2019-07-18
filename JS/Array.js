// 数组方法 - 不会修改原数组 / 会修改原数组





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












// * 传递两个参数m，n，返回长度为m，所有元素都为n的数组，要求不能用循环 (利用函数的递归和 concat() 方法可以实现)
function fn(m, n) {
  return m ? fn(m - 1, n).concat(n) : [];
}
// fn(1, 1) - [].concat(1) - [1]