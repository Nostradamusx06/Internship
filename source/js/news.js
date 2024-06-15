import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

(function () {
  const initNewsSwiper = () => {
    const swiperNews = new Swiper('.news__swiper', {
      autoHeight: true,
      direction: 'horizontal',
      watchSlidesProgress: true,

      modules: [Grid, Navigation, Pagination],
      pagination: {
        el: '.news__pagination',
        type: 'bullets',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet--active',
        bulletElement: 'button',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
        renderBullet: function (index, className) {
          return `<button class="pagination__button ${className}">${index + 1}</button>`;
        },
      },
      navigation: {
        nextEl: '.news__swiper-button--next',
        prevEl: '.news__swiper-button--prev',
        disabledClass: 'button--swiper--disabled',
      },
      breakpoints: {
        320: {
          width: 290,
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          grid: {
            rows: 2,
            fill: 'column',
          },
        },
        768: {
          width: 678,
          autoHeight: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'column',
          },
        },
        1440: {
          autoHeight: false,
          slidesPerView: 'auto',
          spaceBetween: 32,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
      },
    });

    return swiperNews;
  };

  initNewsSwiper();
})();
