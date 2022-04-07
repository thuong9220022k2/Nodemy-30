var success = document.querySelector('.success')
var error = document.querySelector('.error')
var warning = document.querySelector('.warning')
var toast = document.querySelector('.toast')

success.addEventListener('click',function(){
    let div = document.createElement('div')
    div.innerHTML = `<div class="btn-success">
           <i class="fa-solid fa-circle-check"></i>
           <p>This is message success</p>
            </div>
          `
    setTimeout(()=>{
        toast.appendChild(div)
    },2000)
    setTimeout(()=>{
        div.remove()
    },4000)   
})
error.addEventListener('click',function(){
    let div = document.createElement('div')
    div.innerHTML = `<div class="btn-error">
           <i class="fa-solid fa-circle-exclamation"></i>
           <p>This is message error</p>
            </div>
          `
    setTimeout(()=>{
        toast.appendChild(div)
    },2000)
    setTimeout(()=>{
        div.remove()
    },4000)   
})
warning.addEventListener('click',function(){
    let div = document.createElement('div')
    div.innerHTML = `
                     <div class="btn-warning">
                     <i class="fa-solid fa-triangle-exclamation"></i>
                     <p>This is message warning</p>
                    </div>`
    setTimeout(()=>{
        toast.appendChild(div)
    },2000)
    setTimeout(()=>{
        div.remove()
    },4000)   
})

//<div class="btn-error">
//<i class="fa-solid fa-circle-exclamation"></i>
//<p>This is message error</p>
//</div>
//<div class="btn-warning">
//<i class="fa-solid fa-triangle-exclamation"></i>
//<p>This is message warning</p>
//s</div>