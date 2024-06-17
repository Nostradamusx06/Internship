(function () {
  const headerButton = document.querySelector('.header__button');
  const headerNav = document.querySelector('.header__nav');
  const headerMenuWrapper = document.querySelector('.header__menu-wrapper');
  const pageBody = document.querySelector('.page-body');
  const headerLinks = document.querySelectorAll('.header__link');

  headerButton.addEventListener('click', () => {
    headerNav.classList.toggle('is-open');
    headerButton.classList.toggle('active');
    pageBody.classList.toggle('page-body--shown');
    pageBody.classList.toggle('page-body--hidden');

    if (headerNav.classList.contains('is-open')) {
      headerButton.setAttribute('aria-expanded', 'true');
      headerMenuWrapper.setAttribute('aria-hidden', 'false');
      headerLinks.forEach((link) => link.setAttribute('tabindex', '0'));
    } else {
      headerButton.setAttribute('aria-expanded', 'false');
      headerMenuWrapper.setAttribute('aria-hidden', 'true');
      headerLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target !== headerButton && event.target !== headerButton) {
      headerNav.classList.remove('is-open');
      headerButton.classList.remove('active');
      pageBody.classList.remove('page-body--shown');
      pageBody.classList.remove('page-body--hidden');
      headerButton.setAttribute('aria-expanded', 'false');
      headerMenuWrapper.setAttribute('aria-hidden', 'true');
      headerLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      headerNav.classList.remove('is-open');
      headerButton.classList.remove('active');
      pageBody.classList.remove('page-body--shown');
      pageBody.classList.remove('page-body--hidden');
      headerButton.setAttribute('aria-expanded', 'false');
      headerMenuWrapper.setAttribute('aria-hidden', 'true');
      headerLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
    }
  });

  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('is-open');
      headerButton.classList.remove('active');
      pageBody.classList.remove('page-body--shown');
      pageBody.classList.remove('page-body--hidden');
      headerButton.setAttribute('aria-expanded', 'false');
      headerMenuWrapper.setAttribute('aria-hidden', 'true');
      link.setAttribute('tabindex', '-1');
    });
  });
})();
