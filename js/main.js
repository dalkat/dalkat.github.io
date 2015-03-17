// Hello.
//
// This is The Scripts used for Awesome Photography/Portfolio Template
//
//

function main() {

(function () {
   'use strict';

   //Page Loader
        //<![CDATA[
      $(window).load(function() { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
      });
      //]]>
      
   // Contact form toggle hide/show
    $(document).ready(function(){
      $("#show").click(function(){
        $("#contact").slideToggle("slow,swing");
      });
    });

    // Wow animation
      new WOW().init();

    // Header/Vision carousel slider
      $('.carousel').carousel({
        interval: 3000
      });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
      $(function() {
        $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 70
            }, 900, 'easeInOutExpo');
          event.preventDefault();
        });
      });

    // Highlight the top nav as scrolling occurs
      $('body').scrollspy({
          target: '.navbar-fixed-top' ,
          offset: 75
      });


    

}());

}
main();

/* ==============================================
    Parallax
    =============================================== */ 
    ( function( $ ) {
      // Setup variables
      $window = $(window);
      $slide = $('.homeSlide');
      $body = $('body');
      
        //FadeIn all sections   
      $body.imagesLoaded( function() {
        setTimeout(function() {
              
              // Resize sections
              adjustWindow();
              
              // Fade in sections
            $body.removeClass('loading').addClass('loaded');
            
        }, 800);
      });
      
      function adjustWindow(){
        
        // Init Skrollr
        var s = skrollr.init({
            forceHeight: false
        });
        
        // Get window size
          winH = $window.height();
          
          // Keep minimum height 550
          if(winH <= 450) {
          winH = 450;
        } 
          
          // Resize our slides
          $slide.height(winH);
          
          // Refresh Skrollr after resizing our sections
          s.refresh($('.homeSlide'));
          
      }} )
    ( jQuery );