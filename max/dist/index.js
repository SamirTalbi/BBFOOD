

var banner = document.getElementsByClassName('banner');
new simpleParallax(banner, {
    scale: 2,
    delay: 1.5,
    overflow: true,
    direction: 'up',
    transition: 'cubic-bezier(0,0,0,1)'
});

AOS.init();