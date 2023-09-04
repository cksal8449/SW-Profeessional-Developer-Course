

// Darkmode Lightmode
$('.dark-btn').click(function(){
 if($('body').hasClass('dark')){
  $('body').removeClass('dark')
  $('.logo-img').removeClass('dark')
  $('.dark-btn').text('Darkmode');
 } else {
  $('body').addClass('dark')
  $('.logo-img').addClass('dark')
  $('.dark-btn').text('Lightmode');
 }
  });



  $('.user-box input').focusout(function(){
    let userId = $('.user-box input').val();
    let nameExp = /^[가-힣]{2,5}$/;
    let mailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if(userId.length == 0) {
      $('.user-box .warn').html('<p>전화번호, 사용자 이름 또는 이메일</p>');
    } else {
      
    }
  })