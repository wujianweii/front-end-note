## Ajax学习笔记初版 ##



Ajax = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）（标准通用标记语言的子集） 
//XML 指可扩展标记语言(eXtensible Markup Language), 被设计用来传输和存储数据。 
//XML 是一种必须正确标记且格式良好的标记语言
//Ajax 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容

// Ajax是指一种创建交互式网页应用的网页开发技术
// Ajax是一种用于创建快速动态网页的技术
// Ajax是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
// 通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新
// 这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新
// 传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面



## XHTML简介 ## //HTML教程中
XHTML 是以 XML 格式编写的 HTML。  
// XHTML 是作为 XML 被重新设计的 HTML
// 使用原因： 因特网上的很多页面包含了"糟糕"的 HTML, 而小型设备往往缺乏解释"糟糕"的标记语言的资源和能力 

    XHTML 指的是可扩展超文本标记语言
    XHTML 与 HTML 4.01 几乎是相同的
    XHTML 是更严格更纯净的 HTML 版本
    XHTML 是以 XML 应用的方式定义的 HTML
    XHTML 是 2001 年 1 月发布的 W3C 推荐标准
    XHTML 得到所有主流浏览器的支持







AJAX是基于现有的Internet标准，并且联合使用它们：

    XMLHttpRequest对象 (异步的与服务器交换数据) 
    JavaScript/DOM (信息显示/交互)
    CSS (给数据定义样式)
    XML (作为转换数据的格式)

//AJAX应用程序与浏览器和平台无关的！











## XMLHttpRequest对象 ## //可扩展超文本传输请求(计算机术语)
//XMLHttpRequest 是 AJAX 的基础
//XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新



//创建 XMLHttpRequest 对象 
var xmlhttp;
if (window.XMLHttpRequest)//检查浏览器是否支持 XMLHttpRequest 对象
{
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest(); // 创建 XMLHttpRequest 对象的语法
}
else
{
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
}




## AJAX - 向服务器发送请求 ##
//XMLHttpRequest 对象用于和服务器交换数据。

xmlhttp.open("GET","ajax_info.txt",true); 
//方法 open(method,url,async)
/*
    method：请求的类型；GET 或 POST
    url：文件在服务器上的位置
    async：true（异步）或 false（同步）
*/
xmlhttp.send();
//方法 send(string)
//将请求发送到服务器   string：仅用于 POST 请求


请求类型 - GET or POST
/*在以下情况中，请使用 POST 请求：
    无法使用缓存文件（更新服务器上的文件或数据库）
    向服务器发送大量数据（POST 没有数据量限制）
    发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
*/




// 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数
xmlhttp.onreadystatechange = function() //检查状态码
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
xmlhttp.send();

/*XMLHTTP 的 readyState 值含义：

    0－未初始化，即尚未调用 open。
    1－初始化，即尚未调用 send。 //服务器连接已建立
    2－发送数据，即已经调用 send。 //请求已接收
    3－数据传送中。
    4－完成。

    0：请求未初始化（还没有调用 open()）。
    1：请求已经建立，但是还没有发送（还没有调用 send()）。
    2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
    3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
    4：请求已完成，且响应已就绪；您可以获取并使用服务器的响应了。
*/


## async=false ##
//请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起或停止。
//注意：当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语句后面即可：
xmlhttp.open("GET","/try/ajax/ajax_info.txt",false);
xmlhttp.send();
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;








## AJAX - 服务器响应 ## //该代码位于 "检查状态码"" 中

//responseText 属性  获得字符串形式的响应数据。
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;

//responseXML 属性  获得 XML 形式的响应数据
xmlDoc=xmlhttp.responseXML;
txt="";
x=xmlDoc.getElementsByTagName("ARTIST");
for (i=0;i<x.length;i++)
{
    txt=txt + x[i].childNodes[0].nodeValue + "<br>"; 
    //childNodes 属性返回包含被选节点的子节点的 NodeList。如果选定的节点没有子节点，则该属性返回不包含节点的 NodeList。
}
document.getElementById("myDiv").innerHTML=txt;


//nodeType 属性
/*
元素类型    节点类型
  元素         1
  属性         2
  文本         3
  注释         8
  文档         9
*/



使用回调函数
//回调函数是一种以参数形式传递给另一个函数的函数
//为创建 XMLHttpRequest 对象编写一个标准的函数，并为每个 AJAX 任务调用该函数
var xmlhttp;
function loadXMLDoc(url,cfunc){
	if(window.XMLHttpRequest){
		// IE7+, Firefox, Chrome, Opera, Safari 代码
		xmlhttp = new XMLHttpRequest();
	}
	else{
		// IE6, IE5 代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = cfunc;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function myFunction(){
	loadXMLDoc("/try/ajax/ajax_info.text",function(){
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	});
}






function loadDoc(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			myFunction(this);
		}
	};
	xhttp.open("GET","cd_catalog.xml",true);
	xhttp.send();
}
function myFunction(xml){
	var i;
	var xmlDoc = xml.responseXMl;
	var table = "<tr><th>Artist</th><th>Title</th></tr>";
	var x = xmlDoc.getElementsByTagName("CD");
	for(i=0;i<x.length;i++){
		table += "<tr><td>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "</td></tr>";
	}
	document.getElementById("demo").innerHTML = table;
}








## JSON ##

解析JSON - eval/JSON.prase





































