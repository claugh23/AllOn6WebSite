$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 100,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 100,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});