let leftBtn = document.querySelector('.left-btn')
let rightBtn = document.querySelector('.right-btn')
let slideList = document.querySelector('.slide-list')
let index = 0;
// console.log(leftBtn,rightBtn)

slideList.addEventListener('click', () => {
  if(index===0) return;
  index -= 1;
  slideList.style.transform =`tanslateX(${xValue})`;
})



rightBtn.addEventListener('click', next)
function next(){
  slideList.style.transform = 'translateX(-100vw)'; 
}