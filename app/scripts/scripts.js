//SCROLL TO
$(document).ready(function() {
	$('.scrollTo').click( function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 1000; // Durée de l'animation (en ms) (750 à la base)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
});

// MENU
$(document).ready(function(){
	$('.tag--menu, .cross').click(function(e){
		e.preventDefault();
		$('.nav__left').animate({width:'toggle'},350);
		$('header').toggleClass('bg-white');
		$('body').toggleClass('no-scroll');
	});

	$('.orientation__block__landscape').click(function(e){
		e.preventDefault();
		$('.section__3').find('.bloc--info').not('.bloc--hide').addClass('bloc--hide');
		$('#landscape').removeClass('bloc--hide');
		$('.orientation__block__portraits').removeClass('active');
		$('.orientation__block__architecture').removeClass('active');

		$(this).addClass('active');
	});

	$('.orientation__block__portraits').click(function(e){
		e.preventDefault();
		$('.section__3').find('.bloc--info').not('.bloc--hide').addClass('bloc--hide');
		$('#portraits').removeClass('bloc--hide');
		$(this).addClass('active');
		$('.orientation__block__landscape').removeClass('active');
		$('.orientation__block__architecture').removeClass('active');
	});

	$('.orientation__block__architecture').click(function(e){
		e.preventDefault();
		$('.section__3').find('.bloc--info').not('.bloc--hide').addClass('bloc--hide');
		$('#architecture').removeClass('bloc--hide');
		$('.orientation__block__landscape').removeClass('active');
		$('.orientation__block__portraits').removeClass('active');
		$(this).addClass('active');
	});

})
