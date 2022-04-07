var input = document.querySelector('input')
var ul = document.querySelector('.todo')
var form = document.querySelector('form')

var todos = JSON.parse(localStorage.getItem('todo'))


function addTodo(todo){
    // var object {
        // text:
        //status
    //}
    let li = document.createElement('li')
    li.setAttribute('class', todo.completed ? 'completed' : '')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fas fa-trash"></i>
    `
    li.querySelector('i').addEventListener('click',(e)=>{
        e.target.parentElement.remove()
        updateTodos()
    })
    li.addEventListener('click',function(){
        li.classList.toggle('completed')
        updateTodos()
    })
    li.querySelector('span').addEventListener('click',function(e){
        e.target.classList.toggle('completed')
        updateTodos()
    })
    ul.appendChild(li)
    updateTodos()
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let text = input.value.trim()
    text !=''? addTodo({text,completed:false}) : undefined
    input.value = ''
})

function updateTodos() {
	const list = document.querySelectorAll('li')

	const todos = []

	list.forEach((item) => {
		todos.push({
			text: item.querySelector('span').innerHTML,
			completed: item.classList.contains('completed'),
		})
	})

	localStorage.setItem('todo', JSON.stringify(todos))
}
function init(todos){
    todos.forEach((item)=>{
        console.log(item)
        addTodo(item)
    })
}
init(todos)