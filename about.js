const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav-contents");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
function req()
{
    alert("request has been Sent")
}