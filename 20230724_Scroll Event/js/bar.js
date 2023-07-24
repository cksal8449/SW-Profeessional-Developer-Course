// progress bar (프로그래스 바)
// 페이지 내에서 사용자가 현재 얼마만큼 읽었는지 그 값을 UI 바
// 스크롤 높이, 현재 스크롤 값, 화면 높이값
// 스크롤바를 1% 내리면 bar의 width 값도 1% 증가

// html, css에서 bar를 어떤 위치에서 어떻게 보여줄건지 디자인
// window 스크롤 이벤트 추가
// window.addEventListener('scroll', function(){
//   let scrollTop = document.querySelector('html').scrollTop ;
//   let scrollHeight = document.querySelector('html').scrollHeight;
//   let clientHeight = document.querySelector('html').clientHeight;
//   let progress = ((scrollTop + clientHeight) / scrollHeight) * 100;
//   document.querySelector('.progress-bar').style.width = progress + '%';
// })


window.addEventListener('scroll', function(){
  let scrollTop = document.querySelector('html').scrollTop ;
  let scrollHeight = document.querySelector('html').scrollHeight;
  let clientHeight = document.querySelector('html').clientHeight;
  console.log('스트롤양:'+ scrollTop)
  console.log('스트롤높이:'+ scrollHeight)
  console.log('화면높이:'+ clientHeight)

  // 백분율환산
  // (구하려는 백분율을 나타내는 수 / 전체 수) * 100

  let progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.querySelector('.line').style.width = progress + '%';
})
