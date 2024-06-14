import Swiper from 'swiper';
import 'swiper/css';

import { Pagination } from 'swiper/modules';

(function () {
  const heroWrapper = document.querySelector('.slider__swiper');
  const swiperLinks = heroWrapper.querySelectorAll('.slider__button');

  const initHeroSwiper = () => {
    const swiperHero = new Swiper('.slider__swiper', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'slider__pagination-bullet',
        bulletActiveClass: 'is-active',
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      watchSlidesProgress: true,
      updateOnWindowResize: true,

      breakpoints: {
        1440: {
          simulateTouch: false,
          allowTouchMove: false,
        },
      },
    });

    const setButtonTabIndex = () => {
      swiperLinks.forEach((link) => {
        link.setAttribute('tabindex', '-1');
      });
      swiperHero.slides[swiperHero.activeIndex].querySelector('a').setAttribute('tabindex', '0');
    };

    swiperHero.on('slideChange', () => {
      setButtonTabIndex(swiperHero);
    });


    setButtonTabIndex();

    return swiperHero;
  };

  initHeroSwiper();
})();
