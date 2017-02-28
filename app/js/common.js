$(function(){

/************hover effect on contact block in header************/
    $('.contact_item-wrap i').hover( function () {
        $('.contact_item-wrap i').removeClass('active');
        $(this).addClass('active');
        var dataContact = $(this).attr('data-contact');
        $('.contact-show > div').removeClass('active');
        $('.contact-show .' + dataContact).addClass('active');
    });
/*********END hover effect on contact block in header************/
    
/*********show menu on small gadjet************/
    $('.button-menu').click(function(){
        $('.icon').toggleClass('menu').toggleClass('close');
        $('.nav').toggleClass('active');
        $(this).toggleClass('active');
    });
/*********END show menu on small gadjet************/
    
/*********owl-carousel-settings************/
    $(".owl-carousel").owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1],
        navigation: true,
        navigationText : ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        slideSpeed : 800,
        paginationSpeed : 800,
        autoPlay: true,
        loop: true,
    });
    /*********END owl-carousel-settings************/

});