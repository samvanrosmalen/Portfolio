anime({
    targets: '.square',
    translateX: 250,
    rotate: 360,
    scale: 3,
    duration: 3000,
    loop: true,
    direction: 'alternate'

});

anime({
    targets: '.cirkel',
    keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
});

anime({
    targets: '#cirkel, #cirkel1, #cirkel2, .el',
    translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + (-50 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + .25;
      },
      rotate: function() { return anime.random(-360, 360); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: true
});


var options = {
  opacityIn:[0,1],
  scaleIn:[0.2,1],
  scaleOut:3,
  durationIn:800,
  durationOut:600,
  delay:500,
  easing:"easeInExpo"
};
anime.timeline({loop:true})
.add({
  targets:'.text-animation .one',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .one',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .two',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .two',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .three',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .three',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation',
  opacity:0,
  duration:500,
  delay:500
})
