function toggleMenu() {
  const menu = document.querySelector(".fullscreen-menu");
  const crossToggle = document.querySelector(".toggle");

  if (menu) {
    menu.classList.toggle("active");
  }

  if (crossToggle) {
    crossToggle.classList.toggle("active");
  }
}

const btn = document.querySelector(".toggle");

if (btn) {
  btn.addEventListener("click", toggleMenu);
}

const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector(".fullscreen-menu");
    const crossToggle = document.querySelector(".toggle");

    if (menu) {
      menu.classList.remove("active");
    }

    if (crossToggle) {
      crossToggle.classList.remove("active");
    }
  });
});