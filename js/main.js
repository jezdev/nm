window.addEventListener("load", function () {
    document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav").addEventListener("click", function () {
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", function () {
        nav.classList.remove("nav--open");
    });
});