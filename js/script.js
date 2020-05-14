//grab the elements needed
const h2 = document.querySelector('h2')
const input = document.querySelector('#input');
const enterBtn = document.querySelector('#enter-btn');
const ul = document.querySelector('ul');
const clearTask = document.getElementById('clearTask')

// declare functions
function createNewList(){
    let li = document.createElement('li');
    li.textContent=input.value
    ul.appendChild(li);
    li.classList.add('listitem')
    let closeBtn =document.createElement('button');
    closeBtn.appendChild(document.createTextNode('X'));
    li.appendChild(closeBtn);
    closeBtn.classList.add("closebutton")
    input.value =""

    closeBtn.addEventListener('click',function(){
         li.classList.toggle('done')
        // ul.removeChild(li)
    })

    
clearTask.addEventListener('click',function(){
        ul.innerHTML=''
 })
}




function addTaskList(){
    if(input.value.length > 0){
        createNewList()
        }
}
function inputEvent(){
    if(input.value.length > 0 && event.which===13){
        createNewList()
    }
}
// add event listeners

enterBtn.addEventListener('click',addTaskList)

input.addEventListener('keypress', inputEvent)


h2.classList.add('coolTitle')
