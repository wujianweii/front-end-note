双向数据绑定
// https://www.cnblogs.com/wangjiachen666/p/9883916.html
// mvvm - 数据变化更新视图 - 可观测，视图变化更新数据(事件监听)
// Vue内部通过Object.defineProperty方法属性拦截的方式，把data对象里每个数据的读写转化成getter/setter，当数据变化时通知视图更新
// observable / defineReactive


生命周期及实现原理
// https://juejin.im/post/5ad10800f265da23826e681e#heading-1
// callHook