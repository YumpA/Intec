'use strict'

const arrow = document.querySelector(".arrow-img");
const btn = document.querySelector(".big-btn");

btn.addEventListener ('click', () => {
    arrow.classList.toggle("move--right");
})