console.log (3123213);
$("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + 100 + "px"});
    return true
});