// Content slides

'use strict';

$('[js-slide-button]').each(function() {
	$(this).on('click', function() {
		// Remove all sliders that went left (placing them back tot he rigth)
		$('.c-slide').removeClass('c-slide--remove');
		// Find the target slide
		var slideTarget = $(this).attr('js-slide-target');
		// Find targetted slide and move it on
		$('[js-slide__' + slideTarget + ']').addClass('c-slide--active');
		// Toggle current slide to move to the left
		$(this).closest('.c-slide').removeClass('c-slide--active').addClass('c-slide--remove');
		// Update screen Height
	    initScreen();
	});
});

function removeSlide(slide) {
	slide.removeClass('c-slide--active').addClass('c-slide--remove');
}
