const pointer = document.getElementById('pointer')
console.log(pointer)

window.addEventListener('mousemove',(event) => {
// console.log('마우스 좌표 x값:'+event.clientX, '마우스 좌표 y값:'+event.clientY)
// ``Backtick 사용
console.log(`마우스 X값: ${event.clientX},마우스 Y값: ${event.clientY}`)
// pointer.style.top = event.clientY+'px';
// pointer.style.left = event.clientX+'px';
// -(pointer.offsetHeight / 2)}마우스 커서의 가운데 정렬

// event객체에서 사용자의 x값을 가져와서,
// pointer의 가로값(36px)을 반으로 나눈 18px을 뺀다.
// 예) x값이 100일 경우, 100 - 18, 82px, 커서위치가 82px

pointer.style.top = `${event.clientY-(pointer.offsetHeight / 2)}px`;
pointer.style.left = `${event.clientX-(pointer.offsetWidth / 2)}px`;
// clientWidth,clienthight의 경우에는 margin, boder 사이즈를 무시한다
// clientWidth,clienthight는 bober(1px solid whith)포함 36px 사이즈를 인식하지 못하고, 
// 좌우상하 1px씩 제외한 34px만 인식을 한다.
// console.log(pointer.clientWidth)
console.log(pointer.offsetwidth)
})
