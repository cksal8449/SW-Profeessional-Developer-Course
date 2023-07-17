let modalChang = document.querySelector ('.popup-wrapper')
let closeBtn = document.querySelector('.popup-btn')

closeBtn.addEventListener('click', function(){
  modalChang.classList.add('is-active')
})