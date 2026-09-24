
const swiper = new Swiper('.mon-slider', {

    effect: 'coverflow',

    grabCursor: false,

    centeredSlides: false,

    slidesPerView: 'auto',

    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },


    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    speed: 1500,

});