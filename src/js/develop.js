// $('.slick-banner').slick();
$(document).ready(function(){

    $('.navigate_click_js').click(function(){
        $('.navigate_js').fadeToggle([2000],[],[
            $(window).resize(function() {
                if ($(window).width() >= '882'){
                    $('.navigate_js').css('display','flex');
                }
                else   {
                    $('.navigate_js').css('display','none');
                }
            })
        ]);
        // $('.navigate__box').css('display','flex');
    });

    $('.slick-banner').slick({
        prevArrow: '<img class="slider-left" src="../images/slider-left.svg" alt="" width="16" height="19">',
        // prevArrow: '<svg width="16" height="19"><use xlink: href="#slider-left"></use></svg>',
        // nextArrow: '<svg width="16" height="19"><use xlink: href="#slider-right"></use></svg>'
        nextArrow: '<img class="slider-right" src="../images/slider-right.svg" alt="" width="16" height="19">',
        responsive: [
        {
            breakpoint: 600,
            settings: {
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            }
        }
        ]
    });
    $('.sales__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        infinite: true,
        prevArrow: '<img class="slider-left" src="../images/slider-left.svg" alt="" width="16" height="19">',
        nextArrow: '<img class="slider-right" src="../images/slider-right.svg" alt="" width="16" height="19">',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false
                }
            }
        ]
    });


});
