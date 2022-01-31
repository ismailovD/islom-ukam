const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,  
    watchSlidesProgress: true,
    allowTouchMove:false
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

const cards = document.querySelectorAll('.card'),
      burgerBtn = document.querySelector('.burger-menu__btn '),
      burgerClose = document.querySelector('.burger-menu__close'),
      burgerMenu = document.querySelector('.menu__small-screen'),
      body = document.querySelector('.body'),
      socialBtn = document.querySelector('.fixed__social'),
      loading = document.querySelector('.loading');


window.addEventListener('load', () => { 
  setTimeout(() => {
    loading.classList.add('small');
}, 3000)
  setTimeout(() => {
  loading.classList.add('hide'); 
}, 3300)
}) 

 
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

socialBtn.addEventListener('click', () => {
  socialBtn.classList.toggle('pushed')
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

burgerMenu.addEventListener('click', (e) => {  
  if(e.clientX > burgerMenu.clientWidth){
    burgerMenu.classList.remove('show');
    body.classList.remove('hidden');
  }
})
 