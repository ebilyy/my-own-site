module.exports = function () {
  const btn = document.querySelector('.js-burger-btn');
  const header = document.querySelector('.js-header');
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('is-active');
    header.classList.toggle('is-open');
    body.classList.toggle('is-overflow');
    html.classList.toggle('is-overflow');
  });
}