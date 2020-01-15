$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.topbanner, .logo_container').css({
        'opacity': ((height - scrollTop*2.5) / height)
    });
});

$(document).ready(function (){
    $(".fa-angle-double-down").click(function (){
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $(".fa-angle-double-up").click(function (){
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });
});
