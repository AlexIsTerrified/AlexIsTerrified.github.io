function autoScroll(posID){
	$("html, body").animate({
		scrollTop: $('#'+posID).offset().top
	},1000)
}
var menu = document.querySelector('.menu');

function menuCl(){
	menuEl = $(".menu");
	nav = $("#profile nav");
	if(menuEl.hasClass('close')){
		menuEl.removeClass('close');
		nav.removeClass('menu-display');
	}else{
		menuEl.addClass('close');
		nav.addClass('menu-display');
	}
}