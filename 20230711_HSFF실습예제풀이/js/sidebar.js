let openBtn = document.querySelector('.gnb-open-btn');
let closeBtn = document.querySelector('.sidebar-btn');
let sidebar =document.querySelector('.sidebar');
// console.log(closeBtn)


// .gnb-open-btn을 클릭 했을 때 sidebar.active class add
openBtn.addEventListener('click', function(){
  document.querySelector('.sidebar').classList.add('active');
})

// .sidebar-btn를 클릭 시 sidebar.active class close
closeBtn.addEventListener('click', function(){
  document.querySelector('.sidebar').classList.remove('active');
})


// 축약 코드
// // .gnb-open-btn을 클릭 했을 때 sidebar.active class add
// openBtn.addEventListener('click', function(){
//   sidebar.classList.add('active');
// })

// // .sidebar-btn click -> sidebar.active class remove
// closeBtn.addEventListener('click', function(){
//   sidebar.classList.remove('active');
// })