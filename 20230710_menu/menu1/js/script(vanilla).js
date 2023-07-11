const menuItems = document.querySelectorAll('.gnb > li');

// item이라는 매개 변수에 이벤트를 추가
menuItems.forEach(function(item){
  // document가 아닌 item에서 찾아 줘야 전체 가져올 수 있음
const subMenu = item.querySelector('.sub');

item.addEventListener('mouseover', function(){
  subMenu.classList.add('active')
  // on이라는 클래스 추가
  this.querySelector('a').classList.add('on');
})

// mouseleave
 // mouseleave
item.addEventListener('mouseleave', function(){
  subMenu.classList.remove('active');
  this.querySelector('a').classList.remove('on');
})
})

