// buttons.js
// General button funtionality

function restartButtons() {
    $('[js-game-restart]').on('tap', function() {
        //console.log('dead');
        window.location.reload(true);
    });
};

function modalButtons() {
    $('[js-modal-close]').on('tap', function() {
        $(this).closest('.c-modal').fadeOut(200, function() { 
        	$(this).remove();
        });
    });
};

$('[js-button-jet]').on('tap', function() {
    updateDay();
});
