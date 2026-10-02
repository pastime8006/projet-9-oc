// ROTATIONS DES FLEURS

// Récupère toutes les images
const images = document.querySelectorAll(".image");

//const tableauImages = Array.from(images);

// Parcourt le tableau
images.forEach(function(image) {

    // Applique la classe qui contient l'animation
    image.classList.add("rotate");
});

//Menu hamburger

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


