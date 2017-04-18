(function($){
	$(document).foundation();

	// Orbit testimonial
    var testimonial = new Foundation.Orbit($('#slideTestimonials'), {
    	containerClass: 'slide-container',
    	slideClass: 'item',
    	prevClass: 'item-previous',
    	nextClass: 'item-next',
    	bullets: true
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
})(jQuery);