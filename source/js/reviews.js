import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

(function () {
  const initReviewsSwiper = () => {
    const swiperReviews = new Swiper('.reviews__swiper', {
      modules: [Scrollbar, Navigation],
      scrollbar: {
        el: '.reviews__scrollbar',
        draggable: true,
        dragSize: 394,
      },
      navigation: {
        nextEl: '.reviews__swiper-button--next',
        prevEl: '.reviews__swiper-button--prev',
        disabledClass: 'button--swiper--disabled',
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
          slidesPerView: 'auto',
          slidesPerGroup: 1,
          spaceBetween: 30,
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
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });

    return swiperReviews;
  };

  initReviewsSwiper();
})();
