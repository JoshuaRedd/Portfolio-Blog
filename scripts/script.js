$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.topbanner, .logo_container').css({
        'opacity': ((height - scrollTop*2.5) / height)
    });
});
