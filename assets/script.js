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
const banner_id = document.getElementById("banner");
const banner_img = document.querySelector(".banner-img");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const div_dots = document.querySelector(".dots");
let count = 0;
const nb_slides = slides.length;
console.log(nb_slides);
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

// previous
function previous() {
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
    console.log(count);
}
arrow_left.addEventListener("click", previous);
// next
function next() {
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
}
arrow_right.addEventListener("click", next);
//
for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    div_dots.appendChild(dot);
}
