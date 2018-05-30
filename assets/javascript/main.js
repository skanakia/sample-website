
$(document).ready(function () {
    $('.parallax').parallax();
    $('.tap-target').tapTarget();
    $('.tap-target').tapTarget('open');


    $("#menu").on("click", function () {
        $(this).css("z-index", "1000");
        $('.tap-target').css("z-index", "501");
        if ($(".tap-target").isOpen !== true) {
            $('.tap-target').tapTarget();
            $('.tap-target').tapTarget('open');
            $(this).css("visibility", "visible")
        } else {
            $('.tap-target').tapTarget();
            $('.tap-target').tapTarget('close');
        }

    });

    $('html').click(function() {
        if ($(".tap-target").isOpen !== true) {
            $('.tap-target').tapTarget();
            $('.tap-target').tapTarget('open');
            $(this).css("visibility", "visible")
        } else {
            $('.tap-target').tapTarget();
            $('.tap-target').tapTarget('close');
        }

    });
});

