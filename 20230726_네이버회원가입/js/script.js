// label 클릭 했을 때
// 클릭된 label의 자식인 checkbox-img에 Checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');
  // 클릭된 label의 자식인 .checkbox-img class에
  //  checked 라는 class가 포함되어 있다면 
  // <input type="checkbox">의 속성 checked
  if($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img.checked 라는클래스가 있을 때
    $(this).children("input[type='checkbox']").attr('checked', true);
  } else {
    $(this).children("input[type='checkbox']").removeAttr('checked');
  }
})


// .total 체크여부로 조건문
// .total을 체크하면 .agree 올 체크 
// .total을 언체크하면 .agree 전부 언체크 

// .total .checkbox-img가 .checked 클래스를 가지고 있다면
// .agree안  .checkbox-img에 checked class add
// .agree안 input checkbox를 checked true

// .total .checkbox-img가 .checked 클래스를 가지고 있지 않다면
// .agree안  .checkbox-img에 checked class remove
// .agree안 input checkbox를 checked false

$('.total label').on('click', function(){
  if($(this).children('.checkbox-img').hasClass('checked')) {
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked', true);
  } else {

    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').removeAttr('checked');
  }
})

// .agree lable안 checkbox가 모두 체크 상태라면
// 모두 동의 버튼도 체크로 변경
// 하나라도 체크되지 않은 값이 있다면 모두 동의 버튼 체크를 언체크
$('.agree label').on('click', function(){
  let len = $('.agree .checkbox-img').length;
  let chklen = $('.agree .checked').length;
  let unchk = len - chklen;
  // console.log(len, chklen)

  // 조건이 참이라면 
  // .total label .checkbox-img checked class add
  // .total label input checkbox checked true
  // 조건이 참이 아니라면 
  // .total label .checkbox-img checked class remove
  // .total label input checkbox checked removeAttr
  if(unchk == 0) {
    $('.total label .checkbox-img').addClass('checked');
    $('.total label input[type="checkbox"]').attr('checked', true);
  } else {
    $('.total label .checkbox-img').removeClass('checked');
    $('.total label input[type="checkbox"]').removeAttr('checked');
  }
})
