$('.main-menu li, .submenu-wrapper').hover(function(){
// hover 시 실행 할 함수
$('.submenu-wrapper').stop().slideDown(500);
}, function(){
// leave 됐을 때 실행 할 함수
$('.submenu-wrapper').stop().slideUp(500);
})