$(document).ready(function () {
    $("#owl-slider").owlCarousel({
        items: 4,
        nav: true,
        navText : ["<img src='img/left-arrow.png'>","<img src='img/right-arrow.png'>"]
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

    /*$("#owl-slider-v2").owlCarousel({
        items: 1,
        singleItem: true,
        dots: true,
        dotsContainer: '#carousel-custom-dots',
        animateOut: 'fadeOut',
        autoHeight:true
    });

    $('.owl-dot').click(function () {
        $("#owl-slider").trigger('to.owl.carousel', [$(this).index(), 300]);
        $("#owl-slider-v2").trigger('to.owl.carousel', [$(this).index(), 300]);
    });*/
});
