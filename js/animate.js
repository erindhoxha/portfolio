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


