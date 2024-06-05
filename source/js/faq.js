(function () {
  const faqItem = document.querySelectorAll('.faq__item');

  faqItem[2].querySelector('.faq__accordion-answer').classList.add('is-open');
  faqItem[2].classList.add('is-open');

  faqItem.forEach((item) => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq__accordion-answer');
      answer.classList.toggle('is-open');
      item.classList.toggle('is-open');
    });
  });

})();
