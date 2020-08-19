const $aboutButton = document.getElementById('aboutButton');
const $portfolioButton = document.getElementById('portfolioButton');
const $hide = document.getElementById('hide');
const $hidep = document.getElementById('hidep');
const $hidep1 = document.getElementById('hidep1');


$aboutButton.addEventListener('click', () => {
  $hide.classList.toggle('active');
});
$portfolioButton.addEventListener('click', () => {
  $hidep.classList.toggle('active');
  $hidep1.classList.toggle('active');
});

