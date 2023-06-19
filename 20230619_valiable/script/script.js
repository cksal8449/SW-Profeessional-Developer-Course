// //var text = "text content" //변수 지정
// const app = document.getElementById("app") 
// // app.textContent = text;


// //ES6 ESNEXT
// //const // 상수 / 많이 사용 
// //let 

// for(let i = 0; i <0; i++ ){
//   console.log(i);
//   const text = "text";
//   console.log(text)
// }

// 버튼을 눌렀을 때, 값이 증가한다.
// 버튼을 변수에 저장
const btnInc = document.getElementById("increase")
const btnDnc = document.getElementById("decrease")
// consloe.log(btnInc) 
// number id-number 변수저장
// number => content
const content = document.getElementById("content")
// console.log(nuber)
// 초기화된 숫자값
let incNum = 0

// btnInc 눌렀을 때 숫자 증가
btnInc.addEventListener("click", () => {
 inc(originNumber,content, true) //실행을 어디서 하고 있는가
})

// btnDnc 눌렀을때 숫자가 감소
btnDnc.addEventListener("click", () => {
  inc(originNumber,content, false) //실행을 어디서 하고 있는가
})

const money = 100

// 함수정의
// function inc(number, content, check) {
  const inc = (number, content, check) => {
  if(check === true){
    number = number + money;
  }else{
    if(number > 0){
      number = number - money;
    }
  }
content.textContent = number
originNumber = number
}

// 실행
// inc(incNum)



