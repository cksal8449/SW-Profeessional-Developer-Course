// // 버튼을 변수에 담고
// // start, stop
// const start = document.getElementById('start')
// const stop = document.getElementById('stop')

// // 버튼을 눌렀을 때 그 안의 텍스트 내용을 consol.log로 출력
// // addEventListener
// start.addEventListener('click',() => {
//   console.log(start.innerText)
// })
// stop.addEventListener('click',() => {
//   console.log(stop.innerText)
// })

// 1. title 변수선언, plus, minus 버튼을 변수에 담고
const title = document.getElementById('title')
const plus= document.getElementById('plus')
const minus = document.getElementById('minus')
const change =document.getElementById('change')
let index= 16;

// 2. addEventListener를 각각 버튼마다 이벤트를 걸어주고,
// 3. plus를 눌렀을 때 1px씩 폰트 사이즈가 증가
// title style.fontSize ='${index}px'
plus.addEventListener('click', () => {
  index++
  title.style.fontSize =`${index}px`
})

// 4. minus를 눌렀을 때 1px씩 폰트 사이즈가 감소
// title style.fontSize ='${index}px'
minus.addEventListener('click', () => {
  index--
  title.style.fontSize =`${index}px`
  })


  // 5. change 버튼을 눌렀을때마다 title의 컬러가 변하도록 active 클래스로 제어 추가
  
  // change.addEventListener('click',() =>{
  //   title.classList.toggle('active')
  // })
  
  change.addEventListener('click',() =>{
    setTimeout(()=>{
      if(title.classList.contains('active')){
        title.classList.remove('active')
        console.log('active 삭제')
      }else{
        title.classList.add('active')
        console.log('active 추가')
      }
    },1000)

    // setTime 사용, 1초 뒤에 변경
    // console.log('변경')
  })