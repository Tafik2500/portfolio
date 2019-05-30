$(function () {

    $('.myself-information__btn-link').on('click', function (e) {
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top
        }, 400);
        
        
    });
});