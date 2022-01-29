const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,  
    watchSlidesProgress: true, 
    
  });
 
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: "auto", 
    spaceBetween: 10, 
    centeredSlides: true,
    thumbs: {
      swiper: swiper,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const cards = document.querySelectorAll('.card'),
      burgerBtn = document.querySelector('.burger-menu__btn '),
      burgerClose = document.querySelector('.burger-menu__close'),
      burgerMenu = document.querySelector('.menu__small-screen'),
      body = document.querySelector('.body');
 

cards.forEach(item => {
    let itemWidth = item.clientWidth;
    item.style.height = itemWidth + 'px';
})

window.addEventListener('resize', () => {
  cards.forEach(item => {
    let itemWidth = item.clientWidth;
    item.style.height = itemWidth + 'px';
})
})



burgerBtn.addEventListener('click', (e) => {
e.preventDefault(); 
burgerMenu.classList.add('show');
body.classList.add('hidden')
})
burgerClose.addEventListener('click', (e) => {
e.preventDefault(); 
burgerMenu.classList.remove('show');
body.classList.remove('hidden');
})
window.addEventListener('resize', () => {
if(window.innerWidth > 991){
burgerMenu.classList.remove('show');
body.classList.remove('hidden');
}
})