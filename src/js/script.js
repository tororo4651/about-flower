// グローバルナビゲーションの開閉
$(function () {
  $('#js-gNavBtn').on('click', function () {
    $('html').toggleClass('is-gNavOpen');
  });
});



// カルーセル（Swiper）・トップページ
var swiper = new Swiper(".topSwiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// カルーセル（Swiper）・詳細ページ
var swiper = new Swiper(".detailThumbSwiper", {
  // loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".detailPhotoSwiper", {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});




document.querySelectorAll('.detailSection__thumbnailLink')[1].addEventListener('click', function (event) {
  document.querySelector('.detailSection__image').setAttribute('src', this.getAttribute('href'));

  event.preventDefault();
});
