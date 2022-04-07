var ul = document.querySelector('.tag-content ul')
var input = document.querySelector('.tag-content-input')
let tags= ['nodejs','reactjs']
createTags()
function createTags(){
    ul.querySelectorAll('li').forEach((li)=>{
        li.remove()
    })
    tags.slice().reverse().forEach((tag)=>{
        let litag = `
        <li>
        <p>${tag}</p>
        <i class="fa-solid fa-xmark" onclick="removeTags(this,'${tag}')"></i>
        </li>
        `
        ul.insertAdjacentHTML('afterbegin',litag)
    })
    input.focus()
}

function addtags(event){
    if(event.key == 'Enter'){
        let tag = event.target.value.trim()
        if(tag != '' && !tags.includes(tag)){
            tags.push(tag)
            createTags()
        }
        event.target.value = ''
    }
}
input.addEventListener('keyup',addtags)

function removeTags(element,tag){
    let index = tags.indexOf(tag)
    tags.splice(index,1)
    element.parentElement.remove()
    input.focus()
}

var btnRemove = document.querySelector('.tag-remove')
btnRemove.addEventListener('click',()=>{
    tags = []
    createTags()
})