const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',hide)

function hide(){
    if(window.scrollY > 3){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

hide()