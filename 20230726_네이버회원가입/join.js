let userId = $('#user-id');
let pw = $('#pw');
let reRw = $('#re-pw');
let year = $('#year');
let month = $('#month');
let man = $('#man');
let woman = $('#woman');
let not = $('#not');
let email = $('#email');
let phon = $('#phon');
let phonItem = $('#phon-item');
let phonCitation = $('#phon-citation');
let address = $('#address');



$('.inputbox').on('click',function(e){
  e.preventDefault();
$(this).toggleClass('inputboxact');
})

