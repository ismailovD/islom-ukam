const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,  
    watchSlidesProgress: true,
    allowTouchMove:false,
    autoHeight: true
  });
 
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
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
});
 

 