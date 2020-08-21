$(document).ready(function() {
    $('.btn-web').click(function() {
        $('#hd-body .form-group').toggle();
        $('#hd-body .main-menu').toggle();
        $('.btn-search i').toggleClass('fa-search fa-times');
    });
    $('.btn-mobile').click(function() {
        $('.form-group-responsive').toggle();
        $('.logo').toggle();
        $('.btn-search i').toggleClass('fa-search fa-times');
    });
    $('.btn-respon').click(function() {
        $('.wp-respon-menu').stop().slideToggle(500);
        $('.btn-respon i').toggleClass('fa-bars fa-times');
    });
    $('.main-menu li .sub-menu').after('<i class="fa fa-angle-down arrow" aria-hidden="true"></i>');
    $('.main-menu li .sub-menu').parent('li').find('a').addClass('position-relative');
    //respone menu
    $('.respon-menu li .sub-menu').parent('li').addClass('position-relative');

    $('.respon-menu li .sub-menu').after('<i class="fa fa-plus arrow-res" aria-hidden="true"></i>');
    $('.arrow-res').click(function() {

        $(this).prev('.sub-menu').stop().slideToggle();
        $(this).toggleClass('fa-plus fa-minus');
        $(this).stop();
    });
    $(window).resize(function() {
        if ($(document).width() >= 992 || $(document).width() <= 992) {
            $('.wp-respon-menu').css('display', 'none');
            $('.respon-menu .sub-menu').css('display', 'none');
            $('.btn-respon i').removeClass('fa-times').addClass('fa-bars');
            $('#arrow-res').removeClass('fa-minus').addClass('fa-plus');
        }
    });



    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 4
            }
        }
    })
});