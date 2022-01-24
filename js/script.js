const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1, 
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
 
const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10, 
    thumbs: {
      swiper: swiper,
    },
});