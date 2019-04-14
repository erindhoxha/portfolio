$("body").css('overflow', 'hidden');
$(".loader").fadeIn();
setTimeout(() => {
$("body").css('overflow', 'unset');
$(".loader").fadeOut(300);
startSVGAnimation($('#logo-front'));
}, 2200);
