let buttons = document.querySelectorAll('.btn-group button');

buttons.forEach(function(btn, index){
  btn.addEventListener('click',function(){
    let slideList = document.querySelector('.slide-list');
    // console.log(slideList)
    let xValue = -index * 100 + 'vw';
    // slideList.style.transform ='translateX('+ xValue + ')'
    slideList.style.transform =`translateX(${xValue})`;
   
    // buttons라는 배열을 한번 더 돌면서 모든 버튼이
    // 가지고 있는 active class remove 
    // buttons.forEach(function(otherBtn){
    //   otherBtn.classList.remove('active')
    // })
    // // 클릭된 버튼에만 active class를 추가 시켜주는 방식
    btn.classList.add('active');

    // 조건문
    // 현재 클릭되어 있는 버튼이 아닐 때 &&
    // active라는 class를 포함하고 있다면
    // 위의 조건이 true일 떄 active class remove
    buttons.forEach(function(otherBtn){
      if(otherBtn !== btn && otherBtn.classList.contains('active')){
        otherBtn.classList.remove('active');
      } 
    })
  })
})