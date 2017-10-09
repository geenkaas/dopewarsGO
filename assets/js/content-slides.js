// Content slides

'use strict';

$('[js-slide-button]').each(function() {
	$(this).on('click', function() {

		var slideTarget = $(this).attr('js-slide-target');
		$('[js-slide]').closest('.c-article--main').removeClass('js-slide--remove')
		$(this).closest('.c-article--main').removeClass('js-slide--active').addClass('js-slide--remove');
		$('[js-slide__' + slideTarget + ']').closest('.c-article--main').addClass('js-slide--active');
	});
});
