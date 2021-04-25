const hamburger = document.querySelector(".menu");
const bar = document.querySelector(".bar");


hamburger.addEventListener("click", menufun);

function menufun() {
    hamburger.classList.toggle("active");
    bar.classList.toggle("active");
}