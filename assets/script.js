const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];
//
const banner_img = document.querySelector(".banner-img");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const div_dots = document.querySelector(".dots");
let count = 0;
const nb_slides = slides.length;
console.log(nb_slides);
// previous
function previous() {
    if (count > 0) {
        banner_img.innerHTML =
            '<img src="./assets/images/slideshow/' +
            slides[count].image +
            '" />' +
            "<p>" +
            slides[count].tagLine +
            "</p>";
        count--;
    } else {
        count = nb_slides - 1;
    }
}
arrow_left.addEventListener("click", previous);
// next
function next() {
    if (count < nb_slides) {
        banner_img.innerHTML =
            '<img src="./assets/images/slideshow/' +
            slides[count].image +
            '" />' +
            "<p>" +
            slides[count].tagLine +
            "</p>";
        count++;
    } else {
        count = 0;
    }
}
arrow_right.addEventListener("click", next);
//
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    div_dots.appendChild(dot);
}
