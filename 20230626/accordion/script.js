// 1. list 엘리먼트 변수에 담기
const list =document.querySelector('.list')
// 2. list 엘리먼트에서 자식요소 list_item 요소를 
// querySelectorAll()이용해서 변수로 선언
const listItem =  document.querySelectorAll('.list__item')

console.log(listItem)

// listItem forEach - item 요소들을 console.log
listItem.forEach((item) => {
  // listItem forEach - item 요소들을 꺼내와 console.log
  console.log(item)

  // 불러온 item을 클릭할때마다 active 클래스가 추가 또는 삭제
  item.addEventListener('click',() => {
  //item 하나만 active class를 가질 수 있다. 
    listItem.forEach(elem => elem.classList.remove('active'))

  // item에 active 클래스를 추가 또는 삭제
  item.classList.add('active')
  })
  
})

