let slideList = document.querySelector('.slide-list');
let slideItems = document.querySelector('.slide-list li');

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentSlide = 0;

nextBtn.addEventListener('click' , function(){
  if(currentSlide < slideItems.length -1){
    currentSlide++;
    slideList.style.transform = `translateX(-${currentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function(){
  if(currentSlide > 0){
    currentSlide--;
    slideList.style.transform = 'translateX(-' + currentSlide * 100 + 'vw)'
  }
})