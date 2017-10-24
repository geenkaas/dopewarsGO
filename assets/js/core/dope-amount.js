// dope-amount.js

'use strict';

function updateDopeAmount(whichDope, changeAmount) {
    // console.log(whichDope + ' ' + changeAmount);
    for (var dope in dopelist) {
        //console.log(dope);
        if (dopelist[dope].name == whichDope) {
            dopelist[dope].amount += changeAmount;
            $('[data-js-dope="'+ whichDope +'"]').find('[js-dope-amount]').html(dopelist[dope].amount);
        }
    }
    //updateInv(changeAmount);
    player.invCurr += changeAmount;
    updateStats();
    disableButtons();
}