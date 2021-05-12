function initial_date() {
	x=document.getElementsByClassName("expired_date");
	var d = new Date();
	for(var i = 0; i < x.length; i++)
		x[i].innerText = "期限："+d.getFullYear()+" 年 "+(d.getMonth()+1)+" 月 "+(d.getDate()+1)+" 日 尚餘：1 天 "+d.getHours()+" 小時";
}
initial_date();

function click_item(ind) {
	$("#prompt_page").empty();
	$("#prompt_page").append("<img class=\"prompt_top\" src=\"p"+ind.toString()+".jpg\"><div class=\"bottom\"><img class=\"prompt_bottom\" onclick=\"click_exchange()\" src=\"exchange2.jpg\"></div>");

	$('#load').show();
	$('#load').fadeOut(500);
	$('#top_prompt').fadeIn(200);
	$('#prompt_page').animate({left: "0vw"},200,0);
	$('#showCase').animate({left: "-33vw"},200,0);
}

var count_down;  //interval function
function click_back() {
	$('#top_prompt').fadeOut(200);
	$('#prompt_page').animate({left: "100vw"},200,0);
	$('#showCase').animate({left: "33vw"},200,0);

	$('#count_down_bottom').hide();
	$('#count_down_time').hide();
	clearInterval(count_down);
	document.getElementById("count_down_time").innerText = "1:59";
	$('.bottom').css({"left": "0px","bottom": "0px","height": "20vw"});
	$('.prompt_bottom').css("width","102vw");

	initial_date();
}

$("#flex-container").hide();
$("#load").hide();
$("#veil").hide();

function click_exchange() {
	$("#veil").fadeIn(300);
	$("#flex-container").fadeIn(300);
}
function click_use() {
	$("#flex-container").hide();
	$('#load').show();
	$('#load').fadeOut(200);
	$("#veil").fadeOut(200);

	$('.bottom').animate({left: "-100px"},200,0);
	$('.prompt_bottom').animate({width: "160vw"},200,0);
	$('.bottom').animate({bottom: "25px"},200,0);
	$('.bottom').animate({height: "75px"},200,0);

	$('#count_down_bottom').fadeIn(150);
	$('#count_down_time').fadeIn(150);
	var count_time = 1;
	count_down = setInterval(function() {
		document.getElementById("count_down_time").innerText = "1:"+(59-count_time++);
	}, 1000);
}
function click_unuse() {
	$('#load').fadeOut(200);
	$("#veil").fadeOut(200);
	$("#flex-container").hide();
	$('#load').show();
	$('#load').fadeOut(400);
}