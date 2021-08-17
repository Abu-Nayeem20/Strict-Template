(function ($) {
	'use strict';

   // Codes are here.....

$(window).scroll(function () {
	
	var goTop = $(window).scrollTop();

	if (goTop>500) {
		$(".scrll").css({'opacity' : '1'});
	}
	else {
		$(".scrll").css({'opacity' : '0'});
	}

});  

$(".scrll").on("click",function () {
	
	$("html").animate({'scrollTop' : '0'},2000);
});

$(".menu-bar i").on("click",function () {
	
	$(".strict-menu").slideToggle();
});













})(jQuery);