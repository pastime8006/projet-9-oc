document.addEventListener('DOMContentLoaded', function () {

    const slider = document.querySelector('.swiper');

    console.log('slider :', slider);
    console.log('type :', typeof slider);
    console.log('element HTML :', slider instanceof HTMLElement);

    if (!(slider instanceof HTMLElement)) {
        console.error('Le slider n’est pas un élément HTML valide');
        return;
    }

    const swiper = new Swiper(slider, {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20
    });

    console.log('Swiper OK', swiper);

});
