var box = document.querySelector('.box')

var eKey = document.querySelector('.card.key h3')
var eLocation = document.querySelector('.card.location h3')
var eWhich = document.querySelector('.card.which h3')
var eCode = document.querySelector('.card.code h3')

document.addEventListener('keydown',(e)=>{
    document.querySelector('.result').innerText = e.which
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    document.querySelector('.alert').classList.add('hide')
    box.classList.remove('hide')
})