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
		$('header').toggleClass('bg-white');
		$('body').toggleClass('no-scroll');
	});

	$('.tag--menu').click(function(e){
		e.preventDefault();
		$('.nav__left').css('transform','translateX(0%)');
	});

	$('.cross').click(function(e){
		e.preventDefault();
		console.log('hello');
		$('.nav__left').css('transform','translateX(-1O0%)');
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

	$('#portraits').find('a').on('click', function(){
		$('.slider__landscape').addClass('bloc--hide');
		$('.slider__portraits').removeClass('bloc--hide');
		('.nav__landscape').addClass('active');
		$('.nav__landscape').removeClass('active');
	});

	$('#architecture').find('a').on('click', function(){
		$('.slider__landscape').addClass('bloc--hide');
		$('.slider__architecture').removeClass('bloc--hide');
		$('.nav__architecture').addClass('active');
		$('.nav__landscape').removeClass('active');
	});

	$('.nav__landscape').click(function(e){
		e.preventDefault();
		$('.section__4').find('.content').not('.bloc--hide').addClass('bloc--hide');
		$('.slider__landscape').removeClass('bloc--hide');
		$('.nav__architecture').removeClass('active');
		$('.nav__portraits').removeClass('active');
		$(this).addClass('active');
	});

	$('.nav__portraits').click(function(e){
		e.preventDefault();
		console.log($('.section__4').find('.content').not('.bloc--hide'));
		$('.section__4').find('.content').not('.bloc--hide').addClass('bloc--hide');
		$('.slider__portraits').removeClass('bloc--hide');
		$('.nav__landscape').removeClass('active');
		$('.nav__architecture').removeClass('active');
		$(this).addClass('active');
	});

	$('.nav__architecture').click(function(e){
		e.preventDefault();
		$('.section__4').find('.content').not('.bloc--hide').addClass('bloc--hide');
		$('.slider__architecture').removeClass('bloc--hide');
		$('.nav__landscape').removeClass('active');
		$('.nav__portraits').removeClass('active');
		$(this).addClass('active');
	});



})
