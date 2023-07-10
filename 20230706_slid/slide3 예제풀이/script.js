let slideList = document.querySelector('.slide-list');
// 여러개니깐 all로 가져와야함
let slideItems = document.querySelectorAll('.slide-list li');
// console.log(slideItems.length)
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let cuurentSlide = 0;
// console.log(cuurentSlide)

nextBtn.addEventListener('click', function(){
  // slideItems 배열 length의 -1보다 값이 작을 때
  if(cuurentSlide < slideItems.length -1){
    cuurentSlide++;
    slideList.style.transform = `translateX(-${cuurentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function(){
  if(cuurentSlide > 0){
    cuurentSlide--;
    slideList.style.transform = 'translateX(-'+cuurentSlide * 100+'vw)'
  }
})