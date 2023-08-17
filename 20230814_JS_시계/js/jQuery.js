let now = new Date();
let hr = now.getHours();

// n초 마다 코드를 실행하는 setInterval
setInterval(function(){
  let now = new Date();
  // 시, 분, 초 값을 각 변수에 할당
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  hr = String(hr).padStart(2,'0');
  min = String(min).padStart(2,'0');
  sec = String(sec).padStart(2,'0');

  $('.phone-time').html(hr + ' : ' + min + ' : ' + sec)
}, 1000)

let btnList = $('.btn-list li');
let back = $('#wrapper');

if(hr >= 6 && hr < 12) {
  $('#wrapper').addClass('marning');
  $('.btn-list li').addClass('on');
} else if(hr >= 12 && hr < 16) {
  $('#wrapper').addClass('afternoon');
  $('.btn-list li').addClass('on');
} else if(hr >= 16 && hr < 20) {
  $('#wrapper').addClass('evening');
  $('.btn-list li').addClass('on');
}  else {
  $('#wrapper').addClass('night');
  $('.btn-list li').addClass('on');
}



  $('btn-list li').on('click', function(e){
    e.preventDefault();
    // 모든 요소에 on class remove
    $('.btn-list li').forEach(function(btn) {
       btn.removeClass('on');
    })

    // 현재 클릭된 요소에 on class add
    $('btn-list li a').addClass('on');
    // Element.className = 'class name';
    // 기존에 클래스가 없으면 add,
    // 있다면 기존 것을 우측 class name으로 변경
    $('#wrapper').attr('class') = $('.btn-list li');
  })
