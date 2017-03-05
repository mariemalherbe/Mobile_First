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

        var slider = $('.section__4').find('.content'),
            name = $('.swiper-slide').find('.title-name');

        var tlSlider = new TimelineMax({pause : false});
        tlSlider.add('slider')
        .fromTo(slider, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'slider')
        .fromTo(name, 1, { y: '300px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'slider')

        var map = $('.section__5').find('img'),
            text = $('.section__5').find('.text');
            p = $('footer').find('p');

        var tlContact = new TimelineMax({pause : false});
        tlContact.add('contact')
        .fromTo(text, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
        .fromTo(map, 1, { y: '300px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
        .fromTo(p, 1, { y: '300px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')

        var link = $('.section__5').find('.mailto');
            social =$('.section__5').find('.social');

        var tlLink = new TimelineMax({pause : false});
        tlLink.add('link')
        .fromTo(link, 1, { x: '250px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, "+=0.5")
        .fromTo(social, 0.5, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut })


//Build a scene

var scene = new ScrollMagic.Scene({
  triggerElement : '.section__2 .level_2',
}).addIndicators()
  .setTween(tl);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.section__3 .level_2',
}).addIndicators()
.setTween(tlPortfolio);

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.section__4 .content',
}).addIndicators()
.setTween(tlSlider);

var scene4 = new ScrollMagic.Scene({
  triggerElement: '.section__5 h2',
}).addIndicators()
.setTween(tlContact);

var scene5 = new ScrollMagic.Scene({
  triggerElement: '.section__5 h2',
}).addIndicators()
.setTween(tlLink);

controller.addScene([
scene,
scene2,
scene3,
scene4,
scene5
]);

});
