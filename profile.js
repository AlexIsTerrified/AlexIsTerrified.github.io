function autoScroll(posID){
	$("html, body").animate({
		scrollTop: $('#'+posID).offset().top
	},1000)
}