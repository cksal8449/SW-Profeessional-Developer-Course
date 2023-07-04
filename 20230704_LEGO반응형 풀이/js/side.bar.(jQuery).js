const sidebarMenuButton = $('.gnb-icon-button');
const sidebar = $('.sidebar');
const sidebarOverlay = $('.overlay');
// console.log(sidebarOverlay)

function openSidebar(){
  // 클래스 추가
  sidebar.addClass('is-active');
  sidebarOverlay.addClass('is-active');
}

//  이벤트 추가
sidebarMenuButton.on('click',openSidebar);

function closeSidebar(){
  sidebar.removeClass('is-active');
  sidebarOverlay.removeClass('is-active');
}

sidebarOverlay.on('click',closeSidebar);