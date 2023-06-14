// [if 조건에 따라 코드를 실행할지 말지]
// 맑으면 true, 비오면 false
var weather = false;
if(!weather){
  alert("우산챙기기!");
}

// 기온이 4도 이하인 경우 외투 챙기기
var temp = 23;
if(temp <= 4){
  alert("외투챙기기!");
}

// 훈련생의 점수기준 판별 프로그램 (기준 : 60점)
var score = 54;
if(score >= 60){
  alert("합격");
}else{
  alert("불합격");
}

// 100분위 점수를 학점으로 변환하는 프로그램
// var jumsu = 81;
// if(jumsu >= 90){
//   alert("A");
// }else if(jumsu >= 80){
//   alert("B");
// }else if(jumsu >= 70){
//   alert("C");
// }else if(jumsu >= 60){
//   alert("D");
// }else {
//   alert("F");
// }

var hakjum = 81;
if(hakjum >= 90){
  alert("A");
}else if(hakjum >= 80){
  alert("B");
}else if(hakjum >= 70){
  alert("C");
}else if(hakjum >= 60){
  alert("D");
}else {
  alert("F");
}
alert(hakjum);

// and 조건을 위한 연습 : 졸업 가능?
// 외국인의 경우 어학점수는 반영하지 않음.
// 외국인의 경우 어학은 영어 국어 중 하나의 점수가 60점이상이여야 함
var k = (k <=60|| m <=60)? "":"";
var fore = false; //내국인의 경우 : false, 외국인 : true
var english = 68; // 어학점수 60점 이상
var credit = 120; //120 이상
var engineer = true; //취득: true, 미취득: false
if((fore)?  english >= 60 && credit >= 120 && engineer){
  alert("졸업을 축하합니다.");
}else{
  alert("졸업조건을 만족하지 못했습니다.")
}

if(fore )