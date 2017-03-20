(function($, window){

  addBackgroundImages();

  $(document).on('mouseenter focus', '.menu a[data-slide-id]', handleMenuItemsSlides);

  $(document).on('click', '.menu a[data-slide-id]', handleClickedMenuItem);

  $(document).on('click', '.slides .slid__button', handleClickedSlideButton);

  /****************************************
    Event Handlers
  *****************************************/

  function handleMenuItemsSlides(){
    
    var slideId  = $(this).attr('data-slide-id');
    var slide    = $('.slide[data-slide="' + slideId + '"]:not(.slide--active)');

    // Create timeline 
    var timeline = new TimelineMax({ paused: true });
    timeline.to(slide, .5, { right: 0, zIndex: 5});
    timeline.play();

    // Reverse the timeline when user leaves focus/hover
    $(this).on('mouseleave focusout', function reverseTimeline(){
      timeline.timeScale(1).reverse();
    });
  }

  function handleClickedMenuItem(evt){
    evt.preventDefault();

    var slideId  = $(this).attr('data-slide-id');
    var slide    = $('.slide[data-slide="' + slideId + '"]');
    var slides   = $('.slides').find('.slide');

    slides.removeClass('slide--active');
    slide.addClass('slide--active');
    slides = slides.filter(':not(.slide--active)');
    
    // Create Timeline
    var timeline = new TimelineMax({ paused: true });
    timeline.to(slides, .5, { right: '-100%'});
    timeline.to('.menu', .3, {opacity: 0});
    timeline.to('.menu', 0, {className: '+=hidden', opacity: 1});
    timeline.play();

  }

  /**
   * When a user clicks the Slide button, the content should 
   * slide out. If the URL of the button matches the URL in
   * the address bar, we'll scroll down to the page title. 
   * Otherwise we'll go to the target location 
   */
  function handleClickedSlideButton(evt){

    evt.preventDefault();

    var slideBtn = $('.slid__button');
    var slideContent = $(this).closest('.slide__content');

    // Create Timeline
    var tl = new TimelineMax({paused: true});
    tl.to(slideContent, .5, {right: '-100%'});
    tl.add(function(){
      if(window.location.href !== evt.target.href) {
        window.location = evt.target.href;
      } else {
        tl.to('.slide__bar', .5,{right: '-100%'});
        tl.to(window, 1, {scrollTo: Math.abs($(window).height()/2)});
      }
    })
    tl.play();
  }


  /****************************************
    Function Declarations
  *****************************************/

  function addBackgroundImages(){
    
    var slideId         = getSlideIdFromActiveMenuItem();
    var slides          = $('.slides').find('.slide');
    var activeSlide     = slides.filter('.slide[data-slide="' + slideId + '"]');
    var slide;

    activeSlide.addClass('slide--active');

    slides.each(function(){
      slide = $(this);
      if(slide.attr('data-slide-bg')){
        slide.css({
          backgroundImage: 'url(' + slide.attr('data-slide-bg') + ')'
        });  
      }
    });
  }

  function getSlideIdFromActiveMenuItem(){
    var activeMenuItem  = $('.menu').find('.active');
    return activeMenuItem.attr('data-slide-id');
  }

})(jQuery, window);