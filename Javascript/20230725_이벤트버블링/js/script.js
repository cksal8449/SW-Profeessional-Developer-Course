let openBtn = document.querySelector('.btn-primary')
let overlay = document.querySelectorAll('.overlay')


openBtn.addEventListener('click', function(){
  overlay.classList.add('is-active');
})