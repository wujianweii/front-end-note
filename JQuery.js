// JQ文档就绪事件及JS区别
// https://www.runoob.com/jquery/jquery-syntax.html

// 在 html 所有标签(DOM)都加载之后，就会去执行包裹代码
$(document).ready(function(){
	//JQuery 代码
})

$(function(){
	//JQuery 代码
})

// JS入口函数
// 必须等待网页全部加载完毕(包括图片等)，才会执行包裹代码
window.onload = function() {
	// JS 代码
}


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


// JQ选择器
// https://www.runoob.com/jquery/jquery-selectors.html
//https://www.runoob.com/jquery/jquery-ref-selectors.html 参考手册
 
//[]可理解为属性
//:可理解为种类，例 p:first, p的种类为第一个  :button // - type="button"

$(this) //选取当前HTML元素
$("ul li:first") //选取第一个 <ul> 元素的第一个 <li> 元素
$("ul li:first-child") //选取每一个 <ul> 元素的第一个 <li> 元素
$(":button") //选取所有 type="button" 的 <input> 元素 和 <button> 元素
$("[href]") //选取带有 href 属性的元素
$("a[target='_blank']") //选取所有target属性值等于"_blank"的<a>元素


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


// JQ事件

// https://www.runoob.com/jquery/jquery-events.html
// https://www.runoob.com/jquery/jquery-ref-events.html 参考手册
//注意：与 onmouseover 事件不同，mouseenter 事件只有在鼠标指针进入被选元素时被触发，onmouseover 事件在鼠标指针进入任意子元素时也会被触发。

//模拟光标悬停事件 当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，会触发指定的第二个函数(mouseleave)
$("p").hover(
	function(){
		alter("鼠标进入");
	},
	function(){
		alter("鼠标移出");
	}
);

mousedown() //当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件
mouseup() //当在元素上松开鼠标按钮时，会发生 mouseup 事件

//键盘事件 keydown keypress keyup
//keypress 事件与 keydown 事件类似。当按钮被按下时发生该事件.然而，keypress 事件不会触发所有的键（比如 ALT、CTRL、SHIFT、ESC）。请使用 keydown() 方法来检查这些键。

keydown // - 键按下的过程 //只要有按键按下 都会触发该事件
keypress // - 键被按下 
keyup // - 键被松开

//表单事件
// submit 提交表单 只适用于<form>元素
//change 当元素的值改变时发生 change 事件（仅适用于表单字段）
focus() // 聚焦事件 当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。
blur() // 失焦事件 在输入域外点击


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


// JQuery 效果
// https://www.runoob.com/jquery/jquery-ref-effects.html 参考手册
// https://www.runoob.com/jquery/jquery-hide-show.html

// speed 速度 "slow"、"fast"、毫秒Number
// callback 回调函数
隐藏显示 // show(speed,callback) hide() toggle()
淡入淡出 // fadeIn(speed,callback) fadeOut() fadeToggle() fadeTo()
滑动    // slideDown(speed,callback) slideUp() slideToggle()
动画    // $(selector).animate({params},speed,callback);
停止动画 // $(selector).stop(stopAll,goToEnd);
链式调用 




动画
// 默认情况下，所有 HTML 元素都有一个静态位置，且无法移动。
// 如需对位置进行操作，要记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute！

$(selector).animate({params},speed,callback);
$(function(){
	$("button").click(function(){
		$("div").animate({
			left:"250px",
			opacity:"0.5",
			height:"150px", //可操作多个属性
			paddingLeft:"0",
			marginRight:"0", //camel标记法-骆驼拼写法
			width:"+=150px", //可以定义相对值（该值相对于元素的当前值）。需要在值的前面加上 += 或 -=
      height:"show/hide/toggle", //使用预定义的值
		});
		var div = $("div");
		div.animate({height:"hide",opacity:"0.4"},"slow");
		div.animate({height:"show",opacity:"0.8"},"slow"); //使用队列功能
	});
});


停止动画效果 
//jQuery stop() 方法用于停止动画或效果，在它们完成之前。stop() 方法适用于所有 jQuery 效果函数，包括滑动、淡入淡出和自定义动画。
//可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
//可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
//被立即停止的动画不会触发回调，被立即完成的动画会触发回调。

$(function(){
	$("stop").click(function(){
		$("panel").stop(stopAll,goToEnd);
	});
});


链chaining
// 通过 jQuery，可以把动作|方法链接在一起。Chaining 允许我们在一条语句中运行多个 jQuery 方法（在相同的元素上）
$("#p1").css("color","red")
	.slideUp(2000)
	.slideDown(2000); //示例样式


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


// JQuery HTML
//https://www.runoob.com/jquery/jquery-dom-get.html

//获取/设置 内容和属性
val() // - 设置或返回表单字段的值
text() // - 设置或返回所选元素的文本内容
html() // - 设置或返回所选元素的内容（包括 HTML 标记）
attr() // - 方法用于获取属性值

//添加元素
append() // - 在被选元素的结尾插入内容（仍然该元素的内部）
prepend() // - 在被选元素的开头插入内容（仍然该元素的内部）
after() // - 在被选元素之后插入内容
before() // - 在被选元素之前插入内容

function afterText() {
	var txt1="<b>I </b>";                    // 使用 HTML 创建元素
	var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
	var txt3=document.createElement("big");  // 使用 DOM 创建元素
	txt3.innerHTML="jQuery!";
	$("img").after(txt1,txt2,txt3);          // 在图片后添加文本
}

// 删除元素
remove() // - 删除被选元素（及其子元素）
empty() // - 从被选元素中删除子元素
$("p").remove(".italic"); //过滤被删除的元素 删除class="italic" 的所有<p>元素

//获取并设置 CSS 类
addClass() // - 向被选元素添加一个或多个类
removeClass() // - 从被选元素删除一个或多个类
toggleClass() // - 对被选元素进行添加/删除类的切换操作
css() // - 设置或返回被选元素的一个或多个样式属性。

// css() 方法
$("p").css("background-color"); //将返回首个匹配元素的 background-color 值
$("p").css("background-color","yellow"); //为所有匹配元素设置 background-color 值
$("p").css({"background-color":"yellow","font-size":"200%"}); //设置多个 CSS 属性

//JQuery 尺寸
width/height() // - 不包括内边距padding、边框border或外边距margin
innerWidth/innerHeight() -包括内边距padding
outerWidth/outerHeight() -包括内边距padding和外边距margin


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


// JQuery 遍历
// https://www.runoob.com/jquery/jquery-traversing.html

//祖先
parent() // - 返回被选元素的直接父元素
parents() // - 返回被选元素的所有祖先元素
parentsUntil() // - 返回介于两个给定元素之间的所有祖先元素
$(document).ready(function(){
	$("span").parentsUntil("div").css("color","#333");
});

//后代
children() -返回被选元素的所有直接子元素
$("div").children("p.first"); //返回类名为"first"的所有<p>元素，并且是<div>的直接子元素

find() // - 返回被选元素的后代元素，一路向下直到最后一个后代
$("div").find("span"); //返回属于 <div> 后代的所有 <span> 元素
$("div").find("*"); //返回<div>的所有后代

//同胞
siblings() // - 返回被选元素的所有同胞元素
next() // - 返回被选元素的下一个同胞元素
nextAll() // - 返回被选元素的所有跟随的同胞元素
nextUntil() // - 返回介于两个给定参数之间的所有跟随的同胞元素
$("h2").nextUntil("h6");

prev() // -  返回被选元素的上一个同胞元素
prevAll() // - 返回被选元素的所有前置的同胞元素
prevUntil() // - 返回介于两个给定参数之间的所有跟随的同胞元素

//过滤
first() // - 返回被选元素的首个元素
$("div p").first(); //选取首个 <div> 元素内部的第一个 <p> 元素

last() // - 返回被选元素的最后一个元素
$("div p").last(); //选择最后一个 <div> 元素中的最后一个 <p> 元素

eq() // - 返回被选元素中带有指定索引号的元素,索引号从 0 开始
$("p").eq(1); //选取第二个<p>元素

filter() // - 允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回
$("p").filter(".url"); //返回带有类名 "url" 的所有 <p> 元素

not() // - 返回不匹配标准的所有元素(/与filter()相反/)
$("p").not(".url"); //返回不带有类名 "url" 的所有 <p> 元素


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


//AJAX
//https://www.runoob.com/jquery/jquery-ajax-intro.html

load()
$(selector).load(URL,data,callback); //可选的 callback 参数规定当 load() 方法完成后所要允许的回调函数

responseTxt // - 包含调用成功时的结果内容
statusTxT // - 包含调用的状态
xhr // - 包含 XMLHttpRequest 对象

$(document).ready(function(){
	$("button").click(function(){
		$("#div1").load("/try/ajax/demo_test.txt",function(responseTxt,statusTxt,xhr){ //responseTxt-包含调用成功时的结果内容 statusTXT-包含调用的状态 xhr-包含XMLHttpRequest对象
			if(statusTxt == "success"){
				alert("加载成功");
			}
			else{ //if(statusTxt == "error")
				alert("Error:" + xhr.status + ":" + xhr.statusText); //Error:404:Not Found
			}
		});
	});
});

$.get() // 方法通过 HTTP GET 请求从服务器上请求数据
$.post() // 方法通过 HTTP POST 请求从服务器上请求数据


// #——#——#——#——#——#——#——#——#——分割线——#——#——#——#——#——#——#——#——#——#


// JQuery 参考手册