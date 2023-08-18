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
   {
    img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9909210d-48ba-459e-96f4-faab32a41ce7/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%A1%9C%EC%9A%B0-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-FBbeey7u.png',
    title : '에어 조던 1 로우',
    price : '139,000 원',
    size : ['230','240','250','260']
   },
   {
    img : 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1af9c87c-6e11-4bc6-ad66-648558bc49b7/%EB%B2%A0%EC%9D%B4%ED%8D%BC%ED%94%8C%EB%9D%BC%EC%9D%B4-3-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-etsmVRmI.png',
    title : '나이키 베이퍼플라이 3',
    price : '59,000 원',
    size : ['230','240','250','260']
   },
]

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