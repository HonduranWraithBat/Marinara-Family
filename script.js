// Toggle hamburger menu
const hamburger = document.getElementByld("hamburger");
const navMenu = document.getElementByld("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.textContent = navMenu.classList.contains("active") ? "X" : "☰";
});
