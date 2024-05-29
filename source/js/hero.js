import Swiper from 'swiper';
import 'swiper/css';

import { Autoplay, Pagination } from 'swiper/modules';

(function () {

  const initHeroSwiper = () => {
    const swiperHero = new Swiper('.slider__swiper', {
      modules: [Autoplay, Pagination],
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        bulletElement: 'div',
        bulletClass: 'slider__pagination-bullet',
        bulletActiveClass: 'is-active',
      },

      // autoplay: {
      //   delay: 3000,
      // },

      breakpoints: {
        1440: {
          allowTouchMove: false,
        },
      },
    });

    return swiperHero;
  };


  initHeroSwiper();
})();
