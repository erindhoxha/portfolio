function runAnimations() {
  anime({
    targets: '.icon',
    translateY: 0,
    duration: 1400,
    easing: 'linear',
    direction: 'alternate',
  });
    anime({
    targets: 'button, .cta-button.portfolio-button',
    translateY: 0,
    duration: 1400,
    easing: 'linear',
    direction: 'alternate',
  });
}





$('.preview-btn').click(function () {
  $('.pop-up').addClass('open');
  $("#video-box").empty();
  $("#video-box").append('<video id="video" autoplay><source src="img/debugcon-video.mp4" type="video/mp4"></video>')
});

$('.pop-up .close, .pop-up').click(function () {
  $('.pop-up').removeClass('open');
});


