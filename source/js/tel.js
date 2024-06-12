(function () {
  const baseCountryCode = '+7';
  const baseMatrix = ' (___) ___ __ __';

  const onPhoneInputInput = (e) => {
    const matrix = `${baseCountryCode}${baseMatrix}`;
    const val = e.target.value.replace(/\D/g, '');
    let i = 0;
    e.target.value = matrix.replace(/./g, (a) => {
      if (/[_\d]/.test(a) && i < val.length) {
        return val.charAt(i++);
      } else if (i >= val.length) {
        return '';
      } else {
        return a;
      }
    });
  };

  const onPhoneInputBlur = (e) => {
    if (e.target.value === baseCountryCode) {
      e.target.value = '';
    }
  };

  const initPhoneInput = () => {
    const phoneInputs = document.querySelectorAll('#phone');
    phoneInputs.forEach((phoneInput) => {
      phoneInput.addEventListener('input', onPhoneInputInput);
      phoneInput.addEventListener('blur', onPhoneInputBlur);
      phoneInput.addEventListener('focus', () => {
        phoneInput.value = baseCountryCode;
      });
    });
  };

  initPhoneInput();
})();
