const app = document.getElementById('app')
const list = ['a','b','c','d','e']
// list를 반복하겠다 
// list.forEach((item, index) =>  {
//   // 1. p태그 생성
//   const p = document.createElement('p')
//   // 2. p태그 안에 item 문자열 삽입
//   p.textContent = item
//   // 3. app안에 p삽입
//   app.appendChild(p)
// })

// 위의 forEach 문과 같은 내용
for(let index = 0; index < list.length; index++){
  const p = document.createElement('p')
  p.textContent = list[index]
  app.appendChild(p)
}
