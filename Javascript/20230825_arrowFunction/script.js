// Arrow Function(화살표 함수)
// Javascript ES6

// function(){}
//  () => {}

// 함수 항상 목적에 맞게 사용
// 1. 여러코도 묶을 때 

// Arrow Function의 장점
// 1. 파라미터(매개변수)가 하나일 때 소괄호 생략 가능
// 2. 코드가 줄바꿈 없이 한 줄이면 중괄호, return(넘겨주다) 생략 가능

// 함수 선언식
// function plus(num) {
//  return num + 10;
// }
// console.log(plus(10));

// Arrow Function
// let plus = num => num + 10;
// console.log(plus(10));


// [1,2,3,4].forEach(function(num){
//   console.log(num);
// })

// Arrow Function
// 매개변수가 하나고, 코드가 한 줄일때 (),{} 생략 가능 
// [1,2,3,4].forEach(num => console.log(num))


// this == e.currentTarget
document.getElementById('btn').addEventListener('click',function(e){
this.innerHTML ='버튼';
e.currentTarget.innerHTML = '버튼';
console.log(this);
console.log(e.currentTarget);
})

// console.log(this);

// Arrow Function은 함수 내의 this 값을 변경 시키지 않는다.
// this !=(일치하지 않음) e.currentTarget
// Arrow Function에서 this값 => 함수 밖 this 값 그대로 사용 
// document.getElementById('btn').addEventListener('click', (e) => {
//   this.innerHTML ='버튼';
//   e.currentTarget.innerHTML = '버튼';
//   console.log(this);
//   console.log(e.currentTarget);
// })

// 함수선언식이랑 Arrow Function의 this 값이 다르다.