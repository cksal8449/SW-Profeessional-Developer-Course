
// 최저시급 DOM
const salaryElem = document.getElementById("salary")

// 최저시급 content 값
const salary = parseInt(salaryElem.textContent)
// console.log(salary)

// 결과 DOM
const resultElem = document.getElementById("result")

// 결과 content 값
let result = resultElem.textContent;

// 계산버튼
const actionElem = document.getElementById("action")

actionElem.addEventListener("click", () => {
//근무시간 
const timeElem = document.getElementById("time")
let timeValue = +timeElem.value 
// 숫자일 경우 , string -> number 형변환 
//  praseInt(value) string -> number 형변환
// 
console.log(time.value)

// 결과 계산 - 근무시간 x 최저시급
result = timeValue * salary;
console.log(result)

resultElem.textContent = result
})

// console.log(result)


// ES5
function func(number, text) {
  return console(number, text);
}

// ES6, ESNEXT
const func(number,text) => console.log(number, text) 

// var 예기치 못한 상황을 유발하기 때문에, 숙련되지 못한 경우엔 오류가 발생할 수 있어 점차 사용하지 않는 추세

// let, const
// let = 변할 수 있는 값, 내용
// const = 변할 수 없는 것들.

// console.log() 내가 가져온 값을 실질적으로 제대로 불러오고 있는지 확인
// console.log(typeof 변수명) // number, srting, boolean 등 타입체크
// 타입 자료형 - 자료 형태 - nuber, string, boolean , object...
// addEventListener('click', function(){})
// mousemove, scroll, resize ... mousover, mouseleave, mouseenter,
// touch event
