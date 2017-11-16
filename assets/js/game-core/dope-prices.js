// dope-prices.js

'use strict';

function setRandomPrices() {
    dopelist.forEach(function(dope) {
        updateDopePrice(dope, 1);
    });
}

function updateDopePrice(dope, multiplier) {

    var dopePriceNew = dope.priceCurr(multiplier);
    var dopeToSet = $('[data-dope="'+ dope.name +'"]').find('[data-dope-price]');
    dopeToSet.html(dopePriceNew);

    if (dopePriceNew < dope.priceMin ) {
        //console.log('Price below min');
        dopePriceNew = dope.priceMin;
    } else if (dopePriceNew > dope.priceMax) {
        //console.log('Price above max');
        dopePriceNew = dope.priceMax;
    }
    var dopeValue = (dopePriceNew - dope.priceMin) / (dope.priceMax - dope.priceMin);
    //console.log(dope.name+' '+dope.priceMin+' '+dope.random+' '+dopePriceNew+' '+dope.priceMax+' '+dopeValue);

    var dopeRGB = 'rgb(255,255,255)';
    var colorMultiplier = 255 * 2;
    if (dopeValue > 0.5) {
        var dopeRed = Math.floor(255 - ((dopeValue - 0.5) * colorMultiplier));
        dopeRGB = 'rgb(255,'+dopeRed+','+dopeRed+')';
    } else {
        var dopeGreen = Math.floor(255 - ((0.5 - dopeValue) * colorMultiplier));
        dopeRGB = 'rgb('+dopeGreen+',255,'+dopeGreen+')';
    }

    dopeToSet.css('color', dopeRGB);
    disableButtons();
}