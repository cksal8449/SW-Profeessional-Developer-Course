// Array안에 object
let prodects = [
   {
    img : 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3c24388-9a45-44e2-95c7-8f99d38bd882/tc-7900-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-2rIhOi40.png',
    title : '나이키 TC 7900',
    price : '97,300 원',
    size : ['230','235','240','245']
   }
]

// console.log(prodects[0].title);

document.querySelector('.box-item img').src = prodects[0].img; 
document.querySelector('.sho-info h2').innerHTML = prodects[0].title;
document.querySelectorAll('.sho-info p')[0].innerHTML = prodects[0].price;
document.querySelectorAll('.sho-info p')[1].innerHTML = prodects[0].size;