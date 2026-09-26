const place = document.querySelector("#place");
const bigCloud = document.querySelector(".place-bigcloud");
const littleCloud = document.querySelector(".place-littlecloud");


window.addEventListener("scroll", () => {


    const placeTop = place.offsetTop;


    // commence 300px avant la section place
    let scroll = window.scrollY - (placeTop - 300);


    // empêche les valeurs négatives
    scroll = Math.max(scroll, 0);


    // limite à 300px de déplacement
    let movement = Math.min(scroll * 0.4, 300);



    if (bigCloud) {

        bigCloud.style.transform =
        `translateX(-${movement}px)`;

    }


    if (littleCloud) {

        littleCloud.style.transform =
        `translateX(-${movement}px)`;

    }

});