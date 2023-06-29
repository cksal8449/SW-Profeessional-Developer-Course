// const promise = new Promise((resolve,reject) => {
//   setTimeout(() => {console.log('3초뒤')},3000)
// })

// promise.then(result => result).catch(error => console(error))

// // async가 있으면 기다렸다가 반응한다
// const promise = async () => {
//   try{
//   const getData = await fetch('주소')
//  const result = await getData.json()
//  } catch(error) {
//   console.log(error)
//  }
// }

// ----------------- import / export ---------------------------

// import add from './add.js'

// console.log(add(2))
// -------------------------------------------------------------
// multiply
// 매개변수 number를 받아서 * 2한 값을 반환
// 곱하기 함수를 파일로 만들어서 export 시키고,
// app.js 불러와서 실행하고 결과 보기

// import add from './multiply.js'
// console.log(multiply(3))

// import{add, multiply} from './util.js'

// console.log(add(2))
// console.log(multiply(3))

// ---------------------------------------------------------------

import * as calc from './util.js'

console.log(add(2))
console.log(multiply(3))


// util.js
// 함수 - double
// 매개변수 - number
// double이 하는 일은 매개변수 number * number
// app.js에 가져다가 결과를 consol.log()

import * as double from './util.js'

console.log(double())
