$(document).ready(function() {

	let menuService = $(".menu__services"),
		subMenu = $(".hover-menu a"),
		arrow = $(".arrow");

	menuService.hover(
		function(){
			$(this).find(subMenu).
					css("display", "block").
					
					find(".header__menu-service").
					css("color", "#2aacc8");
	},
	 	function(){
			$(this).find(subMenu).
					css("display", "none").
					
					find(".header__menu-service").
					css("color", "#000");
	})

									///////SLIDER
	let slideBtn = $(".slider__section-btn");								

	slideBtn.on("click", function(){
		$(this).addClass("active-btn");
		slideBtn.not(this).removeClass("active-btn");
	})

	slideBtn.on('click', function() {
    $(this)
      .closest(".slider__section").find('.slide__img')
      .fadeOut(500)
      .delay(500)
      .eq($(this)
      .index())
      .fadeIn(500)
  });	
									//SLIDER-WORKS

	let btnNext = $(".latest-works__btn-next"),
		btnPrev = $(".latest-works__btn-prev"),
		workItems = $(".works-slider__items-inner"),
		workItem = $(".works-slider__item"),
		count = 0;
	let margin = workItem.eq(1).css("margin-left"),
		width = workItem.css("width"),
		mWidth = parseInt(margin) + parseInt(width),
		MWidth = mWidth + "px";

		btnNext.on("click", function(){
			if(count >= 3) {
				return;
			} else {
				workItems.animate({
					"margin-left":  "-=" + MWidth
				}, 500);
				console.log()
				
			count++;
			}
		})

		btnPrev.on("click", function(){
			if(count <= 0) {
				return;
			} else {
				workItems.animate({
					"margin-left": "+=" + MWidth
				}, 500);
			count--;
			}
		})


	 ///// WORKS PREVIEW

	 let innerItems = $(".works-slider__item"),
	 	 innerLinks = $(".works-slider__inner-item");

	 	 innerItems.hover(
	 	 	function(){
	 	 		$(this)
	 	 		.find(innerLinks)
	 	 		.css("display", "flex");
	 	 }, function(){
	 	 		$(this)
	 	 		.find(innerLinks)
	 	 		.css("display", "none");
	 	 })
	})