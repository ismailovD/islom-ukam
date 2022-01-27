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

const toggleMode = document.querySelector('#checkbox1'),
      body = document.querySelector('.body'),
      logo = document.querySelector('.logo__img'),
      cards = document.querySelectorAll('.card');
toggleMode.addEventListener('click', () => {
  if(toggleMode.checked){
    body.classList.add('night-mode');
    logo.setAttribute('src', './images/logoW.png')
  }else  {
    body.classList.remove('night-mode');
    logo.setAttribute('src', './images/logoB.png')
  }
})

cards.forEach(item => {
    let itemWidth = item.clientWidth;
    item.style.height = itemWidth + 'px';
})