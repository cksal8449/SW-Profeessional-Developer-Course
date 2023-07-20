let buttons = document.querySelectorAll('.circle-group button');

buttons.forEach(function(btn, index){
  btn.addEventListener('click', function(){
    let slideList =document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';
    slideList.style.transform = `translate(${xValue})`;

    btn.classList.add('active');

    buttons.forEach(function(otherBtn){
      if(otherBtn !==btn && otherBtn.classList.contains('active')){
        otherBtn.classList.remove('acrive');
      }
    })
  })
})

