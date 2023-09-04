// slick slider
$('.slide-wrap').slick({
  slidesToShow: 1,
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  fadeSpeed: 5000,
  tocuMove:true,
  appendDots: 'map-btn',
});


// tap
let btn = $('.tab-btn');
let btnlen = $('.tab-btn').length;
let con = $('.tab-content');

for(let i = 0; i < btnlen; i++){
  btn.eq(i).on('click', function(){
      btn.removeClass('active');
      btn.eq(i).addClass('active');
      con.removeClass('show')
      con.eq(i).addClass('show');
      });
}