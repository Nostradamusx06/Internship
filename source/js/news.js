import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
      width: 1240,
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

const swiperWrapper = document.querySelector('.news__swiper-wrapper');
const swiperLinks = swiperWrapper.querySelectorAll('.news__content-button');
const paginationButtons = document.querySelectorAll('.swiper-pagination-bullet');

const setTabIndex = () => {
  swiperLinks.forEach((link, index) => {
    if (index >= swiperNews.activeIndex && index < swiperNews.activeIndex + 3) {
      link.setAttribute('tabindex', '0');
    } else {
      link.setAttribute('tabindex', '-1');
    }
  });
};

swiperLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
setTabIndex();

swiperNews.on('activeIndexChange', setTabIndex);

paginationButtons.forEach((button) => {
  if (!button.classList.contains('swiper-pagination-bullet--active-main') && !button.classList.contains('swiper-pagination-bullet--active-next')) {
    button.tabIndex = -1;
  } else {
    button.tabIndex = 0;
  }
});

swiperNews.on('paginationRender', () => {
  paginationButtons.forEach((button) => {
    if (!button.classList.contains('swiper-pagination-bullet--active-main') && !button.classList.contains('swiper-pagination-bullet--active-next')) {
      button.tabIndex = -1;
    } else {
      button.tabIndex = 0;
    }
  });
});

export { swiperNews };
