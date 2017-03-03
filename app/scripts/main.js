$(document).ready(function(){

//Init Controller

var controller = new ScrollMagic.Controller()

        var
        text = $('.bloc--2').find('p'),
        img = $('.section__2').find('img'),
        btn = $('.section__2').find('a'),
        bloc = $('.section__2').find('.content'),
        after = $('.section__2').find('h2:after');

    var tl = new TimelineMax({pause: false});
    tl.add("start") // add timeline label
      .fromTo(text, 0.5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(btn, 0.5, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(bloc, 0.5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "start")
      .fromTo(img, 0.5, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, "+=0.05" )
      .fromTo(after, 0.5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "+=0.05" )

    var para = $('.section__3').find('.paragraph');
        image = $('.section__3').find('.img__3');

    var tlPortfolio = new TimelineMax({pause: false});
    tlPortfolio.add('portfolio')
    .fromTo(para, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'portfolio')
    .fromTo(image, 1, { y: '200px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'portfolio')


//Build a scene

var scene = new ScrollMagic.Scene({
  triggerElement : '.section__2 .level_2',
}).addIndicators()
  .setTween(tl);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.section__3 .level_2',
}).addIndicators()
.setTween(tlPortfolio);

controller.addScene([
scene,
scene2
]);

});
