var images = document.querySelectorAll('.image1 img')
var prev = document.querySelector('.button-prev')
var next = document.querySelector('.button-next')
var close = document.querySelector('.icons-close')
var galleryImg = document.querySelector('.image2 img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery(){
    if(currentIndex == 0){
        prev.classList.add('hide')
    }
    else {
        prev.classList.remove('hide')
    }
    if(currentIndex == images.length-1){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')

}
images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index;
        showGallery()
    })
})

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown',function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click',function(){
    if(currentIndex <images.length-1){
        currentIndex++
        showGallery()
    }
})