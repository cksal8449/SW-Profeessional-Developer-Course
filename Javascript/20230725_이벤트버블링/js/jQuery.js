$('.open-btn').on('click', function(){
  $('.overlay').addClass('is-open');
})

$('.close-btn').on('click', function(){
  $('.overlay').removeClass('is-open');
})

$('.overlay').on('click', function(e){
  // e.taget과 .overlay가 일치하면 코드 실행
 if($(e.taget).is('.overlay')){
  $('.overlay').removeClass('is-open')
 }
})