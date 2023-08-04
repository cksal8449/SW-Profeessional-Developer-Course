// input focusin 되면 부모 .inputbox에 boder-act class act class add
let input = document.querySelectorAll('input')
let inputBox = document.querySelectorAll('.inputbox')


input.addEventListener("click",function(){
  inputBox.classList.add('border-act')
})

