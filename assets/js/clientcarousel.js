$(document).ready(function(){
  $('.clientcarousel').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
        
  });
});




$(document).ready(function(){
  $('.blogcarousel').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [

          {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 350,
        settings: "unslick"
        
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});







