/**
 * main3.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
var NewsTime = 2000;    //每条信息完整出现后停留时间
var TextTime = 200;    //每条信息中的字出现的间隔时间

var newsi = 0;
var txti = 0;
var txttimer;   //调用setInterval的返回值，用于取消对函数的周期性执行
var newstimer;

var newstitle = new Array();    //以数组形式保存每个信息的标题
var newshref = new Array();   //以数组形式保存信息标题的链接

newstitle[0] = "欢迎来到我的博客，这是一个私人博客~  与大家共同分享我们的快乐！";   //显示在网页上的文字内容和对应的链接
newshref[0] = "http://www.kochiu.cn/";

newstitle[1] = "http://www.kochiu.cn/";
newshref[1] = "http://www.kochiu.cn/";

newstitle[2] = "爱琳欢迎你~";
newshref[2] = "http://www.kochiu.cn/";

//newstitle[3] = "ByeBye~~";
//newshref[3] = "http://www.kochiu.cn/";

function shownew(){
	hwnewstr=newstitle[newsi];    //通过newsi传递，依次显示数组中的内容
	newslink=newshref[newsi];     //依次显示文字对应的链接
	 
	if(txti>=hwnewstr.length){
		clearInterval(txttimer);  //一旦超过要显示的文字长度，清除对shownew()的周期性调用
		clearInterval(newstimer); 
		newsi++;   //显示数组中的下一个

		if(newsi>=newstitle.length){
		newsi = 0;  //当newsi大于信息标题的数量时，把newsi清零，重新从第一个显示
		}
		newstimer = setInterval("shownew()",NewsTime);   //间隔2000ms后重新调用shownew()
		txti = 0;  
		return;
	}
	clearInterval(txttimer); 
	document.getElementById("Hotnews").href = newslink;  
	document.getElementById("Hotnews").innerHTML = hwnewstr.substring(0,txti+1);   //截取字符，从第一个字符到txti+1个字符
	txti++;  //文字一个个出现
	txttimer = setInterval("shownew()",TextTime);
	
}
shownew();