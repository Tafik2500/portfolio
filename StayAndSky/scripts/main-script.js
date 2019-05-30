$(function(){

	// testimonals
	let buttons = $(".navigation-item"),
		blocks = $(".testimonals-block");

	buttons.on("click", function(){
		var count = 0;
		$(this).addClass("navigation-active");
		$(".navigation-active").not(this).removeClass("navigation-active");

		count = $(this).index();
		blocks.eq(count).addClass("active-block");
		$(".active-block").not(blocks.eq(count)).removeClass("active-block");
	})
	// testimonals
	

	// Anchor Scroll

	let links = $(".main-menu__link");
	links.on("click", function(e){
		e.preventDefault();

		let id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);

	})

	// Anchor Scroll

	// Adaptive Menu

	let burgerBtn = $(".menu-btn"),
		overlay = $(".overlay"),
		closeBtn = $(".close-btn");

	burgerBtn.on("click", function(){
		overlay.css('display', 'block');
	})

	closeBtn.on("click", function(){
		overlay.css('display', 'none');
	})

	// Adaptive Menu

})