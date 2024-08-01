
    jQuery(document).ready(function($) {
      $('#slick').slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 6000,
          fade: true,
          cssEase: 'ease',
          slidesToShow: 1,
          adaptiveHeight: false,
          pauseOnHover: false,
          slide: '.fade',
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                  autoplay: false,
                  adaptiveHeight: true
                }
              }
            ]
      });
      $('#slick-bar').slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 6000,
          fade: true,
          cssEase: 'ease',
          slidesToShow: 1,
          adaptiveHeight: false,
          pauseOnHover: false,
          slide: '.fade',
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                  autoplay: false,
                  adaptiveHeight: true
                }
              }
            ]
      });
      $('#slick-grill').slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 6000,
          fade: true,
          cssEase: 'ease',
          slidesToShow: 1,
          adaptiveHeight: false,
          pauseOnHover: false,
          slide: '.fade',
          responsive: [
              {
                breakpoint: 1200,
                settings: {
                  autoplay: false,
                  adaptiveHeight: true
                }
              }
            ]
      });
      $('#features').slick({
            lazyLoad: 'ondemand',
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1
                }
              }
            ]
        });
    }); 