var btnSearch = document.querySelector('.search-icons')

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})
