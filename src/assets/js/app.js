(function($){
	$(document).foundation();

	// Orbit testimonial
    var testimonial = new Foundation.Orbit($('#slideTestimonials'), {
    	containerClass: 'slide-container',
    	slideClass: 'item',
    	prevClass: 'item-previous',
    	nextClass: 'item-next',
    	bullets: true,
    	boxOfBullets: 'o-bullets'
    });

    // hamburger
    function hamburgerNav() {
    	var $hb = $('.hamburger');
    	$hb.on('click', function(e){
    		e.preventDefault();
    		$(this).toggleClass('is-active');
    	});
    }
    hamburgerNav();

    // Open-Close Primary Navigation
	$('.hamburger').on('click', function(){
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden nav-open');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden nav-open');
			});	
		}
	});


    // Header
    function stickyHeader() {
	    $(window).scroll(function() {
	    	var $header = $('.c-header-container ');
	        if ($(this).scrollTop() >= 10) {
	            $header.addClass('sticky');
	        }
	        else {
	            $header.removeClass('sticky');
	        }
	    });

    }
    stickyHeader();

    // Form Labels
	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();

		inputFields.each(function(){
			var singleInput = $(this);
			//check if user is filling one of the form fields 
			checkVal(singleInput);
			singleInput.on('change keyup', function(){
				checkVal(singleInput);	
			});
		});
	}
	floatLabels();

	function checkVal(inputField) {
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
	}
})(jQuery);