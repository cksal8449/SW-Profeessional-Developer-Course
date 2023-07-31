// 각 lable 클릭 시
// 클릭된 lable 안 .checkbox-img에 checked class toggle
// 클릭된 lable 안 input checkedbox 에 checked 속성 true / false
let labels = document.querySelectorAll('label');
let totalLabel = document.querySelector('.total label');
let agreeAll = document.querySelectorAll('.agree');
let agreeLabel = document.querySelectorAll('.agree label');
let submitBtn = document.getElementById('submit');
let cancelBtn = document.getElementById('cancel');


labels.forEach(function(label){
label.addEventListener('click', function(e){
  e.preventDefault();
  this.querySelector('.checkbox-img').classList.toggle('checked')

  let inputChek = this.querySelector('input[type="checkbox"]') 
// JS에서 특정 class를 포함하고 있는지 확인 하는 함수 classList.contains()
// .checked class를 통해 체크 유무를 확인할 수 있다.
// 이미지가 체크되어 있다면, checked 속성 true / false
if(this.querySelector('.checkbox-img').classList.contains('checked')) {
inputChek.checked = true;
} else {
  inputChek.checked = false;
}
})
})

// .total label 클릭시 
// .agree 안에 있는 모든 .checkbox-img에 checked class add / remove
// .agree 안에 있는 모든 input checkbox에 checked 속성 true / false
agreeAll.forEach(function(agree){
  totalLabel.addEventListener('click', function(){
    if(this.querySelector('.checkbox-img').classList.contains('checked')) {
      agree.querySelector('.checkbox-img').classList.add('checked');
      agree.querySelector("input[type='checkbox']").checked = true;
    } else {
      agree.querySelector('.checkbox-img').classList.remove('checked');
      agree.querySelector("input[type='checkbox']").checked = false;
    }
  })
})

// .agree label이 모두 체크 됐을 때 
// .total lable 안 .checkbox-img에 checked class add
// .total lable input checkbox에 checked 속성 true 

// .agree label이 모두 체크되지 않았 때 
// .total lable 안 .checkbox-img에 checked class remove
// .total lable input checked에 checked 속성 false
agreeLabel.forEach(function(alabel){
  alabel.addEventListener('click',function(){
    let len = document.querySelectorAll('.agree .checkbox-img').length;
    let chklen = document.querySelectorAll('.agree .checked').length;
    let unchk = len - chklen;

    if(unchk == 0) {
    document.querySelector('.total label .checkbox-img').classList.add('checked');
    document.querySelector('.total input[type="checkbox]').checked = true; 
    }else{
      document.querySelector('.total label .checkbox-img').classList.remove('checked');
      document.querySelector('.total input[type="checkbox"]').checked = false;
    }
   
  })
})

// #submit(확인) 버튼을 클릭 했을 때
// 필수 항목(req) 2개 모두 체크되어 있다면 #form1 submit
// 필수항목 2개 모두 체크되지 않았다면 e.preventDefault()로 막고
// req-alert의 style을 visivilty를 visible로 보여준다
submitBtn.addEventListener('click', function(e){
  e.preventDefault();
let req = document.querySelectorAll('.req').length;
let chkreq = document.querySelectorAll('.req .checked').length;
let unchk = req - chkreq;

if(unchk == 0) {
  document.getElementById('form1').submit();
} else {
  e.preventDefault();
  document.querySelector('.req-alert').style.visibility = 'visible'; 
}
})

cancelBtn.addEventListener('click', function(){
  // 페이지 이동
  location.href = 'https://www.naver.com/'

  // 현재 페이지를 대체 시켜서 이전 페이지로 이동 x
  // location.replace('https://www.naver.com/')

  // 새 창 이동
  // window.open('https://www.naver.com/')
})

