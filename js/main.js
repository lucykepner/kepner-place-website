let burger = document.getElementById('hamburger');
let mainNav = document.getElementById('main-nav');
//want to open the navigation on click of the hamburger icon in mobile sizes.
// doesn't work yet
burger.addEventListener('click', function () {
  mainNav.style.display = 'flex';
  console.log('hamburger clicked')
})