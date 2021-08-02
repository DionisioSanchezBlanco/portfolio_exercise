let displayFlash = document.getElementById("window-flash");
let displayPiano = document.getElementById("window-piano");
let windows = document.querySelectorAll(".window");
let closeFlash = document.getElementById("close-flash");
let closePiano = document.getElementById("close-piano");
let menuBurger = document.querySelector(".hamburger");
let menuBurgerON = document.querySelector(".menu-style");

displayFlash.addEventListener("click", function (){
    windows[0].style.display = "block";
})

displayPiano.addEventListener("click", function (){
    windows[1].style.display = "block";
})

closeFlash.addEventListener("click", function (){
    windows[0].style.display = "none";
})

closePiano.addEventListener("click", function (){
    windows[1].style.display = "none";
})

menuBurger.addEventListener("click",function (){
    if (menuBurgerON.style.display.valueOf("inline-block")){
        menuBurgerON.style.display = "none";
    } else {
        menuBurgerON.style.display = "inline-block";
        menuBurgerON.style.background = "#ccc";
        menuBurgerON.style.height = "fit-content";
        menuBurgerON.style.zIndex = "4";
    }
})
