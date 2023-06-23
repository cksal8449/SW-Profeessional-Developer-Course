const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list')


addButton.addList= () => {
  input.focus()
  if(input.value.length === 0) {
    return alert('문자를 하나라도 입력해주세요')
  }
  const li = document.createElement("li")
  li.innerHTML=`${input.value}
 <button class="list-delete">&#x2716</button>`
  li.classList.add('list-item')
  list.appendChild(li)
  input.value = ''
}

input.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    addEventListener()
  }
})

addButton.addEventListener('click',() => addList)

// currentTarget
list.addEventListener('click',(event) => {
 if(event.target.tagName ==='LI'){
  event.target.classList.toggle('checked')
 }
 if(event.target.tagName === 'BUTTEN'){
  event.target.parenElement.remove() 
 }
})





// CRUD
