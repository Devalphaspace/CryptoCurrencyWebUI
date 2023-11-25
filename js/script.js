const menubtn = document.querySelector('.menu');
const crossbtn = document.querySelector('.cross-icon');
const navLinks = document.querySelector('.links');
menubtn.addEventListener('click', () => {
    navLinks.classList.add('active');

})
crossbtn.addEventListener('click', () => {
    navLinks.classList.remove('active');

})