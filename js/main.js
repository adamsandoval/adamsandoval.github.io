(function($){

  var menuBtn = $('.menu__hamburger');
  var menu = $('.menu');


  menuBtn.on('click', function(){

    var isHidden = menu.hasClass('hidden');

    if(isHidden){
      menu.removeClass('hidden');
    } else {
      menu.addClass('hidden');
    }

  });


  $('.menu a[data-image]').on('mouseover', function(){

    var data = $(this).attr('data-image');
    var slide = $('.slide');
    
    slide.css({
      backgroundImage: 'url(' + data+ ')'
    });

    $(this).on('mouseleave', function(){
      slide.css({ backgroundImage: ''});
    });

  });

})(jQuery)
// Immedietally Invoked Function Expression
