// 현재 인덱스를 저장하는 변수 (초기값 0)
let cur = 0;
// length 길이 체크
// len 이라는 변수에 .slid-item라는 클래스가 가진 요소들의 총 개수 저장 
let len = $('.slide-item').length; 
// console.log(len) => 3

for(i = 0; i < len; i++) {
  $('#dots').append('<div></div>');
}
