JavaScript学习笔记


function Elem(id) {
	this.elem = document.getElementById(id)
}

Elem.prototype.html = function(val) {
	var elem = this.elem;
	if (val) {
		elem.innerHTML = val
		return this
	} else {
		rerurn elem.innerHTML
	}
}

Elem.prototype.on = function(type, fn) {
	var elem = this.elem;
	elem.addEventListener(type, fn);
}

var div1 = new Elem('detail-pafe')
div1.html("<p>哈哈哈</P>").on("click", function() {
	alert("hahaah");
})






<学习慕课网视频教程的方法_

1.笔记是必须的/但为了效率应适当的采用截屏手段 + 简化记事本笔记记录 //不然看了就忘效果极差！
2.不用特意的赶进度而忽视学习效果, 重点应当是掌握基础, 在不懂的时候多看几遍教学视频和学习笔记, 力求扎实的掌握知识, 思考与巩固！
//何为扎实的学习基础： 牢记于心/灵活运用-举一反三/知晓其构造的想法思路而非只会简单应用
/>



操作符优先级
# 算术操作符 -> 比较操作符 -> 逻辑操作符 -> "="赋值操作符



流程控制语句

"switch"
语法说明:Switch必须赋初始值，值与每个case值匹配。满足执行该 case 后的所有语句，并用break语句来阻止运行下一个case。如所有case值都不匹配，执行default后的语句。

"continue" //继续循环 (仅退出当次循环)
continue的作用是仅仅跳过本次循环，而整个循环体继续执行。

"break" //退出循环
在while、for、do...while、while循环中使用break语句退出当前循环，直接执行后面的代码。




# DOCTYPR #  //文档类型
<!DOCTYPE> 声明不是一个 HTML 标签；它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。
//提示：总是给您的 HTML 文档添加 <!DOCTYPE> 声明，确保浏览器能够预先知道文档类型。







什么是对象
// JavaScript 中的所有事物都是对象，如:字符串、数值、数组、函数等，每个对象带有属性和方法。
// 对象的属性property：  反映该对象某些特定的性质的，如：字符串的长度、图像的长宽等；
// 对象的方法method：  能够在对象上执行的动作。例如，表单的“提交”(Submit)，时间的“获取”(getYear)等；

constructor 属性 //返回对创建此对象的数组函数的引用
object.constructor == Array / Boolean / Date / String

prototype 属性 //能够向对象添加属性和方法。
object.prototype.name = value

toSource() 方法 //返回表示对象源代码的字符串。
object.toSource()



NaN 属性 //是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值，来指示其不是数字值
//提示：请使用 isNaN() 全局函数来判断一个值是否是 NaN 值。 原因是 NaN 与所有值都不相等，包括它自己。







Date 日期对象
var Udate = new Date(); //定义一个时间对象 初始值：当前时间(当前电脑系统时间)
var mytime = new Date(2012, 10, 1); //自定义初始值

getDay() //返回星期，返回的是0-6的数字，0 表示星期天
var mydate = new Date();
var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
document.write("今天是：" + weekday[mydate.getDay]); //今天是星期二

get/setTime() //返回/设置时间，单位毫秒数，计算从 1970 年 1 月 1 日零时到日期对象所指的日期的毫秒数。



String 字符串对象方法method
charAt() //方法可返回指定位置的字符。返回的字符是长度为 1 的字符串。
stringObject.charAt(index)
//字符串中第一个字符的下标是 0。最后一个字符的下标为字符串长度减一（string.length-1）。
//如果参数 index 不在 0 与 string.length-1 之间，该方法将返回一个空字符串。
//一个空格也算一个字符

indexOf() //方法可返回某个指定的字符串值在字符串中首次出现的位置。
stringObject.indexOf(substring检索的字符串值 , startpos起始检索位置)
//indexOf() 方法区分大小写。
//如果要检索的字符串值没有出现，则该方法返回 -1。

split() //方法将字符串分割为字符串数组，并返回此数组。
stringObject.split(separator指定分割符 , limit分割的次数)
//如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。

substring() //方法用于提取字符串中介于两个指定下标之间的字符。(字符不包括该两个下标)
stringObject.substring(startPos开始位置,stopPos结束位置) 
//返回的内容是从 start开始(包含start位置的字符)到 stop-1 处的所有字符，其长度为 stop 减start。
//如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。
//如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。

substr() //方法从字符串中提取从 startPos位置开始的指定数目的字符串。
stringObject.substr(startPos,length)
//如果startPos为负数且绝对值大于字符串长度，startPos为0

toLowerCase() //把字符串转换为小写
toUpperCase() //把字符串转换为大写

history对象 //记录了用户曾经浏览过的页面 URL, 并可以实现浏览器前进与后退相似导航的功能。
//注意：从窗口被打开的那一刻开始记录，每个浏览器窗口、每个标签页乃至每个框架，都有自己的history对象与特定的window对象关联。
window.history.[属性|方法]
//属性： length
//方法： back(加载 history 列表中的前一个 URL) / forward(加载 history 列表中的下一个 URL) / go()


Location对象 //用于获取或设置窗体的URL，并且可以用于解析URL
http://img.mukewang.com/53605c5a0001b26909900216.jpg
http://img.mukewang.com/5354b1d00001c4ec06220271.jpg
http://img.mukewang.com/5354b1eb00016a2405170126.jpg


Navigator对象 //包含有关浏览器的信息，通常用于检测浏览器与操作系统的版本。 属性/方法


userAgent //返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
语法： navigator.userAgent
//使用userAgent判断使用的是什么浏览器
function validB(){
	var u_agent = navigator.userAgent;
	var B_name = "Failed to identify the browser";
	if(u_agent.indexOf("Firefox") > -1){
		B_name = "Firefox";
	}
	else if(u_agent.indexOf("Chrome")>-1){ 
      B_name="Chrome"; 
    }
    else(u_agent.indexOf("MSIE")>-1&&u_agent.indexOf("Trident")>-1){ 
      B_name="IE(8-10)";  
    }
    document.write("B_name:" + B_name + "<br>");
    document.write("u_agent:" + u_agent + "<br>");
}










数组

// 数组 vs 一般对象
// 相同点
都可以继承，数组是对象，对象不一定是数组，都可以当做对象添加删除属性
// 不同点
数组自动更新length,按索引访问数组常常比访问一般对象属性明显迅速，数组对象继承 Array.prototype 上的发亮数组操作方法

字符串 //类数组 apply() 



# 创建数组语法：
var myarray = new Array(8); //创建数组，存储8个数据
//创建一个新数组存储在myarray变量中
//创建数组的同时，还可以为数组指定长度，长度可任意指定

注意：
1.创建的新数组是空数组，没有值，如输出，则显示undefined。
2.虽然创建数组时，指定了长度，但实际上数组都是变长的，也就是说即使指定了长度为8，仍然可以将元素存储在规定长度以外。


简单方法创建数组和赋值 //数组存储的数据可以是任何类型（数字、字符、布尔值等）
第一种方法：
var myarray = new Array(66,80,90,77,59);//创建数组同时赋值

第二种方法：
var myarray = [66,80,90,77,59];//直接输入一个数组（称 “字面量数组”）


二维数组 myarray[i][j] //[i]为行row [j]为列column
// # 二维数组的定义方法一
var myarr = new Array();  //先声明一维 
for(var i=0; i<2;i++){   //一维长度为2
   myarr[i] = new Array();  //再声明二维 
   for(var j=0;j<3;j++){   //二维长度为3
   myarr[i][j] = i+j;   // 赋值，每个数组元素的值为i+j
   }
}

// 实例
var arr = [[0,1],[2,3],[4,5]];
for(var i=0;i<arr.length;i++){
	var row = arr[i];
	console.log("row" + i);
	for(var j=0;j<row.length;j++){
		console.log(row[j]);
	}
}

// # 二维数组的定义方法二
var Myarr = [[0 , 1 , 2 ],[1 , 2 , 3]]


数组迭代 //根据具体应用场景具体要求来选择方法
var arr = [1,2,3,4,5];
// 方法一
for(var i=0; i<arr.length; i++){
	console.log(arr[i]);//1,2,3,4,5
}
// 方法二
for(i in arr){ //无序
	console.log(arr[i]);//1,2,3,4,5
}
//for(i in arr)时 原型上的属性也会出现在结果中
数组对象的原型 Array.prototype
Array.prototype.x = 'inherited';
for(i in arr){
	console.log(arr[i]);//1,2,3,4,5,inherited
}

for(i in arr){ 
	if(arr.hasOwnProperty(i){ //过滤原型链上的属性
		console.log(arr[i]);//1,2,3,4,5
	}
}


稀疏数组并不含有从0开始的连续索引。一般length属性值比实际元素个数大
//判断是否为稀疏数组  in操作符 或 判断是否为undefined


3-8编程练习才是真正的提高、这个不练就永远不会又提高、永远流于表面仅知晓点皮毛基础,无法熟用!


Array属性
定义和用法

prototype 属性使您有能力向对象添加属性和方法。
当构建一个属性，所有的数组将被设置属性，它是默认值。
在构建一个方法时，所有的数组都可以使用该方法。
注意： Array.prototype 单独不能引用数组, Array() 对象可以。
注意： 在JavaScript对象中，Prototype是一个全局属性。

Array.prototype.myUcase = function(){//定义方法，避免重复实现，以简化程序
	for(var i=0; i<this.length; i++){
		this[i] = this[i].toUppercase();
	}
}
function myFunction(){
	var fruits = ["Banana","orange","Apple"];
	fruits.myUcase();
	//for(var i=0;i<fruits.length;i++){
	//    fruits[i] = fruits[i].toUppercase();
	//}
	var x = document.getElementById("demo");
	x.innerHTML = fruits;
}


Array方法

Array.concat(stale,kai); //连接两个或更多的数组，并返回结果。原数组未被修改
var arr = [1,2,3]
arr.concat([10,11],13);//[1,2,3,10,11,13]
arr.concat([1,[2,3]]);//[1,2,3,1,[2,3]] 连接数组时仅只会拉平一次


array.copyWithin(target, start, end) //copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
//target 	必需。复制到指定目标索引位置。
//start 	必需。元素复制的起始位置。
//end 	    可选。停止复制的索引位置 (默认为 array.length 即复制至数组末尾)

every() //数组判断  检测数组所有元素是否都符合指定条件（通过函数提供）
var ages = [32,33,15,43];
function checkAdult(age){
	return age >= 18;
}
function myFunction(){
	document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

array.filter() //数组过滤  创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素
//注意： filter() 不会对空数组进行检测。
//注意： filter() 不会改变原始数组。

onclick="number.forEach(myFunction)" //forEach() 方法用于数组遍历 调用数组的每个元素，并将元素传递给回调函数。
demoP = document.getElementById("demo");
var numbers = [4,9,5,25];
function myFunction(item,index){
	demoP.innerHTML = demoP.innerHTML + "index["+ index +"]:" + item +"<br>"; //解决块级作用域方法之一 否则只会有最后一个结果
}

var arr = [1,2,3,4,5]; //IE9
arr.forEach(function(x,index,a){
	console.log(x + '|' + index + '|' + (a === arr);
});
//1|0|true
//2|1|true
//3|2|true
//4|3|true
//5|4|true


arr.includes(searchElement, fromIndex)
//searchElement 	必须。需要查找的元素值。
//fromIndex 	    可选。从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。值为-1则为数组末尾
[1,2,3].includes(3,-1) //true

// 数组判断
every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）
some() 方法用于检测数组中的元素是否满足指定条件（函数提供）

indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
array.indexOf(item,start)//返回-1为 指定字符串不存在

join() 方法用于把数组中的所有元素转换为一个字符串。元素是通过指定的分隔符进行分隔的。//默认符号为
var fruits = ["Banana","Apple"];
var energy = fruits.join(" and ");
document.write(energy); //Banana and Apple
// 构建函数
function repeatString(str,n){
	return new Array(n + 1).join(str);//为什么是n+1  空的数组使用join方法会将underfined忽略掉，而str是当分隔符插入进去,个数为array.length-1
}
repeatString("a" , 3);//"aaa"
repeatString("Hi" , 5);//"HiHiHiHiHi"


lastIndexOf() 方法为数组检索  可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。


map() 方法为数组映射 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
var numbers = [65,44,54,2];
function multiplyArrayElement(num){
	return num*document.getElementById("multiplyWith").value;
}
function myFunction(){
	document.getElementById("demo").innerHTML = numbers.map(multiplyArrayELement);
}


pop() 方法用于删除数组的最后一个元素并返回删除的元素。
push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加
reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
var numbers = [15.5,12.6];
function getSum(total,num){
	return total + Math.round(num);
}
function myFunction(item){
	document.getElementById("demo").innerHTML = numbers.reduce(getSum,0);//0可选参数, 传为total
}

reverse() 方法用于颠倒数组中元素的顺序。//原数组被修改


shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
var fruits = ["Banana", "Orange", "Apple", "Mango"];
function myFunction(){
	var delell = fruits.shift();
	var x = document.getElementById("demo");
	x.innerHTML = "删除后数组为：" + fruits;
	document.getElementById("demo2").innerHTML = "删除的元素是：" + delell;
}
//删除后数组为：Orange,Apple,Mango
//删除的元素是：Banana


slice() 方法可从已有的数组中返回选定的元素。//返回部分数组
slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
array.slice(start,end);//[start,end)左闭右开 负数为倒数, -1 为 倒数第一个元素



sort() 方法用于对数组的元素进行排序。
array.sort(sortfunction) //注意： 这种方法会改变原始数组！。

//《传入一个比较函数》注意: 该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下： 
//# 若返回值<=-1，则表示 A 在排序后的序列中出现在 B 之前。
//# 若返回值>-1 && <1，则表示 A 和 B 具有相同的排序顺序。
//# 若返回值>=1，则表示 A 在排序后的序列中出现在 B 之后。

var points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b}); //数字升序
points.sort(function(a,b){return b-a}); //数字降序

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //字母升序
fruits.reverse(); //字母降序

array.splice(index,howmany,item1,.....,itemX) //数组拼接 原数组被修改
//index 	    必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
//howmany 	    必需。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
//itemx 	    可选。要添加到数组的新元素
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"Lemon","Kiwi"); 
docement.write("fruits"); //Banana,Orange,Lemon,Kiwi,Mango



toString() 方法可把数组转换为字符串，并返回结果


unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度



valueOf() 方法返回 Array 对象的原始值。
该原始值由 Array 对象派生的所有对象继承。
valueOf() 方法通常由 JavaScript 在后台自动调用，并不显式地出现在代码中。

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var v=fruits.valueOf(); 
document.write(v); //Banana,Orange,Apple,Mango


isArray 判断是否为数组
Array.isArray([]);//true

[] instanceof Array;//true
({}).toString.apply([]) === '[object Array]';//true
[].constructor === Array;//true 构造器





















数据类型

弱类型特性
"32"+ 32 //3232
"32"- 32 //0

数据类型
原始类型 — number/string/boolean/null/undefined
object对象 — Function/Array/Date...

隐式转换
巧用 + | - 规则转换类型
num - 0   //变量转换为数字类型number
num + "0"   //变量转换为字符串类型char


等于 a==b(先判断类型/)
类型相同, 同===
类型不同, 尝试类型转换和比较

严格等于 a===b (先判断类型/)
类型不同, 返回false
类型相同_
null === null
undefined === underfined
NaN != NaN<与任何数据都不等>
new Object !=<暂替代不等于> new Object<对象比较是用引用来比较, 而不是用值来比较>


包装对象
JS隐藏机制_当把一个基本类型尝试作为对象类型使用的时候<比如增加属性/使用length属性>, 智能的把基本类型<number/string/boolean>转换为对应的包装类型对象

var str = "string";
var strObj<string对应的包装类 对象类型> = new String("string");       //<临时对象使用完后会销毁>













2-1 表达式

原始表达式 *运算符 原始表达式  //复合成复合表达式

数组、对象的初始化表达式

函数表达式<把函数赋值给变量/把函数用括号括起来直接调用>

属性访问表达式

调用表达式

对象创建表达式


2-2 运算符

特殊运算符 

条件运算符：c ? a:b 
逗号运算符：var val=(1,2,3); //val=3  每个表达式都会计算, 最后取最右边的值
delete运算符 删除对象上的属性
configurable:true/false
in运算符 判断对象是否有key
instanceof,typeof
new运算符  创建构造器的实例
this运算符
void运算符



3-1 
block 块
直接以花括号开头会认为是块block, 报错
想理解为对象字面量表达式的话, 需赋值给变量o,或外面用花括号包起来

请注意：没有块级的作用域 //赋初值在块中块外均可

SyntaxError //语法错误                                                    

申明语句var

var a=b=1;
b隐式的创建了全局变量

正确创建局部变量：
var a=1,b=1;




3-2
try-catch-finally
在try抛出异常, catch捕获执行, 否则忽略catch语句, 直接执行finally语句



3-3
function语句用来定义函数对象

函数申明《函数前置, 可在函数之前调用》 函数表达式《不可再前面调用》


for...in 遍历属性


with语句修改当前作用域《不建议使用/严格模式下被禁用》

在有需要深层访问对象属性的时候, 定义变量去取代



javascript 中的console.log的作用

主要是方便你调试javascript用的。你可以看到你在页面中输出的内容。

相比alert他的优点是：
1.他能看到结构话的东西, 如果是alert, 淡出一个对象就是[object object],但是console能看到对象的内容。
2.console不会打断你页面的操作, 如果用alert弹出来内容, 那么页面就死了, 但是console输出内容后你页面还可以正常操作。
3.console里面的内容非常丰富, 你可以在控制台输入：console, 然后就可看到：
// Console {memory: MemoryInfo, debug: function, error: function, info: function, log: function…}

它有网页的各种提示。




3-4 严格模式向上兼容！对于编写高质量、健壮性的代码

不允许使用with  会报SytaxError语法错误

不允许未声明的变量被赋值 相当于定义全局变量 ReferenceError引用错误

arguments变为参数的静态副本???

delete参数、函数名报错

delete不可配置的属性报错

对象字面量重复属性名报错

禁止八进制字面量...全都不懂！！！

严格模式是一种特殊的运行模式, 它修复了部分语言上的不足, 提供更强的错误检查, 并增强安全性





4
对象属性标签
writable 可写
enumerable 可枚举/遍历
configurable 可配置/修改属性 delete

对象标签
"proto" 原型标签
"class" 表示对象类型 间接获取
extensible 表示对象是否可扩展


NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。可以把 Number 对象设置为该值, 来指示其不是数字值。

提示：请使用 isNaN() 全局函数来判断一个值是否是 NaN 值。




6.
递归调用：函数本身调用该函数

bind() apply() call()




HTML5 canvas函数

context.stroke().strokeStyle().lineWidth().fill().fillStyle().lineTo().moveTo().beginPath().closePath()
var context = canvas.getContext("2d")










#语法#
elementList = document.querySelectorAll(selectors);
//elementList 是一个静态的 NodeList 类型的对象.
//selectors 是一个由逗号连接的包含一个或多个CSS选择器的字符串.
//如果 selectors参数中包含 CSS伪元素,则返回一个空的elementList.
//返回与指定的选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。返回的对象是 NodeList 。






1.扩展运算符（spread）是三个点（...）
//它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
#比如#
var list=['大家好']；
list.length=1.list[0]=大家好；

var list2=[...'大家好']；
list2.length = 3；list2[0]=大；list2[1]=家；list2[2]=好；
//扩展运算符最有用之一是：Math.max(...arr);比较数组中的最大值。

2.rest参数(形式为“...变量名”）
//用于获取函数多余参数，将多余参数放入数组中。和上面的扩展运算符可以理解为互为逆函数。

















原型链详解




call() apply()

1. 每个函数都包含两个非继承而来的方法：call() 方法 和 apply() 方法。
2. 相同点：这两个方法的作用是一样的。
// 都是在特定的作用域中调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域。
// 一般来说，this总是指向调用某个方法的对象，但是使用call()和apply()方法时，就会改变this的指向。
3. 不同点：接收参数的方式不同。

call()方法 //第一个参数和apply()方法的一样，但是传递给函数的参数必须列举出来。
语法：call([thisObject[,arg1 [,arg2 [,...,argn]]]]);，//应用某一对象的一个方法，用另一个对象替换当前对象。
//说明： call方法可以用来代替另一个对象调用一个方法，call方法可以将一个函数的对象上下文
//从初始的上下文改变为thisObj指定的新对象，如果没有提供thisObj参数，那么Global对象被用于thisObj。

apply()方法 //接收两个参数，一个是函数运行的作用域（this），另一个是参数数组。
语法：apply([thisObj ,[argArray] ]);，
//调用一个对象的一个方法，另一个对象替换当前对象。
//说明：如果argArray不是一个有效数组或不是arguments对象，那么将导致一个
//TypeError，如果没有提供argArray和thisObj任何一个参数，那么Global对象将用作thisObj。

示例

    function add(c,d){
        return this.a + this.b + c + d;
    }

    var s = {a:1, b:2};
    console.log(add.call(s,3,4)); // 1+2+3+4 = 10
    console.log(add.apply(s,[5,6])); // 1+2+5+6 = 14 







        window.firstName = "Cynthia"; 
        window.lastName = "_xie";

        var myObject = {firstName:'my', lastName:'Object'};

        function getName(){
            console.log(this.firstName + this.lastName);
        }

        function getMessage(sex,age){
            console.log(this.firstName + this.lastName + " 性别: " + sex + " age: " + age );
        }

        getName.call(window); // Cynthia_xie
        getName.call(myObject); // myObject

        getName.apply(window); // Cynthia_xie
        getName.apply(myObject);// myObject

        getMessage.call(window,"女",21); //Cynthia_xie 性别: 女 age: 21
        getMessage.apply(window,["女",21]); // Cynthia_xie 性别: 女 age: 21

        getMessage.call(myObject,"未知",22); //myObject 性别: 未知 age: 22
        getMessage.apply(myObject,["未知",22]); // myObject 性别: 未知 age: 22







//例2 理解的不够透彻！？
    function Pet(words){
        this.words = words;
        this.speak = function () {
            console.log( this.words)
        }
    }
    function Dog(words){
        //Pet.call(this, words); //结果： Wang
       Pet.apply(this, arguments); //结果： Wang
    }
    var dog = new Dog('Wang');
    dog.speak();