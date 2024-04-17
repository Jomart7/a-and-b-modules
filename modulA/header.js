let menu = document.querySelector("#icon1");
let navul = document.querySelector(".head");

menu.onclick = () => {
    menu.classList.toggle("x.svg");
    navul.classList.toggle("open")
}