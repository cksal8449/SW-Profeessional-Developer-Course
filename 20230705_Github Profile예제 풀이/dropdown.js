// dropdown-btn을 클릭했을 때 dropdown-menu한테 active class 추가
// dropdown-menu가 active class를 가지고 있을 때 클릭하면 active remove
// toggle

let dropDownBtn = document.querySelector('.dropdown-btn');
let dropDownMenu = document.querySelector('.dropdown-menu');
// console.log(dropDownBtn)

// console.log('13131')

dropDownBtn.addEventListener('click', function(){
  dropDownMenu.classList.toggle('active');
})