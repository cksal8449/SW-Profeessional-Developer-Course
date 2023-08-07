document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focus',function(){
    this.parentNode.classList.add('border-act');
  })
})

document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focusout',function(){
    this.parentNode.classList.remove('border-act');
  })
})

let idveri = pwveri = pwchkveri = nameveri = bitrveri = genderveri = phonveri = addressveri = false;
let mailveri = true;

