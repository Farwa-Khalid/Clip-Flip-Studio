const portfolioSwiper = new Swiper('.portfolio-slider .swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {el: '.swiper-pagination', clickable: true},
});

const brandsSwiper = new Swiper('.brands-slider .swiper-container', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {delay: 2500},
  pagination: {el: '.swiper-pagination', clickable: true},
});