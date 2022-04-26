import Swiper, { Pagination } from 'swiper';

export default function initSwiper() {
  return new Swiper('.swiper-container', {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
      },
    },
  });
}
