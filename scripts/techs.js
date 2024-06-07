'use strict'

const techs = document.querySelectorAll(".tech");

techs.forEach((tech) => {
    tech.addEventListener('click', activeTech)
})

function activeTech(evt) {
    const target = evt.currentTarget;

    const numberTech = target.dataset.target;
    //console.log(numberTech);

    techs.forEach((t) => {
        t.classList.remove("tech--active");
    });

    target.classList.add("tech--active");
}