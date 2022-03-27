var moonIcon = document.querySelector('.moon-icon');
var sunIcon =document.querySelector('.sun-icon');
var btnIcon =document.querySelector('.btn-icon');
var body =document.querySelector('body')
moonIcon.onclick =function(){
    body.classList.toggle('dark-bg');
    btnIcon.classList.toggle('active')
}
sunIcon.onclick =function(){
    body.classList.toggle('dark-bg');
    btnIcon.classList.toggle('active')
}

var show =document.querySelector('.btn-show');
var toast =document.querySelector('.toast');
var borderBottom =document.querySelector('.border-bottom');
var closeIcon =document.querySelector('.close-icon');
show.onclick=function(){
    toast.classList.add('active');
    toast.classList.remove('remove');
    borderBottom.classList.add('active')
    setTimeout(()=>{
        toast.classList.remove('active')
    },5000)
    setTimeout(()=>{
        borderBottom.classList.remove('active')
    },5300)
}
closeIcon.onclick=function(){
    toast.classList.add('remove');
    toast.classList.remove('active');
    borderBottom.classList.remove('active');
    setTimeout(()=>{
        borderBottom.classList.remove('active')
    },300)
}