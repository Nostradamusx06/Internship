(function () {
  const selects = document.querySelectorAll('.select');

  const isSpaceKey = (evt) => evt.key === ' ';
  const isEnterKey = (evt) => evt.key === 'Enter';

  selects.forEach((select) => {
    const selectList = select.querySelector('.select__dropdown');
    const selectInput = select.querySelector('.select__field');
    const selectItems = select.querySelectorAll('.select__option');
    let selectedItem = null;

    selectItems.forEach((item) => {
      item.setAttribute('tabindex', '0');
      item.addEventListener('mouseover', () => {
        if (!selectedItem) {
          selectInput.value = item.innerText;
        }
      });
      item.addEventListener('mouseout', () => {
        if (!selectedItem) {
          selectInput.value = '';
        }
      });
      item.addEventListener('click', () => {
        selectedItem = item;
        selectInput.value = item.innerText;
      });
    });

    document.addEventListener('click', (event) => {
      if (selectedItem && !selectItems.includes(event.target)) {
        selectedItem = null;
        selectInput.value = '';
      }
    });

    selectInput.addEventListener('click', (evt) => {
      evt.preventDefault();
      selectInput.classList.toggle('select__field--shown');
      selectList.classList.toggle('select__dropdown--shown');
    });

    selectInput.addEventListener('keydown', (evt) => {
      if (isSpaceKey(evt) && !selectList.classList.contains('select__dropdown--shown')) {
        evt.preventDefault();
        selectInput.classList.add('select__field--shown');
        selectList.classList.add('select__dropdown--shown');
      } else if (evt.key !== 'Tab') {
        evt.preventDefault();
      }
    });

    if (selectList.classList.contains('select__dropdown--shown')) {
      selectItems.forEach((item) => {
        item.addEventListener('keydown', (evt) => {
          if (isEnterKey(evt) || isSpaceKey(evt)) {
            selectInput.value = evt.target.innerText;
            selectList.classList.remove('select__dropdown--shown');
            selectInput.classList.remove('select__field--shown');
            selectList.blur();
          }
        });
      });
    }

    selectList.addEventListener('keydown', (evt) => {
      if (isEnterKey(evt) || isSpaceKey(evt)) {
        evt.preventDefault();
        selectInput.value = evt.target.innerText;
        selectList.classList.remove('select__dropdown--shown');
        selectInput.classList.remove('select__field--shown');
      }
    });

    selectList.addEventListener('click', (evt) => {
      selectInput.value = evt.target.innerText;
      selectList.classList.remove('select__dropdown--shown');
    });

    document.body.addEventListener('click', (evt) => {
      if (evt.target !== selectInput) {
        selectInput.classList.remove('select__field--shown');
        selectList.classList.remove('select__dropdown--shown');
      }
    });
  });
})();
