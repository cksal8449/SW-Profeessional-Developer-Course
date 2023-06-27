// 동기 - 순차적으로 실행
// 예) 1번줄부터 마지막줄까지 실행

// 비동기 - 자신만의 실행 순서를 갖고 있음
// 예) 서버에서 오는 데이터, 거리에 따라 전송속도가 달라 대기 시간이 필요하다.
// ------------------------------------------------------------------

// promise 안에 약속 (Promise)를 담은 상태
// promise는 비동기 처리 -> 동기처럼 순서를 기다리기 위해서

// let promise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     resolve('응답을 받았습니다.'),2000
//   })
// })

// // promise -> then 통해 데이터를 받아오거나 , catch로 에러를 받아온다.
// promise.then(result => console.log(result)).catch(reject => console(reject))

// let posts = [];
// const app = document.getElementById('app')
const app = document.getElementById('app')

// fatch api
// fatch - 서버로부터 데이터를 받아올때 사용하는 API
let todo = fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
todo
.then(response => response.json())
.then(json => {
//   // user의 email 주소 출력
//   json.forEach(item => {
//   const p = document.createElement('p')
//   const h2 = document.createElement('h2')
//   console.log(item)
//   p.textContent = item.email
//   h2.textContent = item.username
//   app.appendChild(p) 
//   app.appendChild(h2)
// })
console.log(json)
json.forEach(imageDate => {
  const img = document.createElement('img')
  img.src = imageDate.url
  app.appendChild(img)
})
})


// posts.forEach(posts => {
//   console.log(post)
// })


