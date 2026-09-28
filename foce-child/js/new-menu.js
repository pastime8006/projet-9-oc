
function toggleMenu() {
  const menu = document.querySelector(".fullscreen-menu");


  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
  } else {
    menu.classList.add("active");
  }
}  

const btn = document.querySelector(".toggle");
btn.addEventListener("click", toggleMenu);