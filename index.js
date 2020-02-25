const icon = document.getElementById('hamburger');
const nav = document.getElementById('nav');
icon.addEventListener('click', () => {
  nav.classList.toggle('open');
  document.body.classList.toggle('backdrop');
});