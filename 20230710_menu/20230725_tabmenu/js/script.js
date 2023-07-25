let tab = document.querySelector('.wrapper') 
let tabItem = document.querySelectorAll('.tab-item')
let tabContent = document.querySelectorAll('.tab-content')
let active = document.querySelector('.active')
let show = document.querySelector('.show')

tab.addEventListener('click',(e) =>{
  let ListOrder = e.target.dataset.list;
  tabItem.forEach(function (e) {
      e.classList.remove('active');
    });
    e.target.classList.add('active');
    tabContent.forEach(function(event){
      if (event.dataset.order == ListOrder) {
        event.classList.add('show');
      } else event.classList.remove('show')
    })
  })
