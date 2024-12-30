const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-contents");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
 
function buy1()
{
  alert("Congratulation your Order Has Been Placed")
}