import Swiper from 'swiper';
import {Scrollbar, Navigation } from 'swiper/modules';

(function () {
  const initProgramsSwiper = () => {
    const swiperPrograms = new Swiper('.programs__swiper', {
      autoHeight: true,
      modules: [Scrollbar, Navigation],
      scrollbar: {
        el: '.programs__scrollbar',
        draggable: true,
        dragSize: 394,
      },
      navigation: {
        nextEl: '.programs__swiper-button--next',
        prevEl: '.programs__swiper-button--prev',
        disabledClass: 'button--swiper--disabled',
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          allowTouchMove: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          scrollbar: {
            dragSize: 326,
          },
        },
        1440: {
          allowTouchMove: false,
          slidesPerView: 3,
          spaceBetween: 31,
        },
      },
    });

    return swiperPrograms;
  };

  initProgramsSwiper();
})();
