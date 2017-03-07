// JavaScript Document



		
		$(window).scroll(function(){
    $(".header-img").css("opacity", 1 - $(window).scrollTop() / 250);
  });