const menu = document.querySelector('.navbar-toggler');
menu.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('bg-light');
});