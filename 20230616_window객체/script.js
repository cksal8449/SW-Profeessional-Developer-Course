// alert( window.innerWidth );
// window.moveBy(10,200);

// setTimeout(해야할일, 지연시간);
// setTimeout(function(){
  //alert("인사가 3초 늦었습니다! 안녕하세요.") 
  // redirect(리다이렉트)
  // location.href="http://naver.com";
// }, 3000);

// setInterval(해야할일, 지연시간); 멈추지 않는 이상 무한대로 적용
// setInterval(function(){
// document.body.innerHTML = document.body.innerHTML + "A";
// }, 500);

// function(){
//   document.body.innerHTML = document.body.innerHTML + "A";
//   }
//   , 500);

// 시계만들기
function chektime(){
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var msec = now.getMilliseconds();
  document.getElementById("si").innerHTML = addzero (hour);
  document.getElementById("bun").innerHTML = addzero (min);
  document.getElementById("cho").innerHTML = addzero (sec);
  document.getElementById("mcho").innerHTML = addzero2 (msec);
}

function addzero(num){
  if(num < 10){
    return "0"+num;
  }else{
    return num;
  }
}

function addzero2(num){
  if(num < 10){
    return "00" +num;
  }else if(num < 100){
 return "0"+num;
  }else{
  return num;
  }
}
setInterval(chektime, 1);

// alert(document.getElementsByName("span").length);

// length
// 갯수세기
// var arr = [1, 5, 5, 6, 9, "a", true];
// alert( arr.length);

// 글자 갯수 새기
// var text = "Hello world!";
// alert( text. length)
// alert( text. split(" ").lengh );

// document.getElementById("si").style.fontWeight = "bold"

// alert(location.href);
// location.href= "http://naver.com";// redirect 비추

// document.getElementById("saero").onclick = function(){
//   location.reload();2
// }

// 계산기
// var a = window.prompt("더하기 할 첫번째 값을 입력하시오.");
// var b = window.prompt("더하기 할 두번째 값을 입력하시오.");
// a = Number(a);
// b = Number(b);
// window.alert(a+b);

// 7나누기 3의 몫
// alert(parseInt(7/2));
// alert( 7%2 );

// 중요!!
// 최소, 최대값을 지정하고 그 사이의 임의의 정수(소수점이 아닌 수)를 추출하는 함수
function rand(min, max){
 return Math.floor(Math.random()*(max-min+1) + min);
}
// alert( rand(1,6) );

document.body.style.backgroundColor = "rgb("+rand(0,100)+","+rand(0,100)+","+rand(200,255)+")";

// 최소값이 3, 최대값이 6
// alert( Math.floor(Math.random()*(6-3+1) + 3 ));


// 월은 순환함 
var now = new Date();
var year = now.getFullYear();
var month = addzero (now.getMonth()+1);
var date = addzero(now.getDate());
var day = now.getDay();
var daytext = ["일", "월", "화", "수", "목", "금", "토"];

alert(year+"-"+month+"-"+date+""+daytext[day]+"요일");



// ===========제이쿼리=============

// $(선택자). 명령어();
// 버튼이 /  눌렀을 때 / 모달이 나타난다
// $(선택자). 이벤트( $().명령어() );
//                  fuuntion(){   }       



// $("#apple")
// $("p")

// #a1 #a2 #a3... #a100 까지불러오기
$("#a1")
for (i=1; i <101; i++){
  $("#a"+i)
}