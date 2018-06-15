$(document).ready(function () {
    $("#owl-slider").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<img src='img/left-arrow.png'>", "<img src='img/right-arrow.png'>"],
        responsive: {
            // breakpoint from 0 up
            0: {},
            // breakpoint from 480 up
            480: {},
            // breakpoint from 768 up
            1350: {
                items: 4,
                nav: true,
                navText: ["<img src='img/left-arrow.png'>", "<img src='img/right-arrow.png'>"]
            }
        }

        // singleItem: true,
        // dots: true,
        // dotsContainer: '#carousel-custom-dots'
    });

    $('#owl-slider-thumbs').owlCarousel({
        items: 1,
        singleItem: true,
        thumbs: true,
        thumbsPrerendered: true
    });

    function active_burger() {
        $('.header__burger-wrapper').removeClass('active');
    }

    $('#check-menu').on('click', function () {
        if ($(this).is(':checked')) {
            $('.header__burger-wrapper').addClass('active');
            console.log('checkd');
        } else {
            setTimeout(active_burger, 500);
        }
    });
});
