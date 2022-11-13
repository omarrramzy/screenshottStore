var addToCart = document.querySelectorAll(".addToCart");
var showItem = document.querySelector(".showItem");
var menuBtn = document.querySelector(".menuBtn");
var icon = menuBtn.querySelector(".fa-bars")
var navbar = document.getElementsByClassName("navbar")

for (let i = 0; i < addToCart.length; i++){
    addToCart[i].addEventListener("click", function () {
        showItem.innerHTML++;
    })   
}

function show(){
    for(let i = 0; i < navbar.length; i++){
        if (icon.classList.contains("fa-bars"))
        navbar[i].style.display = "block";
        else {
            navbar[i].style.display = "none";
        }
    }
}
menuBtn.addEventListener("click", function (){
        if(icon.classList.contains("fa-bars")){
            icon.classList.replace("fa-bars", "fa-xmark")
        } else{
            icon.classList.replace("fa-xmark", "fa-bars")
        }
    // }
})

let onScroll = document.querySelector(".onScroll")
window.addEventListener('scroll', () =>{
    onScroll.style.display = "flex"
})

onScroll.addEventListener('click', () => {
    window.scrollTo(0, 0)
})