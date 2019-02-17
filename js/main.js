let burgerButton = document.getElementById('hamburger');
let mainNav = document.getElementById('main-nav');
let hidden = document.querySelector('.hidden');
//want to open the navigation on click of the hamburger icon in mobile sizes.
// doesn't work yet
burgerButton.addEventListener('click', function () {
  // mainNav.style.display = 'flex';
  hidden.toggleAttribute('hidden');
  
})

