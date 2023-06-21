const pointer = document.getElementById('pointer')
console.log(pointer)

window.addEventListener('mousemove',(event) => {
// console.log('마우스 좌표 x값:'+event.clientX, '마우스 좌표 y값:'+event.clientY)
// ``Backtick 사용
console.log(`마우스 X값: ${event.clientX},마우스 Y값: ${event.clientY}`)
// pointer.style.top = event.clientY+'px';
// pointer.style.left = event.clientX+'px';
// -(pointer.offsetHeight / 2)}마우스 커서의 가운데 정렬
pointer.style.top = `${event.clientY-(pointer.offsetHeight / 2)}px`;
pointer.style.left = `${event.clientX-(pointer.offsetWidth / 2)}px`;

// console.log(pointer.clientWidth)
console.log(pointer.offsetwidth)
})
