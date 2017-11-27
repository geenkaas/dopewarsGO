// Content slides

// 'use strict';

function slideButtons() {

    $('[data-slide-target]').each(function() {
        $(this).on('tap', function() {
            // Remove all sliders that went left (placing them back tot he rigth)
            $('.c-slide').removeClass('c-slide--remove');
            // Find the target slide
            var slideTarget = $(this).attr('data-slide-target');
            // Find targetted slide and move it on
            $('[data-slide__' + slideTarget + ']').addClass('c-slide--active');
            // Toggle current slide to move to the left
            $(this).closest('.c-slide').removeClass('c-slide--active').addClass('c-slide--remove');

            // Show header with score
            $('.s-site__masthead').addClass('lowered');
        });
    });

}

function removeSlide(slide) {
    slide.removeClass('c-slide--active').addClass('c-slide--remove');
}