(function () {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const submitButton = modal.querySelector('.modal__submit-button');
  const openButton = document.querySelector('.about__button');
  const closeButton = document.querySelector('.modal__close-button');
  const overlay = document.querySelector('.about__overlay');

  const openModal = (evt) => {
    evt.preventDefault();
    modal.classList.toggle('is-open');
    overlay.classList.toggle('is-open');
    body.style.overflow = 'hidden';
  };

  const closeModal = (evt) => {
    evt.preventDefault();
    modal.classList.remove('is-open');
    overlay.classList.remove('is-open');
    body.style.overflow = 'auto';
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.classList.remove('is-open');
      overlay.classList.remove('is-open');
      body.style.overflow = 'auto';
    }
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.modal') && event.target !== openButton) {
      modal.classList.remove('is-open');
      overlay.classList.remove('is-open');
      body.style.overflow = 'auto';
    }
  });

  const toggleSubmitButton = (isDisabled) => {
    submitButton.disabled = isDisabled;
  };

  const onClick = () => {
    if (!modal.classList.contains('is-error')) {
      modal.classList.add('is-error');
    }
  };

  const onSubmit = async () => {
    toggleSubmitButton(true);
    modal.reset();
    setTimeout(() => {
      toggleSubmitButton(false);
    }, 1000);
  };

  closeButton.addEventListener('click', closeModal);
  openButton.addEventListener('click', openModal);
  modal.addEventListener('submit', onSubmit);
  submitButton.addEventListener('click', onClick);
})();
