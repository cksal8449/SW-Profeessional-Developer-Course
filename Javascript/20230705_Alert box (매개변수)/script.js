// document.getElementById('open-btn').addEventListener('click', 
// function(){
//   document.getElementById('alert').style.display='flex';
// })

// function closeAlert(){
//   document.getElementById('alert').style.display = 'none';
// }

// document.getElementById('close-btn').addEventListener('click', closeAlert)


// function cal (num1, num2){
//   result = num1 * num2
//   plus = num1 + num2

//  }

//  cal(2,1)
//  cal(2,2)
//  cal(2,3)
//  cal(2,4)

//  function display (a, b){
//   document.getElementById('alert').style.display = a + b
//  }
//  display (flex)

function openNclose(매개변수){
document.getElementById('alert').style.display = 매개변수;
}
openNclose('flex');
openNclose('none');