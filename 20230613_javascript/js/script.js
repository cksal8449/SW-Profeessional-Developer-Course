// document.getElementById("apple").onclick = function(){
//   alert("누르지 말랬자나");
// }

// 주어;
// 주어.속성;
// 주어.주어.속성;
// 주어.속성.속성;
// ex
// 철수;
// 철수.성별;
// 철수.왼팔.두께;
// 철수.신체조건.키;

// 명령어 = 함수, 메소드
// 주어 = 객체, 대상, 주인공
// () 있어야함
// 주어.명령어();
// 주어.명령어(재료);
// ex
// 철수.노래해라();
// 철수.노래해라(k-pop);

// 자기가 알아서 문서를 닫는 이벤트
// window.close();

// 1.자바스크립트는 컴파일(번역과정)이 필요없는 인터프리터 언어이다.
// 브라우저가 중간에서 번역을 해줘서 컴파인 안해도 됨
// 인터프리터 언어: 한줄 읽고 실행 반복 / 에러가 있을 시 에러를 나타내줌
// 자바, c, 파이썬 컴파일 과정이 따로 필요함 
// 어셈블리 : cpu 명령어 
// 2.자바스크립트는 그 어던 플랫폼이라도 브라우저만 있으면 정상 작동된다.

// alert("안녕하세요\n\r\'저\'는 \"홍길동\" 입니다.");

// 다양한 종류의 변(변할 수 있다) 수(데이터) 를 담을 수 있는 메모리(그릇)=aaa
// variables = var 최초로 만들 때만 사용

// 그릇은 한번만 만듬 이후에 이름만 언급하면 됨
// var aaa; //변수를 만들고

// 3이란 숫자를 aaa에 넣어라
// aaa = "3"; //변수에 값을 넣고

// var aaa = 3; //변수를 만들어서 바로 값을 대입해도 가능

// aaa는 변수
// alert("aaa"); // 그 내용을 확인했다.


// 숫자열이기 때문에 값은 8로 나타남
// var a = 3;
// var b = 5;

// var c = a+b;

// alert(c);


// 문자열이기 때문에 35로 나타남
// var a = "3";
// var b = "5";
// var c = a*b;
// alert(c);

// 문자열이기 때문에 35로 나타남
// var a = "안녕하세요";
// var b = "hello";
// var c = a+b;
// alert(c);

// 사칙연산에 문자열이 포함되어있으면 문자열을 표현하듯 5hello로 나타남
// var a = 5;
// var b = "hello";
// var c = ab;
// alert(c);

// 배열형(array) 식판, 계란판 
// 칸이 여러칸 
// 필요한 값을 지정해 쓰는 경우가 많음
// index number
// var arr = [20, 35, 40, 50]; // 배열(array)
// var arr = [];
// var arr = Array(4);
// var arr = [];
// arr[0] = 20;
// arr[1] = 35;

// [0]부터 시작 0이 첫번째
// alert( arr[0] );


// var arr = [175, 78, "남자", false, null];

// // alert( "홍길동의 키는" +175+ "입니다.");
// // alert( "홍길동의 키는 " +arr[0]+ " 입니다.");
// alert("홍길동의 몸무게는 " +arr[1]+ " 입니다.");
// alert("홍길동의 성별은 " +arr[2]+ " 입니다.");

// if(arr[3]){
//   alert("홍길동은 기혼입니다.");
// }
// else{
//   alert("홍길동은 미혼입니다.");
// }

// var lotto = [];
// for(i=0; i<6; i++){
//   var rand = Math,floor(Math.random()*(45-1+1)+1);
//   lotto[i] = rand;
// }

// alert(lotto);

// 우리건물은 총 5층짜리 건물인데 
// 1층부터 4층까지 세개의 원룸이 있고
// 5층에는 주인세대 1세대만 있다.
// var lenthouse= [
//   [101호, 102호, 103호],
//   [201호, 202호, 203호],
//   [301호, 302호, 303호],
//   [401호, 402호, 403호],
//   [501호]
// ];

// var lenthouse= [
//   ["영희", "순희", "미희"],
//   ["영수", "철수", "기영"],
//   ["기철", "가희", "윤희"],
//   ["성호", "상혁", "상진"],
//   ["홍길동"]
// ];

// var floor;
// var ho;

// for(i=0; i<5; i++){
//   // lenthouse[i]
//   for(j=0; j<lenthouse[i].length; j++){
//     if(lenthouse[i][j] == "가희"){
//     floor = i+1;
//     ho = j+1;
//     break;
//   }
//   }
// }

// alert("가희는 " +floor+"0"+ho+"호에서 발견되었습니다.");

//         키 몸무게 성별 결혼여부 주택소유여부
// var arr = [175, 78, "남자", false, null];
// 객체형변수
// var gilbong ={속성명: 속성값, 속성명:속성값};
// var gilbong = {
//   hihht: 175,
//   weight: 78, 
//   gender: "남자",
//   marriage: false,
//   // 마지막 값에는 쉼표(,)를 적지 않는다
//   house: null,
//   friends: ['영희', "철수", "민수"] 
// };
// // alert("길동의 몸무게 : " +gilbong.weight);
// alert("길동의 친구1 : " +gilbong.friends[1]);

// var chanmi = "이찬미"
// // alert(chanmi);
// function seoul(){
//   alert(chanmi);
// }
// // seoul();
// alert(chanmi);
// alert은 질문을 못한다

// // prompt는 질문을 할 수 있다. 
// var birth = prompt("생년을 입력하세요. 예) 950706",1995);
// // 문자열이라 계산을 할 수 없다.
// // alert(birth);
// birth = parseInt(birth);
// var age = 2023 - birth;
// alert("당신의 나이는 " +age+ "세 입니다.");

// var lunch = confirm("당신은 점심을 드셨습니까");
// if(lunch){
//   alert("뭐 드셨어요?");
// }else{
//   alert("화이팅!");
// }

// function rand(min,max){
//  return Math.floor(Math.random()*(max-min+1)min);
// }

// // alert( rand(0,255));
// setInterval(function(){
//   var r = rand(0.255)
//   var 
//   document.getElementsByName("body")[0],style.backgroundColor
//   ="rgb("++","+g+","+b+)";
// },1000);

// function 떡볶이(떡, 소스){
// 떡을 익힌다
// 소스를 넣는다
// 섞으며 졸인다
// 접시에 담아낸다
// }
// 떡볶이(밀떡, 고추장);
// 떡볶이(쌀떡, 간장);


// // 나머지 연산자
// alert(7 % 2);


// // 증감 연산자
// var num = 3;
// num++;
// num++;
// ++num;
// alert(num);

// 지금까지 버튼을 누를 횟수 = 0
// btn이 눌릴 때마다 이런일을 할 것이다.
// 지금까지 버튼을 누른 횟수를 1 증가시킴
// #num인 박스에 그 숫자를 입력
// 바닐라자바스크립트 문법 
// var count = 0;
// document.getElementById("btn").onclick = function(){
//   count+=10; 
//   document.getElementById("num").innerHTML = count;
// }

// 제이쿼리 문법
// var count = 0;
// $("#btn").click(function)(){
//   count++;
//   $("num").txt(count);
// });

// var a = 3;
// a = a + 1; // a++와 동의어
// a += 1;
