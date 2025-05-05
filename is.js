const scrollContainer = document.getElementById("scrollContainer");
const leftBtn = document.querySelector(".nav-button.left");
const rightBtn = document.querySelector(".nav-button.right");

leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: window.innerWidth, behavior: "smooth" });
});
