;(function($){
	
	$(window).bind("scroll", function() {

		var topBar = $(".top-bar");
		
		var scrollOff = $(".position").offset().top - 50;
		
		if ($(window).scrollTop() > scrollOff) {
			
			topBar.addClass("top-bar-active");
			$(".subscrib-form").addClass("animated fadeInUp").removeClass("hidden");
			$(".f1").addClass("animated fadeInLeft").removeClass("hidden");
			$(".f2").addClass("animated fadeInRight").removeClass("hidden");
			$(".promo").removeClass("fadeInUp").addClass("fadeOutDown");
			$(".youtube").addClass("animated fadeInUp").removeClass("hidden");
		} else {
			
			topBar.removeClass("top-bar-active");
			$(".subscrib-form").removeClass('fadeInUp').addClass('hidden');
			$('.f1').removeClass('fadeInLeft').addClass('hidden');
			$('.f2').removeClass('fadeInRight').addClass('hidden');
			$('.promo').removeClass('fadeOutDown').addClass('fadeInDown');
			$(".youtube").removeClass("animated fadeInUp").addClass("hidden");
			
		}
		
	});
	
	// single content
	var $window = $(window).height();
	var $footer = $('.footer').outerHeight();
	$('.single-wrapper').css("min-height", $window - $footer + "px");
	
	//tooltips
	$('.social a').dcTip({background: "#3B8CD3"});
	//animations
	$('.promo').addClass('animated fadeInUp');
	
	
	/*responsive menu */
	var menu = $('.top-bar .list-inline'),
		act = $('.menu-action');
		
	$(act).on("click", function(e){
		var $this = $(this),
			open  = $this.hasClass('res-open');
			
		if(open){
			$this.addClass('res-close');
			$this.removeClass('res-open');
			$(menu).stop().slideDown("fast");
			$this.text('x');
		}else{
			$this.addClass('res-open');
			$this.removeClass('res-close');
			$(menu).stop().slideUp("fast");
			$this.text('+');
		}
		
		
		e.preventDefault();
	});
	
	$(window).resize(function() {
		var vW = $(window).width();
		if (vW > 768) {
			$(menu).css('display', 'block');
			$(act).removeClass('res-close').addClass('res-open').text('+');
		}else {
			$(menu).css('display', 'none');
		}
	});
	
	
})(jQuery);