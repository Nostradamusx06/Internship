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
        bulletClass: 'slider__pagination-button',
        bulletActiveClass: 'slider__pagination-button--active',
        bulletElement: 'button',
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      watchSlidesProgress: true,
      updateOnWindowResize: true,

      breakpoints: {
        1440: {
          simulateTouch: false,
          allowTouchMove: false,
        },
      },
    });

    const addButtonDescription = () => {
      const numbers = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Седьмой', 'Восьмой'];
      const paginationButtons = heroWrapper.querySelectorAll('.slider__pagination .slider__pagination-button');
      for (let i = 0; i < paginationButtons.length; i++) {
        const descriptionElement = document.createElement('span');
        descriptionElement.classList.add('visually-hidden');
        descriptionElement.textContent = `${numbers[i]} слайда промо.`;
        paginationButtons[i].append(descriptionElement);
      }
    };

    addButtonDescription();

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
