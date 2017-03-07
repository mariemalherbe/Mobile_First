$(document).ready(function(){


var controller = new ScrollMagic.Controller()

        var
        text = $('.bloc--2').find('p'),
        img = $('.section__2').find('img'),
        btn = $('.section__2').find('a'),
        bloc = $('.section__2').find('.content'),
        after = $('.section__2').find('h2:after');
        section = $('.section__2');

        var tl = new TimelineMax({pause: false});
         if($(window).width()<640){
            tl.add('start') // add timeline label
          .to(section, 0.5, {transform: 'scale(1.1)'})
          .fromTo(text, 0.5, { x: '10px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'start')
          .fromTo(btn, 0.5, { y: '30px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'start')
          .fromTo(bloc, 0.5, { x: '10px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'start')
          .fromTo(img, 0.5, { y: '30px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, '+=0.05' )
          .fromTo(after, 0.5, { x: '10px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, '+=0.05' )
          .to(section, 0.5, {transform: 'scale(1.05)'})
          } else {
            tl.add('start') // add timeline label
          .to(section, 0.5, {transform: 'scale(1.1)'})
          .fromTo(text, 0.5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'start')
          .fromTo(btn, 0.5, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'start')
          .fromTo(bloc, 0.5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'start')
          .fromTo(img, 0.5, { y: '100px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, '+=0.05' )
          .fromTo(after, 0.5, { x: '100px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, '+=0.05' )
          .to(section, 0.5, {transform: 'scale(1.1)'})
          }
        
          

         

          var section_2 = $('.section__2');
              section_3 = $('.section__3');
              var tlSection = new TimelineMax({pause: false});
          
          tlSection.add('shrink')
          .to(section_2, 0.5, {transform: 'scale(1)'})  
          .to(section_3, 0.5, {transform: 'scale(1.1)'})

           var section_3bis = $('.section__3');
              section_4 = $('.section__4');

          var tlSectionbis = new TimelineMax({pause: false});
          tlSectionbis.add('shrinkbis')
          .to(section_3bis, 0.5, {transform: 'scale(1)'})  
          .to(section_4, 0.5, {transform: 'scale(1.1)'})


          var section_4bis = $('.section__4');
              section_5 = $('.section__5');
          var tlSectionter = new TimelineMax({pause: false});
          tlSectionter.add('shrinkter')
          .to(section_4bis, 0.5, {transform: 'scale(1)'})  
          .to(section_5, 0.5, {transform: 'scale(1.1)'})

        var para = $('.section__3').find('.paragraph');
            image = $('.section__3').find('.img__3');

        var tlPortfolio = new TimelineMax({pause: false});
      

          if($(window).width()<640){
              tlPortfolio.add('portfolio')
            .fromTo(para, 1, { x: '20px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'portfolio')
             .fromTo(image, 1, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'portfolio')    
              }else{
                  tlPortfolio.add('portfolio')
                .fromTo(para, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'portfolio')
                .fromTo(image, 1, { y: '200px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'portfolio')
              }
        

        var slider = $('.section__4').find('.content'),
            name = $('.swiper-slide').find('.title-name');

        var tlSlider = new TimelineMax({pause : false});
        
        if($(window).width()<640){
              tlSlider.add('slider')
            .fromTo(slider, 1, { x: '20px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'slider')
              .fromTo(name, 1, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'slider')  
              }else{
                  tlSlider.add('slider')
                 .fromTo(slider, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'slider')
                .fromTo(name, 1, { y: '300px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'slider')
              }
       

        var map = $('.section__5').find('img'),
            text = $('.section__5').find('.text');
            p = $('footer').find('p');

        var tlContact = new TimelineMax({pause : false});
        if($(window).width()<640){
          tlContact.add('contact')
        .fromTo(text, 1, { x: '20px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
        .fromTo(map, 1, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
        .fromTo(p, 1, { y: '60px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
      }else{
        tlContact.add('contact')
        .fromTo(text, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
        .fromTo(map, 1, { y: '300px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
        .fromTo(p, 1, { y: '300px', opacity: 0 }, { y: 0, opacity: 1, ease: Power2.EaseInOut }, 'contact')
      }
        

        var link = $('.section__5').find('.mailto');
            social =$('.section__5').find('.social');

        var tlLink = new TimelineMax({pause : false});
        if($(window).width()){
          tlLink.add('link')
        .fromTo(link, 1, { x: '25px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, '+=0.5')
        .fromTo(social, 1, { x: '20px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut })
      }else{
        tlLink.add('link')
        .fromTo(link, 1, { x: '250px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut }, '+=0.5')
        .fromTo(social, 1, { x: '200px', opacity: 0 }, { x: 0, opacity: 1, ease: Power2.EaseInOut })

      }
        

//Build a scene

var scene = new ScrollMagic.Scene({
  triggerElement : '.section__2 .img__1',
})
  .setTween(tl);

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.section__3 .level_2',
})
.setTween(tlPortfolio);

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.section__4 .content',
})
.setTween(tlSlider);

var scene4 = new ScrollMagic.Scene({
  triggerElement: '.section__5 h2',
})
.setTween(tlContact);

var scene5 = new ScrollMagic.Scene({
  triggerElement: '.section__5 h2',
})
.setTween(tlLink);

var scene6 = new ScrollMagic.Scene({
  triggerElement: '.section__2 .bloc--3 p',
})
.setTween(tlSection);

var scene7 = new ScrollMagic.Scene({
  triggerElement: '.section__3 .bloc--info .paragraph',
})
.setTween(tlSectionbis);

var scene8 = new ScrollMagic.Scene({
  triggerElement: '.section__4 .swiper-button-next',
})
.setTween(tlSectionter);

controller.addScene([
scene,
scene2,
scene3,
scene4,
scene5,
scene6,
scene7,
scene8
]);


});
