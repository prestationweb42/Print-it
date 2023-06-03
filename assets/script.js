const slides = [
    {
        image: "slide1.webp",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.webp",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.webp",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.webp",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];
//
const banner_id = document.getElementById("banner");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
let count = 0;
const nb_slides = slides.length;
// function display current img
function showCurrentImg() {
    const img_banner = document.createElement("img");
    img_banner.classList.add("banner-img");
    img_banner.src = "./assets/images/slideshow/" + slides[0].image;
    banner_id.appendChild(img_banner);
    const p_banner = document.createElement("p");
    p_banner.innerHTML = slides[0].tagLine;
    banner_id.appendChild(p_banner);
}
showCurrentImg();

// function previous
function previous() {
    dots[count].classList.remove("dot_selected");
    if (count > 0) {
        count--;
    } else {
        count = nb_slides - 1;
    }
    document.getElementById("banner").innerHTML = "";
    const img_banner = document.createElement("img");
    img_banner.classList.add("banner-img");
    img_banner.src = "./assets/images/slideshow/" + slides[count].image;
    banner_id.appendChild(img_banner);
    const p_banner = document.createElement("p");
    p_banner.innerHTML = slides[count].tagLine;
    banner_id.appendChild(p_banner);
    dots[count].classList.add("dot_selected");
}
arrow_left.addEventListener("click", previous);
// function next
function next() {
    dots[count].classList.remove("dot_selected");
    if (count < nb_slides - 1) {
        count++;
        console.log(count);
    } else {
        count = 0;
    }
    document.getElementById("banner").innerHTML = "";
    const img_banner = document.createElement("img");
    img_banner.classList.add("banner-img");
    img_banner.src = "./assets/images/slideshow/" + slides[count].image;
    banner_id.appendChild(img_banner);
    const p_banner = document.createElement("p");
    p_banner.innerHTML = slides[count].tagLine;
    banner_id.appendChild(p_banner);
    dots[count].classList.add("dot_selected");
}
arrow_right.addEventListener("click", next);
