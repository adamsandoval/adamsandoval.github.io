(function($){

  //Please note, the DOM should be ready
  // Barba.Pjax.start();

  var menuBtn = $('.menu__hamburger');
  var menu = $('.menu');
  var mainHeader = document.querySelector('.main-header');

  // Initialize Headroom 
  var headroom  = new Headroom(mainHeader);
  headroom.init();

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
