(function($){
	$(document).foundation();

	// Orbit testimonial
    // var testimonial = new Foundation.Orbit($('#slideTestimonials'), {
    // 	containerClass: 'slide-container',
    // 	slideClass: 'item',
    // 	prevClass: 'item-previous',
    // 	nextClass: 'item-next',
    // 	bullets: true,
    // 	boxOfBullets: 'o-bullets'
    // });

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

// encode emails
function convertMailAddress() {
	var emailElements;
  		if (document.getElementsByClassName)
    		emailElements = document.getElementsByClassName("email");
  		else
    		emailElements = document.getElementsByClassNameForOldies("email");
  			var elementContent, replaceContent;

  			for (var i=0; i<emailElements.length; i++) {
    			elementContent = emailElements[i].innerHTML;
    			replaceContent = elementContent.replace(" [at] ", "&#64;");
    			emailElements[i].innerHTML =
      			"<a href=\"mailto:" + replaceContent + "\">" + replaceContent + "</a>";
  			}
}

// http://javascript.about.com/library/bldom08.htm
document.getElementsByClassNameForOldies = function(cl) {
  	var
  		retnode = [],
  		myclass = new RegExp('\\b'+cl+'\\b'),
  		elem    = this.getElementsByTagName('*');

  	for (var i = 0; i < elem.length; i++) {
    	var classes = elem[i].className;
    	if (myclass.test(classes)) retnode.push(elem[i]);
  	}
  	return retnode;
};

window.onload = convertMailAddress;

