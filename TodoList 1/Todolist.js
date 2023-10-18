const emptyArray = (JSON.parse(localStorage.getItem("score")))
function inboxList(){
  let a = document.querySelector('.input')
  let yes = a.value
  let b = document.querySelector('.date')
  let no = b.value
  emptyArray.push({
    name:yes,
    dueDate:no
  })
  a.value= ''
  console.log(emptyArray)
  addToList()
  localStorage.setItem("score", JSON.stringify(emptyArray))
}

function addToList(){
  let listHtml = ''
  for(i = 0; i<emptyArray.length; i++){
    let object = emptyArray[i]
    const yourName = object.name
    const yourDate = object.dueDate
    const html = 
    `
    <div>${yourName}</div>
    <div>${yourDate}</div>
    <button onclick="
    emptyArray.splice(${i}, 1)
    addToList()
    "class="delete" >Delete</button>
    `
    listHtml+=html
   
  }
  console.log(listHtml)
  document.querySelector('.java').innerHTML= listHtml
  
  
}


function keydown(event){
if(event.key === 'Enter')
inboxList()
}
