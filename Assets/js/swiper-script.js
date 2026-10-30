$(function () {
    var swiperTestimonials = new Swiper('.swiper.swiperTestimonials', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 1, // Change to 1.5 to show one and a half slides
        spaceBetween: 10,
        loop: true,
        hashNavigation: true,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            300: {
                slidesPerView: 1, // Adjust for smaller screens if needed
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1, // Adjust for medium screens if needed
            },
            // when window width is >= 1025px
            1024: {
                slidesPerView: 1, // Adjust for larger screens if needed
            }
        },
        // If we need pagination
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
});


$(function () {
    var swiperCottages = new Swiper(".swiperCottages", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 5, 
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        breakpoints: {
            425: { slidesPerView: 2, spaceBetween: 10 },  
            768: { slidesPerView: 3, spaceBetween: 15 }, 
            1023: { slidesPerView: 5, spaceBetween: 10 },
          }
          
      });
});