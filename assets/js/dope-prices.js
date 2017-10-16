// Dope prices

'use strict';

var cashStart = 2000;
var cashCurr = cashStart;
function updateCash(cashNew) {
    $('[js-cash]').find('span').html(cashNew);
    cashCurr = parseInt($('[js-cash]').find('span').html());
    //console.log('Variable cashCurr is updated, new cashCurr = ' + cashCurr);
}
updateCash(cashStart);

var dopelist = [];

// Dope constructor function
function Dope(name, priceMin, priceMax, amount) {
    this.name = name
    this.priceMin = priceMin;
    this.priceMax = priceMax;
    this.amount = amount;
    this.priceCurr = function() {
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
})

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
        //console.log('dopeCurrPrice: ' + dopeCurrPrice + ' cashCurr: ' + cashCurr);
        if (dopeCurrPrice > cashCurr) {
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

    })
}

$('.button--trade').on('tap', function() {
    buttonTrade('tap');
}).on('taphold', function() {
    buttonTrade('taphold');
})

function buttonTrade(action) {

    var whichButton = $(this);
    //.log(whichButton);

    if (!whichButton.hasClass('button--disabled')) {

        var clickRow = $(this).closest('tr');
        var clickDope = clickRow.attr('data-js-dope');
        var cashTrade = parseInt(clickRow.find('[js-dope-price]').html());

        var amount;

        if (action === 'tap') {
            if ($(this).hasClass('button--buy')) {
                amount = 1;
            } else {
                amount = -1;
            }
        } else {
            if ($(this).hasClass('button--buy')) {
                amount = Math.floor(cashCurr / cashTrade);
            } else {
                amount = clickRow.find('[js-dope-amount]').html() * -1;
            }
        }

        var invCurr = $('[js-inv-curr]').html();
        var invMax = $('[js-inv-max]').html();
        var invFree = invMax - invCurr;

        if (amount > invFree) {
            amount = invFree;
        }

        //console.log(amount);

        var cashTemp = cashCurr - (cashTrade * amount);
        updateCash(cashTemp);
        updateDopeAmount(clickDope, amount);
        updateButtons();
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
    updateInv(changeAmount);
}

function updateInv(amount) {
    console.log(amount);
    var invCurr = parseInt($('[js-inv-curr]').html());
    var invNew = invCurr + amount;
    $('[js-inv-curr]').html(invNew);
}

$('[js-button-scootch]').on('tap', function() {x
    updateDay();
})

function updateDay() {
    if (parseInt($('[js-day-curr]').html()) == parseInt($('[js-day-max]').html())) {
        alert(
            'Your final score is: ' + $('[js-cash]').find('span').html()
        );
        window.location.reload(true);
    } else {
        $('[js-day-curr]').html(parseInt($('[js-day-curr]').html())+1);
        setRandomPrices();
    }
}

function setRandomPrices() {
    dopelist.forEach(function(dope) {

        var dopePriceNew = $('[data-js-dope="'+dope.name+'"]').find('[js-dope-price]');
        dopePriceNew.html(dope.priceCurr());

        //console.log(dope.name + '' + dope.random);
        var dopeRGB = 'rgb(255,255,255)';
        var colorMultiplier = 255;
        if (dope.random > 0.5) {
            var dopeRed = Math.floor(255 - ((dope.random - 0.5) * colorMultiplier));
            dopeRGB = 'rgb(255,'+dopeRed+','+dopeRed+')';
        } else {
            var dopeGreen = Math.floor(255 - ((0.5 - dope.random) * colorMultiplier));
            dopeRGB = 'rgb('+dopeGreen+',255,'+dopeGreen+')';
        }
        //console.log(dopeRGB);

        dopePriceNew.css('color', dopeRGB);

    })
    updateButtons();
}
setRandomPrices();