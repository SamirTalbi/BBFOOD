const myAtropos1 = Atropos({
    el: '.my-atropos1',
    shadow: false
});
const myAtropos2 = Atropos({
    el: '.my-atropos2',
    shadow: false,
    rotate: true,
    rotateTouch: false,
    activeOffset: 150
});
const myAtropos3 = Atropos({
    el: '.my-atropos3',
    shadow: true,
    shadowOffset: 75,
    shadowScale: 0.6,
    rotateXMax: 35,
    rotateYMax: 35,
    rotateXInvert: true,
    rotateYInvert: true,
    highlight: false
});

var banner = document.getElementsByClassName('banner');
new simpleParallax(banner, {
    scale: 2,
    delay: 1.5,
    overflow: true,
    direction: 'up'
});

AOS.init();