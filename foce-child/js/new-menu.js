const menu = document.querySelector(".fullscreen-menu");
const btn = document.querySelector(".toggle");
const menuLinks = document.querySelectorAll(".menu-links a");

function toggleMenu() {
  menu?.classList.toggle("active");
  btn?.classList.toggle("active");

  // Bloque le défilement de la page quand le menu est ouvert
  const isOpen = menu?.classList.contains("active");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMenu() {
  menu?.classList.remove("active");
  btn?.classList.remove("active");
  document.body.style.overflow = "";
}

btn?.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});