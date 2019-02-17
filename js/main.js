let burgerButton = document.getElementById('hamburger');
let hidden = document.querySelector('.hidden');

//open the navigation on click of the hamburger icon in mobile sizes.
burgerButton.addEventListener('click', function () {
  hidden.toggleAttribute('hidden');
})

