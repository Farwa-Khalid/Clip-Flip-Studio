const items = document.querySelectorAll('.benefit-card ul li');

items.forEach((item, i) => {
  setTimeout(() => {
    item.classList.add('visible');
  }, i * 400);
});