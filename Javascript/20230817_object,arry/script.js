// Array안에 object
let prodects = [
   {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3c24388-9a45-44e2-95c7-8f99d38bd882/tc-7900-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-2rIhOi40.png',
    title : '나이키 TC 7900',
    price : '97,300 원',
    size : ['230','235','240','245']
   },
   {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/153fc03e-dd14-4afc-a6cd-b645c19a6f77/%EC%BD%94%ED%8A%B8-%EB%A0%88%EA%B1%B0%EC%8B%9C-%EB%A6%AC%ED%94%84%ED%8A%B8-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-8lDM19DG.png',
    title : '나이키 코트 레거시 리프트',
    price : '64,300 원',
    size : ['225','230','235','240']
   },
   {
    img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6e80ab79-17aa-4f67-bf0b-774dde2b95c9/%EC%BA%84-%EC%97%AC%EC%84%B1-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-Dt3gXqwU.png',
    title : '나이키 캄',
    price : '59,000 원',
    size : ['230','240','250','260']
   },
   {
    img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ea7f7cfd-465f-4a6b-89eb-5fa205eadfa5/%EC%BD%94%ED%8A%B8-%EB%A0%88%EA%B1%B0%EC%8B%9C-%EB%A6%AC%ED%94%84%ED%8A%B8-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-InXsCqgL.png',
    title : '나이키 코트 레거시 리프트',
    price : '76,300 원',
    size : ['230','240','250','260']
   },
   // {
   //  img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9909210d-48ba-459e-96f4-faab32a41ce7/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-FBbeey7u.png',
   //  title : '에어 조던 1 로우',
   //  price : '139,000 원',
   //  size : ['230','240','250','260']
   // },
   {
    img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1af9c87c-6e11-4bc6-ad66-648558bc49b7/%EB%B2%A0%EC%9D%B4%ED%8D%BC%ED%94%8C%EB%9D%BC%EC%9D%B4-3-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-etsmVRmI.png',
    title : '나이키 베이퍼플라이 3',
    price : '59,000 원',
    size : ['230','240','250','260']
   },
   {
   img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/2554affc-8e73-4a3d-98a8-4b4a98d67a3e/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-team-red-and-white-fj4555-100-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
   title : '우먼스 덩크 로우',
   price : '139,000 원',
   size : ['230','240','250','260']
   },
   {
   img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ebd2113d-515e-42e6-bd84-2b56fbe7e4ce/%EB%A9%94%ED%8A%B8%EC%BD%98-9-%EC%97%AC%EC%84%B1-%EC%9A%B4%EB%8F%99%ED%99%94-TQn2uV9i.png',
   title : '나이키 메트콘 9',
   price : '139,000 원',
   size : ['230','240','250','260']
   },
   // {
   // img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/074a1533-2083-4821-a7c4-4475b2b151f6/%EB%B2%A0%EC%9D%B4%ED%8D%BC%ED%94%8C%EB%9D%BC%EC%9D%B4-3-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-etsmVRmI.png',
   // title : '나이키 베이퍼플라이 3',
   // price : '59,000 원',
   // size : ['230','240','250','260']
   //   },
]

// -------------------------------------------------------------------------------------
// console.log(prodects[0].title);

// document.querySelector('.box-item img').src = prodects[0].img; 
// document.querySelector('.sho-info h2').innerHTML = prodects[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = prodects[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = prodects[0].size;
 
// let boxItem = document.querySelectorAll('.box-item');
// boxItem.forEach(function(item, index){
// item.querySelector('img').src = prodects[index].img; 
// item.querySelector('.sho-info h2').innerHTML = prodects[index].title;
// item.querySelectorAll('.sho-info p')[0].innerHTML = prodects[index].price;
// item.querySelectorAll('.sho-info p')[1].innerHTML = prodects[index].size;
// })

// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html 바인딩(꽂아줌)
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는도구 (React, Vue, angular)
// 시작기호가 대괄호[], 중괄호{}냐에 따라서 Array, object 구분

let boxItem = document.querySelectorAll('.box-item');
boxItem.forEach(function(item, length){
item.querySelector('img').src = prodects[length].img; 
item.querySelector('.sho-info h2').innerHTML = prodects[length].title;
item.querySelectorAll('.sho-info p')[0].innerHTML = prodects[length].price;
item.querySelectorAll('.sho-info p')[1].innerHTML = prodects[length].size;
})

// -------------------------------------------------------------------------------------
// // Javascript로 html 요소 생성
// // document.createElement('태그이름')
// let h1Tag = document.createElement('h1');
// // .box-list안에 h1태그 안에 보여질 텍스트
// h1Tag.innerHTML = '안녕하세요!';
// // h1태그에 hi라는 클래스명 부여
// h1Tag.classList.add('hi');
// // box-list의 자식요소로 h1태그 생성
// document.querySelector('.box-list').appendChild(h1Tag);

// // .box-list안에 p태그로 생성
// let pTag = document.createElement('p');
// pTag.innerHTML = 'p태그임!';
// pTag.classList.add('hello');
// document.querySelector('.box-list').appendChild(pTag);

// -------------------------------------------------------------------------------------

// products length만큼 createElement로 html 생성
// .box-list 안에 .box-item이라는 class를 가진 div 생성
// .box-item 안 
// 1. img tag 생성 src = products.img / alt = products.title
// 2. .box-list 안에 .sho-info라는 class를 가진 div 생성
// 3. .sho-info 안에 h2 tag 생성 => innerHTML = products.title
// 4. .sho-info 안에 p tag 생성 => innerHTML = products.price
// 5. .sho-info 안에 p tag 생성 => innerHTML = products.size

// // createElement로 prodects lenght 만큼 html생성
// let boxList = document.querySelector('.box-list');

// prodects.forEach(function(item){
// // .box-list div 생성
// let divItem = document.createElement('div');
// divItem.classList.add('box-item');
// boxList.appendChild(divItem);

// // .box-item 안에 img 생성 
// let boxImg = document.createElement('img');
// boxImg.src = item.img;
// boxImg.alt = item.title;
// divItem.appendChild(boxImg);

// // .box-item 안에 .sho-info div 생성
// let showInfo = document.createElement('div');
// showInfo.classList.add('sho-info');
// divItem.appendChild(showInfo);

// // // .sho-info 안에 h2 생성
// let boxTitle = document.createElement('h2');
// boxTitle.innerHTML = item.title;
// showInfo.appendChild(boxTitle);

// // // .sho-info 안에 p 2개 생성
// 각각의 변수를 지정해 줘야 함
// let boxPrice = document.createElement('p');
// boxPrice.innerHTML = item.price;
// showInfo.appendChild(boxPrice);

// let boxSize = document.createElement('p');
// boxSize.innerHTML = item.size;
// showInfo.appendChild(boxSize);
// })

// -------------------------------------------------------------------------------------

// Javascript로 html 생성하는 방법2 (최신문법) 
let pTag = '<p class="txt">html생성</p>';
// .insertAdjacentHTML(추가 할 위치, 문자) => 문자형 html을 넣어주는 함수
// 첫번째 파라미터 : 추가 할 위치 (beforeend = 안쪽 맨 밑)
// 두번째 파라미터 : 추기할 html 문자(pTag)
document.querySelector('.box-list').insertAdjacentHTML('beforeend', pTag)
// 

// .insertAdjacentHTML로 .box-item 생성
