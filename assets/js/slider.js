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
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
    });
});

$(document).ready(function () { 
    $('.featured-products-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
    });
});