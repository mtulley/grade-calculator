let nav_button_1 = document.querySelector(".nav-button-1")
nav_button_1.addEventListener("click", navButton1Listener)

function navButton1Listener() {
    nav_button_1.classList.toggle("clicked")
    nav_button_2.classList.add("nav-button-2")
    nav_button_3.classList.add("nav-button-3")
    nav_button_2.classList.remove("clicked")
    nav_button_3.classList.remove("clicked")
}

let nav_button_2 = document.querySelector(".nav-button-2")
nav_button_2.addEventListener("click", navButton2Listener)

function navButton2Listener() {
    nav_button_2.classList.toggle("clicked")
    nav_button_1.classList.add("nav-button-1")
    nav_button_3.classList.add("nav-button-3")
    nav_button_1.classList.remove("clicked")
    nav_button_3.classList.remove("clicked")
}

let nav_button_3 = document.querySelector(".nav-button-3")
nav_button_3.addEventListener("click", navButton3Listener)

function navButton3Listener() {
    nav_button_3.classList.toggle("clicked")
    nav_button_1.classList.add("nav-button-1")
    nav_button_2.classList.add("nav-button-2")
    nav_button_1.classList.remove("clicked")
    nav_button_2.classList.remove("clicked")
}
