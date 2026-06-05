(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {




        // AOS Init
        AOS.init({
            once: true,
            duration: 1500,
        });


        // --------- Language Selector ---------
        $(document).ready(function() {
            $('.language__selector').niceSelect();
        }); 



        // --------- Nav Menu Active ---------
        $('.header__menu ul li a').click(function(){
            $('li a').removeClass("active");
            $(this).addClass("active");
        });


        // -------------- Hero Banner Image Slider-----------

        var swiper = new Swiper(".hero__slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 600,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                       '/' +
                       '<span class="' + totalClass + '"></span>';
              }
            },
            navigation: {
              nextEl: ".swiper-next-text",
              prevEl: ".swiper-prev-text",
            },
          });


        // -------------- Bible Card Slider-----------


        var bibleSwiper = new Swiper('.bible__wraper', {
            loop: true,
            speed: 600,
            spaceBetween: 20,
            centeredSlides: false,
            slidesPerView: 1, 
            navigation: {
                nextEl: '.bible__area .swiper-button-next',
                prevEl: '.bible__area .swiper-button-prev',
            },
            breakpoints: {
                480:  { slidesPerView: 1, spaceBetween: 10 },
                768:  { slidesPerView: 2, spaceBetween: 15 },
                1028: { slidesPerView: 3, spaceBetween: 20 },
                1350: { slidesPerView: 4, spaceBetween: 20 },
            }
        });




    }); //---document-ready-----



}(jQuery));


