// const slide = document.querySelector('.slide-list');
// let slideWidth = slide.clientWidth

// // console.log(slideWidth)

// const FirstBtn = document.querySelector('.btn1');
// const SencondBtn = document.querySelector('.btn2');
// const thirdBtn= document.querySelector('.btn3');

// var 지금사진 = 1;
// document.querySelector('.btn1').addEventListener('click',function(){
// 지금사진 = 1;
// document.querySelector('.slide-list').style.transform = 
// "translateX(0vw)";
// })

// document.querySelector('.btn2').addEventListener('click',function(){
//   지금사진 = 2;
//   document.querySelector('.slide-list').style.transform = 
//   "translateX(-100vw)";
//   })

//   document.querySelector('.btn3').addEventListener('click',function(){
//     지금사진 = 3;
//     document.querySelector('.slide-list').style.transform = 
//     "translateX(-200vw)";
//     })


let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let slideList = document.querySelector('.slide-list');
// console.log(btn1,btn2,btn3)
// console.log(slideList)

// 버튼 1 클릭 했을 때 이미지 (0) translateX
// addEventListener('click')
btn1.addEventListener('click',function(){
  slideList.style.transform = 'translateX(0)'
})
// 버튼 2 클릭 했을 때 이미지 (1) translateX
btn2.addEventListener('click',function(){
  slideList.style.transform = 'translateX(-100vw)'
})
// 버튼 3 클릭 했을 때 이미지 (2) translateX
btn3.addEventListener('click', function(){
  slideList.style.transform = 'translateX(-200vw)'
})

