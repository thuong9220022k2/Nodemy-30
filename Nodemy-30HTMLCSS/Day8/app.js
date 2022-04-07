var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password1 = document.querySelector('#password')
var password2 = document.querySelector('#password2')

var form = document.querySelector('form')

function showError(input,message){
    let form_control = input.parentElement
    form_control.className = 'form-control error'
    let small = form_control.querySelector('small')
    small.innerText = message
    
}
function showSucess(input){
    let form_control = input.parentElement
    form_control.className = 'form-control success'
    let small = form_control.querySelector('small')
    small.innerText = ''
}  

function checkEmptyError(inputArr){
    var checkEmpty = false
    for(var i =0;i<inputArr.length;i++){
        let input = inputArr[i]
        if(input.value.trim()===''){
            showError(input,'Khong duoc de trong')
            checkEmpty = false
        }
        else{
            showSucess(input)
        }
    }
    return checkEmpty
}

function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())==true){
        showSucess(input)
    }
    else{
        showError(input,'email is not valid')
    }
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`username is at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input,`username is than less ${max} characters`)
    }
    else{
        showSucess(input)
    }

}

function checkPassword(input1,input2){
    if(input1.value.trim() !== input2.value.trim()){
        showError(input2,'Password do not match')
    }
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    if(checkEmptyError([username,email,password1,password2]) == false){
        checkLength(username,4,15)
        checkLength(password1,5,17)
        checkEmail(email)
        checkPassword(password1,password2)
    }
})


