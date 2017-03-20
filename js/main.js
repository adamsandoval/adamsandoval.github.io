(function($){

  var menuBtn = $('.menu__hamburger');
  var menu = $('.menu');

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });


  menuBtn.on('click', function(){

    var isHidden = menu.hasClass('hidden');

    if(isHidden){
      menu.removeClass('hidden');
    } else {
      menu.addClass('hidden');
    }

  });

})(jQuery);
// Immedietally Invoked Function Expression
