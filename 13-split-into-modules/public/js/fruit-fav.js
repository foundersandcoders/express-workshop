document.getElementById('js-fruit-list').addEventListener('click', e => {
  if (e.target.matches('#js-fav-btn')) {
    e.target.classList.toggle('fruit__fav-btn--selected');
  }
});
