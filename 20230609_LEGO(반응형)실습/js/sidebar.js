const sidebarBtn = document.querySelector ('.sidebar-btn');
const sidebar = document.querySelector ('.sidebar');
const sidebarOverlay = document.querySelector ('.overlay');
console.log(sidebarBtn, sidebar, sidebarOverlay);

sidebarBtn.addEventListener('click', function(){
  sidebar.classList.add('is.active');
  sidebarOverlay.classList.add('is.active');
})

sidebarOverlay.addEventListener('click', function(){
  sidebar.classList.remove('is.active');
  sidebarOverlay.classList.remove('is.active');
})
