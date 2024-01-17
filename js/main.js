const slideContainer = document.querySelector(".container-primary");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const miniatureContainer = document.querySelector(".miniature-container")

// definisco le varie slide
const slides = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
let slideBig = 0;

// definisco la slide mostrata 
let slideHtml = '';

// genero le slide
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    let activeClass = i == 0 ? "active" : "";
     
    slideHtml += `<img src="./img/${slides[i]}" alt="slide ${i}" class="slide ${activeClass}">`;
}
slideContainer.innerHTML += slideHtml;

// genero le miniature
let miniHtml = '';
for (let i = 0; i < slides.length; i++) {
    const miniature = slides[i];
    let miniActive = (i === slideBig) ? "active" : "";
    
    const newMiniContainer = document.createElement("div");
    const newMiniImg = document.createElement("img");

    newMiniContainer.classList.add("slide-container");
    newMiniContainer.setAttribute("data-miniature-index", i);

    newMiniImg.classList.add("miniature");
    if (miniActive) newMiniImg.classList.add("active");
    newMiniImg.setAttribute("src", `./img/${miniature}`);
    newMiniImg.setAttribute("alt", `slide ${i}`);
    newMiniContainer.append(newMiniImg);
    miniatureContainer.append(newMiniContainer);

    // * evento click miniature
    newMiniContainer.addEventListener('click', function () {
        allSlides[slideBig].classList.remove("active"); 
        allMiniature[slideBig].classList.remove("active");
    
        slideBig = this.getAttribute("data-miniature-index");
    
        allSlides[slideBig].classList.add("active");
        allMiniature[slideBig].classList.add("active");    
    }) 
}

// * evento freccia destra
const allSlides = document.querySelectorAll(".slide");
const allMiniature = document.querySelectorAll(".miniature");
arrowRight.addEventListener('click', function () {
    allSlides[slideBig].classList.remove("active"); 
    allMiniature[slideBig].classList.remove("active"); 
    slideBig++;
    if (slideBig >= allSlides.length) slideBig = 0;

    allSlides[slideBig].classList.add("active");
    allMiniature[slideBig].classList.add("active");
});

// * evento freccia sinistra
arrowLeft.addEventListener('click', function () {
    allSlides[slideBig].classList.remove("active"); 
    allMiniature[slideBig].classList.remove("active"); 
    slideBig--;
    if (slideBig < 0 ) slideBig = 4;

    allSlides[slideBig].classList.add("active");
    allMiniature[slideBig].classList.add("active");
});





