$(document).ready(function () {

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.news__button-next');
  next.css('left', '8.5rem')
});