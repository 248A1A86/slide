const cards = document.querySelectorAll(".cards li");
const cardContainer = document.querySelector(".cards");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 4; // starting from 5

function updateSlider(){
    cards.forEach(card => card.classList.remove("active"));
    cards[currentIndex].classList.add("active");

    const cardWidth = 140; // width + gap (120 + 20)
    const offset = -(currentIndex * cardWidth - window.innerWidth/2 + 60);
    cardContainer.style.transform = `translateX(${offset}px)`;
}

nextBtn.addEventListener("click", () => {
    if(currentIndex < cards.length - 1){
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if(currentIndex > 0){
        currentIndex--;
        updateSlider();
    }
});

updateSlider();