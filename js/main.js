const slideContainer = document.querySelector(".container-primary");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

// definisco le varie slide
const slides = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// definisco la slide mostrata 
let slideHtml = '';

// genero le slide
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    let activeClass = i == 0 ? "active" : "";
     
    slideHtml += `<img src="./img/${slides[i]}" alt="slide ${i}" class="slide ${activeClass}">`;
}
slideContainer.innerHTML += slideHtml;

// * evento freccia destra
const allSlides = document.querySelectorAll(".slide");
let slideBig = 0;
arrowRight.addEventListener('click', function () {
    allSlides[slideBig].classList.remove("active"); 
    slideBig++;
    if (slideBig >= allSlides.length) slideBig = 0;

    allSlides[slideBig].classList.add("active");
});

// * evento freccia sinistra
arrowLeft.addEventListener('click', function () {
    allSlides[slideBig].classList.remove("active"); 
    slideBig--;
    if (slideBig < 0 ) slideBig = 4;

    allSlides[slideBig].classList.add("active");
});

