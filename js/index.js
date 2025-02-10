var swiper = new Swiper(".mySwiper", {
    slidesPerView:4,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    350:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 1,
    },

    576:{
      slidesPerView: 1.3,
    },
    650: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1299:{
      slidesPerView: 3.5,
    },
  },
});
// console.log($)
$(document).ready(function(){
  $('.minus').hide();
  $('.para1').hide();

  $('.faq-area').each(function(){
    let faq = $(this);
    let plus = faq.find('.plus');
    let minus = faq.find('.minus');
    let answer = faq.find('.para1');

    plus.on('click',function(){
      answer.slideDown(300);
      plus.hide();
      minus.show();
    });
    minus.on('click',function(){
      answer.slideUp(300);
      plus.show();
      minus.hide();
    });
  });


});


let toggler=document.querySelector('.ico');
let navlinks=document.querySelector('.nav-links');
let button=document.querySelector('.btn-0');

console.log(toggler);  
console.log(navlinks);
console.log(button);


toggler.addEventListener('click',listDisplay);

function listDisplay(){
  navlinks.classList.toggle('active');
  button.classList.toggle('active');
  console.log("Menu toggled");
  console.log("button shown");
}

