// Toggle hamburger menu
const hamburger = document.getElementByld("hamburger");
const navMenu = document.getElementByld("nav-menu");

// Open and close menu
hamburger.addEventListener("click", () => {
  
  navMenu.classList.toggle("active");

  //Change icon when menu opens
 if ( navMenu.classList.toggle("active")) {
  hamburger.textContent = "X";
 } else {
   hamburger.textContent = "☰";
 }
   
});
