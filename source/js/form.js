(function () {
  const form = document.querySelector('.form');
  const submitButton = form.querySelector('.form__submit-button');
  const selectField = form.querySelector('.select__field');

  const toggleSubmitButton = (isDisabled) => {
    submitButton.disabled = isDisabled;
  };

  const onClick = () => {
    if (!form.classList.contains('is-error')) {
      form.classList.add('is-error');
    }

    if (!selectField.value) {
      selectField.classList.add('is-error');
    }
  };

  const onSubmit = async () => {
    toggleSubmitButton(true);
    form.reset();
    setTimeout(() => {
      toggleSubmitButton(false);
    }, 1000);
  };

  form.addEventListener('submit', onSubmit);
  submitButton.addEventListener('click', onClick);
})();
