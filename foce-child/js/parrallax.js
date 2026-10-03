const place = document.querySelector("#place");
const bigCloud = document.querySelector(".place-bigcloud");
const littleCloud = document.querySelector(".place-littlecloud");

window.addEventListener("scroll", () => {
  if (!place) return;

  const placeTop = place.offsetTop;

  // La parallaxe commence 300px avant l'arrivée sur la section
  let scroll = window.scrollY - (placeTop - 300);

  // Empêche les valeurs négatives
  scroll = Math.max(scroll, 0);

  // Limite du déplacement selon la largeur
  let limit;

  if (window.innerWidth <= 700) {
    limit = 30;
  } else if (window.innerWidth <= 920) {
    limit = 90;
  } else if (window.innerWidth <= 1040) {
    limit = 100;
  } else if (window.innerWidth <= 1192) {
    limit = 120;
  } else {
    // Fullscreen / desktop
    limit = 300;
  }

  // Vitesse de déplacement
  const movement = Math.min(scroll * 0.4, limit);

  if (bigCloud) {
    bigCloud.style.transform = `translateX(-${movement}px)`;
  }

  if (littleCloud) {
    littleCloud.style.transform = `translateX(-${movement}px)`;
  }
});


/* ------------------------- PARALLAXE LOGO ------------------------- */

const banner = document.querySelector(".banner");
const logoWrap = document.querySelector(".site-logo-wrap");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (banner && logoWrap && !reduceMotion) {

    const LOGO_SPEED = 0.3; // intensité du parallaxe
    let ticking = false;

    function updateLogo() {

        const rect = banner.getBoundingClientRect();

        // on n'anime que tant que la bannière est visible
        if (rect.bottom > 0) {
            // rect.top devient négatif au scroll : le logo monte plus vite que la page
            logoWrap.style.setProperty("--parallax-y", `${rect.top * LOGO_SPEED}px`);
        }

        ticking = false;
    }

    window.addEventListener("scroll", () => {

        if (!ticking) {
            requestAnimationFrame(updateLogo);
            ticking = true;
        }

    }, { passive: true });

    updateLogo();
}