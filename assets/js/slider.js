$(document).ready(function () { 
    $('.collection-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        dots: true,
    });
});


$(document).ready(function () { 
    $('.featured-products').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    });
});