// Dope prices

'use strict';

var dopelist = [];

// Dope constructor function
function Dope(name, priceMin, priceMax, amount) {
    this.name = name
    this.priceMin = priceMin;
    this.priceMax = priceMax;
    this.amount = amount;
    this.priceCurr = function(multiplier) {
        if (multiplier < 1) {
            priceMin = priceMin / 2;
            priceMax = priceMax / 2;
        } else if (multiplier === 1) {
            priceMin = priceMin;
            priceMax = priceMax;
        } else if (multiplier > 1) {
            priceMin = priceMax - priceMin;
            priceMax = priceMax + priceMin;
        }

        var dopeRandom = Math.random();
        this.random = dopeRandom;
        return Math.floor(((priceMax - priceMin) + 1) * dopeRandom + priceMin);
    }
    //https://jsfiddle.net/Panomosh/8bpmrso1/
    dopelist.push(this);
}

// Dope object instance
var dope1 = new Dope('Acid', 1000,4400, 0),
    dope2 = new Dope('Cocaine', 15000, 29000, 0),
    dope3 = new Dope('Hashish', 480, 1280, 0),
    dope4 = new Dope('Heroin', 5500, 13000, 0),
    dope5 = new Dope('Ludes', 11, 60, 0),
    dope6 = new Dope('MDA', 1500, 4400, 0),
    dope7 = new Dope('Opium', 540, 1250, 0),
    dope8 = new Dope('PCP', 1000, 2500, 0),
    dope9 = new Dope('Peyote', 220, 700, 0),
    dope10 = new Dope('Shrooms', 630, 1300, 0),
    dope11 = new Dope('Speed', 90, 250, 0),
    dope12 = new Dope('Weed', 315, 890, 0);

//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor#31180444
dopelist.forEach(function(dope) {
    $('[js-dope-table-content]').append('\
        <tr js-dope data-js-dope="'+ dope.name +'">\
            <td>'+dope.name+'</td>\
            <td js-dope-amount>'+ dope.amount +'</td>\
            <td js-dope-sell><button class="button button--trade button--sell">-</button></td>\
            <td js-dope-price></td>\
            <td js-dope-buy><button class="button button--trade button--buy">+</button></td>\
        </tr>\
    ')
});

setRandomPrices();

function setRandomPrices() {
    dopelist.forEach(function(dope) {

        var multiplier = 1;
        updateDopePrice(dope, multiplier);

    });
};

function updateDopePrice(dope, multiplier) {
    
    var dopePriceNew = dope.priceCurr(multiplier);
    var dopeChange = dope.random;
    // Set the price
    //dope.html(price);
    var dopeToSet = $('[data-js-dope="'+ dope.name +'"]').find('[js-dope-price]');
    dopeToSet.html(dopePriceNew);

    var dopeRGB = 'rgb(255,255,255)';
    var colorMultiplier = 255;
    if (dopeChange > 0.5) {
        var dopeRed = Math.floor(255 - ((dopeChange - 0.5) * colorMultiplier));
        dopeRGB = 'rgb(255,'+dopeRed+','+dopeRed+')';
    } else {
        var dopeGreen = Math.floor(255 - ((0.5 - dopeChange) * colorMultiplier));
        dopeRGB = 'rgb('+dopeGreen+',255,'+dopeGreen+')';
    }

    dopeToSet.css('color', dopeRGB);
    updateButtons();
};

function updateButtons() {

    dopelist.forEach(function(dope) {


        var dopeCurr = $('[data-js-dope="'+dope.name+'"]');
        //console.log(dope);

        var dopeAmount = parseInt(dopeCurr.find('[js-dope-amount]').html());
        var buttonSell = dopeCurr.find('[js-dope-sell]').find('.button--trade');

        if (dopeAmount <= 0) {
            //console.log('sold and none left');
            buttonSell.addClass('button--disabled');
        } else {
            //console.log('sold and more in inv');
            buttonSell.removeClass('button--disabled');
        }

        var dopeCurrPrice = parseInt(dopeCurr.find('[js-dope-price]').html());
        var buttonBuy = dopeCurr.find('[js-dope-buy]').find('.button--trade');
    
        if (dopeCurrPrice > player.cash) {
            //console.log('bought and no more money left');
            buttonBuy.addClass('button--disabled');
        } else {
            //console.log('bought and ready for more');
            buttonBuy.removeClass('button--disabled');
        }

        var invCurr = $('[js-inv-curr]').html();
        var invMax = $('[js-inv-max]').html();
        var invFree = invMax - invCurr;
        if (invFree <= 0) {
            buttonBuy.addClass('button--disabled');
        }

    });
}

$.event.special.tap.tapholdThreshold = 400;
$('.button--trade').on('tap', function() {
    buttonTrade($(this), 'tap');
}).on('taphold', function() {
    buttonTrade($(this), 'taphold');
});

function buttonTrade(thisButton, action) {

    // Don't do anything when buttons are disabled
    if (!thisButton.hasClass('button--disabled')) {

        var clickRow = thisButton.closest('tr');
        var clickDope = clickRow.attr('data-js-dope');
        var cashTrade = parseInt(clickRow.find('[js-dope-price]').html());

        var amount;

        // Check whether user pressed or held button
        if (action === 'tap') {
            if (thisButton.hasClass('button--buy')) {
                amount = 1;
            } else {
                amount = -1;
            }
        } else {
            if (thisButton.hasClass('button--buy')) {
                amount = Math.floor(player.cash / cashTrade);
            } else {
                amount = clickRow.find('[js-dope-amount]').html() * - 1;
            }
        }

        // Do a check that you cannot buy or sell more that your inventory allows
        var invCurr = player.invCurr;
        var invMax = player.invMax;
        var invFree = invMax - invCurr;
        if (amount > invFree) {
            amount = invFree;
        }

        //var cashAfterTrade = ( * -1);
        player.cash -= cashTrade * amount;
        updateStats();
        updateDopeAmount(clickDope, amount);
    }
}

function updateDopeAmount(whichDope, changeAmount) {
    //console.log(whichDope + ' ' + changeAmount);
    for (var dope in dopelist) {
        if (dopelist[dope].name == whichDope) {
            dopelist[dope].amount += changeAmount;
            $('[data-js-dope="'+ whichDope +'"]').find('[js-dope-amount]').html(dopelist[dope].amount);
        }
    }
    //updateInv(changeAmount);
    player.invCurr += changeAmount
    updateStats();
    updateButtons();
}

function updateDay() {
    if (parseInt($('[js-day-curr]').html()) == parseInt($('[js-day-max]').html())) {

        dopelist.forEach(function(dope) {
            var dopeCurr = $('[data-js-dope="'+ dope.name +'"]');
            var dopeAmount = parseInt(dopeCurr.find('[js-dope-amount]').html());
            if (dopeAmount > 0) {

                var cashLeftOver = parseInt(dopeCurr.find('[js-dope-price]').html());
                var cashTemp = (cashLeftOver * dopeAmount);
                updateCash(cashTemp);
                updateDopeAmount(dopeCurr, dopeAmount);
                updateButtons();
            }
        })
        removeSlide($(this).closest('.c-slide'));

        alert(
            'Your final score is: ' + $('[js-cash]').find('span').html()
        );
        window.location.reload(true);
    } else {
        $('[js-day-curr]').html(parseInt($('[js-day-curr]').html()) + 1);
        setRandomPrices();
        randomEvents();
    }
}
