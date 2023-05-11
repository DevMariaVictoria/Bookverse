search = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active')
}

let loginForm = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
}


document.querySelector('#close-login').onclick = () =>{
    loginForm.classList.remove('active')
}


window.onscroll = () =>{

    search.classList.remove('active')

    if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active')
      }else{
         document.querySelector('.header .header-2').classList.remove('active')
    }
}

window.onload = () =>{

    if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active')
      }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
}


let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .boxDois');

filterBtn.forEach(button => {

  button.onclick = () => {
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    let dataFilter = button.getAttribute('data-filter');
    
    filterItem.forEach(item => {
      
      item.classList.remove('active');
      item.classList.add('hide');
      
      if (item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
        item.classList.remove('hide');
        item.classList.add('active');
      }
    });
  };
});

var swiper = new Swiper(".swiper.slide", {
    loop: true,
    centeredSlideas: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 9,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });