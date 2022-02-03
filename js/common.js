const   burgerBtn = document.querySelector('.burger-menu__btn '), 
        burgerMenu = document.querySelector('.menu__small-screen'), 
        bgMenu = document.querySelector('.bg__menu'), 
        body = document.querySelector('.body'), 
        socialBtn = document.querySelector('.fixed__social-surface'), 
        loading = document.querySelector('.loading'), 
        sideBarSet = '.side-bar__settings', 
        dropdownList = document.querySelector('.side-bar__settings'), 
        dropdownBtn = document.querySelector('.side-bar__dropdown'),
        cards = document.querySelectorAll('.card');


window.addEventListener('load', () => { 
    resizeChange();
    setTimeout(() => {
        loading.classList.add('small');
    }, 1000)
    setTimeout(() => {
    loading.classList.add('hide'); 
    }, 1300)
}) 


window.addEventListener('resize', () => {
    if(window.innerWidth > 991){
      burgerMenu.classList.remove('show');
      burgerBtn.classList.remove('change');
      body.classList.remove('hidden');
    } 
    resizeChange();
})

 


function resizeChange() {
    cards.forEach(item => {
    let itemWidth = item.clientWidth;
    item.style.height = itemWidth + 'px';
})
}


socialBtn.addEventListener('click', () => { 
    socialBtn.parentElement.classList.toggle('pushed')
})

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
      burgerBtn.classList.toggle('change');
      burgerMenu.classList.toggle('show');
      body.classList.toggle('hidden')
})


bgMenu.addEventListener('click', (e) => {   
    if(e.clientX > burgerMenu.clientWidth){
      burgerMenu.classList.remove('show');
      body.classList.remove('hidden');
      burgerBtn.classList.remove('change');
    }
})

class Dropdown {
    constructor(option) {
      this.el = document.querySelectorAll(option.el);
      this.el.forEach(menu => {
        let btn = menu.querySelector('.side-bar__dropdown'), 
            btnHeight = btn.clientHeight; 
            menu.style.height = btnHeight + 'px'; 
          btn.addEventListener('click', () => {  
            menu.classList.toggle('active'); 
              let list = menu.querySelector('.side-bar__dropdown-list'),
                  listHeight = list.clientHeight;  
                  menu.style.height = btnHeight + listHeight + 'px';
                if(menu.classList.contains('active')){   
                   
                    burgerMenu.classList.add('change-height')
                }else {
                    burgerMenu.classList.remove('change-height');  
                }
          })
  
      })
    } 
  }
  
  const dropdown = new Dropdown({
      el: '.side-bar__settings'
  })


  Fancybox.bind(".card__img", {
    Image: {
      zoom: true,
    },
  });