document.addEventListener("DOMContentLoaded", () => {

    const titles = document.querySelectorAll("h2 span, h3 span");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    titles.forEach((title) => {
        observer.observe(title);
    });

});