var span = $(".container span");
var container = $('.mob-menu-items')

$(".container span").click(function() {

    if (span.hasClass("active")) {
        span.removeClass("active");
        span.addClass("cross");
        container.addClass('fullHeight')
    } else {
        span.removeClass("cross");
        span.addClass("active");
        container.removeClass('fullHeight')
    }
});