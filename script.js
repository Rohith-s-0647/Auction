const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-contents");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
let currentIndex = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
function next() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSliderPosition();
}
function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSliderPosition();
}
function updateSliderPosition() {
  slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}
setInterval(next, 3000);
