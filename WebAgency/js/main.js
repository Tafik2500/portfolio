$(function(){

/* open menu */

var menu = $('.header__menu');
var menuItem = $('.header__menu__items ul li');

menu.on("click", function(){
	menuItem.slideToggle("slow");
	$(menu).toggleClass('change-image');
})

/* header pop-up */

var play = $('.header__play');
var black = $('.background-black');
var close = $('.close__background-black');

play.on('click', function() {
	black.css("display", "block").on('click', function(){
		black.css("display", "none");
	close.on('click', function(){
		black.css("display", "none");
	})
	});

})

/* Carousel */

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	responsive:{
		0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
	}
	})
	
	var owl = $('.owl-carousel');

	$('.our-projects__prev-button').on('click', function(){
		owl.trigger('prev.owl.carousel');
	})

	$('.our-projects__next-button').on('click', function(){
		owl.trigger('next.owl.carousel');
	})

})
