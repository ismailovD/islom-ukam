const swiper = new Swiper(".mySwiper", { 
    spaceBetween: 10,
    slidesPerView: 1,  
    watchSlidesProgress: true,
    allowTouchMove:false,
    autoHeight: false
  });
 
const swiper2 = new Swiper(".mySwiper2", { 
    slidesPerView: "auto", 
    spaceBetween: 10, 
    centeredSlides: true,
    watchSlidesProgress: true,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoHeight:false
});
 

 