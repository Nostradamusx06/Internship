import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';

(function () {
  const initNewsSwiper = () => {
    const swiperNews = new Swiper('.news__swiper', {
      autoHeight: true,
      modules: [Grid, Navigation, Pagination],
      pagination: {
        el: '.news__pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: '.news__swiper-button--next',
        prevEl: '.news__swiper-button--prev',
        disabledClass: 'button--swiper--disabled',
      },
      breakpoints: {
        1440: {
          slidesPerView: 'auto',
          // slidesPerGroup: 3,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          autoHeight: false,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });

    return swiperNews;
  };

  initNewsSwiper();
})();


