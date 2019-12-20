$(document).ready(function () {
    resize();
    $(".dropdown-btn").click(function (e) { 
        e.preventDefault();
        if ($(this).next().is(":hidden")) {
            $(this).next().slideDown(200);
        }
        else {
            $(this).next().slideUp(200);
        }
        
    });
});

$(window).resize( function () {
    resize();
});
var resize = function () {
    var navHeight = $(".navbar").css("height");
    var winHeight = window.outerHeight;

    navHeight =  navHeight.replace("px","");

    $(".side-menu").css({
        "height": (winHeight - navHeight),
        "top": navHeight+"px"
    });

    var winWidth = $(window).width();
    var sideWidth = $(".side-menu").css("width");

    sideWidth = sideWidth.replace("px","");
    $(".content").css({
        "width": winWidth - sideWidth,
        "top": navHeight + "px"
    });
}