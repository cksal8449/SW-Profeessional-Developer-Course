const title = document.getElementById('title')
// ------------------------------------------------------
// console.log(title)
// console.log(title.textContent)
// console.log(title.innerText)
// 매개변수 -> 구분자
// ------------------------------------------------------

// title.addEventListener('click',() =>) {
  //   title.classList.toggle('active')
  // }

  // 구분자를 기준으로 문자열을 나눠 -> 배열로 만들어 준다 
  const chars = title.innerText.split('')

  // 1. html에 있는 h1#title 안에 문자열 삭제
  title.innerText = '';

  // 2. span태그에 담아서 title안에
  // 자바스크립트로 생성한 문자열 삽입 
  chars.forEach((char, index) => {
    // createElement는 태그를 만들때 쓰는 메소드 - span 태그를 만든다.
    // span element 생성
  const span = document.createElement('span')
  
  // class 'char' 추가
  span.classList.add('char')
  
  // 생성된 span 태그에 char 문자 삽입 
  span.textContent = char
  
  // title에 자식요소로 문자가 담긴 span 태그 삽입
  
  title.appendChild(span)
  // console.log(span)

  setTimeout(() => {
    span.classList.add('active')
  }, 200 * index)
  })

  // setTimeout은 순차적으로 실행되는게 아니라 
  // 자신이 갖고 있는 timer에 맞게 타이밍을 가져간다.
  // 비동기 함수
  setTimeout(()=>{console.log('첫번째 setTimeout ')},1000)
  setTimeout(()=>{console.log('두번째 setTimeout ')},2000)
  setTimeout(()=>{console.log('세번째 setTimeout ')},3000)
  setTimeout(()=>{console.log('네번째 setTimeout ')},4000)

