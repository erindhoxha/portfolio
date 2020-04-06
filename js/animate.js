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
  var content = `
    <svg version="1.1" id="ehoxloader2" style="width:100px; position:absolute;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" viewBox="0 0 52 48" style="enable-background:new 0 0 52 48;" xml:space="preserve">
      <g id="Website">
        <g id="Home" transform="translate(-60.000000, -26.000000)">
          <path id="Shape_1_" class="st2"
            d="M103.5,51.8c0.9,0,1.7-0.8,1.7-1.7v-9.6c0-4.4-3.6-7.9-7.9-7.9H74.7c-4.4,0-7.9,3.6-7.9,7.9
          v18.9c0,4.4,3.6,7.9,7.9,7.9h26.2c2.6,0,4.8,2.2,4.8,4.8l0,0c0,0.2-0.2,0.3-0.3,0.3H74.7c-7.2,0.1-13-5.7-13-12.9V40.6
          c0-7.2,5.8-13,13-13h22.6c7.2,0,13,5.8,13,13v10.2v0.8c0,3.7-3,6.8-6.8,6.8H90.3c-0.2,0-0.3,0.2-0.3,0.3v5.6
          c0,0.2-0.2,0.3-0.3,0.3H89c-4.2,0-5.1-2.5-5.1-5.5v-0.7c0-0.2-0.2-0.3-0.3-0.3h-4.2c-0.2,0-0.3,0.2-0.3,0.3V64
          c0,0.2-0.1,0.3-0.3,0.3l-2.2,0.1c-2.3,0-3.9-2-3.9-4.3v-16c0-0.2,0.2-0.3,0.3-0.3h1.2c2.5,0,4.5,2.1,4.5,4.5v3.4
          c0,0.2,0.2,0.3,0.3,0.3h4.5c0.2,0,0.3-0.2,0.3-0.3v-8.2c0-0.2,0.2-0.3,0.3-0.3h1.5c2.5,0,4.5,2.1,4.5,4.5V52L103.5,51.8z" />
        </g>
      </g>
    </svg>
      `;
  $("#video-box").append(content);
  startSVGAnimation($('#ehoxloader2'));
  $("#video-box").append('<video id="video" autoplay><source src="img/debugcon-video.mp4" type="video/mp4"></video>');
  $("#video").on('loadstart', function () {
    $("#ehoxloader2").fadeOut(200);
  })
});

$('.pop-up .close, .pop-up').click(function () {
  $('.pop-up').removeClass('open');
});


