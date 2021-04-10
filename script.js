  
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("slide");
const dotsArea = document.querySelector(".dots")

let index = 0;

function showSlide(i){
    for (let j = 0; j < slides.length; j++) {
    slides[j].classList.remove("active");
    }
    slides[i].classList.add("active")
    index = i;
    dots[index].checked = true
    /*let prev = index;
    index = i;
    slides[prev].classList.remove("active");
    slides[index].classList.add("active");
    dots[index].checked = true;*/
}

leftArrow.addEventListener("click", () => {
    let currentIndex = index === 0 ? slides.length - 1 : index - 1;
    showSlide(currentIndex);
})

rightArrow.addEventListener("click", () => {
    let currentIndex = index === slides.length - 1 ? 0 : index + 1;
    showSlide(currentIndex);
})

dotsArea.addEventListener("click", (e) => {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i] === e.target) {
            showSlide(i);
            break;  
        }
    }
})

/*function showSlide(i) {
    for (let j = 0; i < slides.length; i++) {
        console.log(slides[j].classList);
    }
}*/

//console.log(slides);

/*function fn(str) {
    console.log(str);
}

fn("глупая функция");*/

// setInterval(() => {
//     let currentIndex = index === slides.length - 1 ? 0 : index + 1;
//     showSlide(currentIndex);
// }, 3000)