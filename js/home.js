$(document).ready(function () {
    $("#search2").select2({
        placeholder: "Cari Mobil",
        allowClear: true,
    });
    $("#search22").select2({
        placeholder: "Cari Mobil",
        allowClear: true,
    });
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: false,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },

        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            1100: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
    const swipert = new Swiper(".swiper.two", {
        // Optional parameters
        direction: "horizontal",
        loop: false,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },

        slidesPerView: 2.2,
        spaceBetween: 10,
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            640: {
                slidesPerView: 3.2,
                spaceBetween: 30,
            },
            1100: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4.7,
                spaceBetween: 20,
            },
        },
    });
});