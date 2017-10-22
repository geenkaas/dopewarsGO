// buttons.js
// General button funtionality

function restartButtons() {
    $('[js-game-restart]').on('tap', function() {
        console.log('dead');
        window.location.reload(true);
    });
};

function modalButtons() {
    $('.c-modal__close, [js-modal-close]').on('tap', function() {
        $(this).closest('.c-modal').fadeOut(200, function() { $(this).remove(); });
    });
};
