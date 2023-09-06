const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: false,
  centeredSlides: true,
  slidesPerView: 2,
  speed: 2000,
  autoHeight: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 80,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
