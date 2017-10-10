// Dope prices

'use strict';

var cashStart = 2000;
var cashCurr = cashStart;
function updateCash(cashNew) {
    $('[js-cash]').find('span').html(cashNew);
    cashCurr = parseInt($('[js-cash]').find('span').html());
    console.log('Variable cashCurr is updated, new cashCurr = ' + cashCurr);
};
updateCash(cashStart);

var dopelist = [];

// Dope constructor function
function Dope(name, priceMin, priceMax, amount) {
    this.name = name
    this.priceMin = priceMin;
    this.priceMax = priceMax;
    this.amount = amount;
    this.priceCurr = function() {
        return Math.floor(((priceMax - priceMin) + 1) * Math.random() + priceMin);
    };
    //https://jsfiddle.net/Panomosh/8bpmrso1/
    dopelist.push(this);
};

// Dope object instance
var dope1 = new Dope('Acid', 1000,4400, 0),
    dope2 = new Dope('Cocaine', 15000, 29000, 1),
    dope3 = new Dope('Hashish', 480, 1280, 0),
    dope4 = new Dope('Heroin', 5500, 13000, 0),
    dope5 = new Dope('Ludes', 11, 60, 9),
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
            <td><button class="button button--trade button--sell">-</button></td>\
            <td>'+dope.name+'</td>\
            <td js-dope-price>'+ dope.priceCurr() +'</td>\
            <td js-dope-amount>'+ dope.amount +'</td>\
            <td><button class="button button--trade button--buy">+</button></td>\
        </tr>\
    ');
});

$('[js-button-scootch]').on('click', function() {
    setRandomPrices();
});

function setRandomPrices() {
    dopelist.forEach(function(dope) {
        $('[data-js-dope="'+dope.name+'"]').find('[js-dope-price]').html(dope.priceCurr());
    });
};

function updateButtons() {
    dopelist.forEach(function(dope) {
        if (dope.amount <= 0) {
            $('[data-js-dope="'+dope.name+'"]').find('.button--sell').addClass('button--disabled');
        } else {
            $('[data-js-dope="'+dope.name+'"]').find('.button--sell').removeClass('button--disabled');
        }
        var currDopePrice = parseInt($('[data-js-dope="'+dope.name+'"]').find('[js-dope-price]').html());
        if (currDopePrice > cashCurr) {
            $('[data-js-dope="'+dope.name+'"]').find('.button--buy').addClass('button--disabled');
        } else {
            $('[data-js-dope="'+dope.name+'"]').find('.button--buy').removeClass('button--disabled');
        }
    });
    buttonClick();
};

updateButtons();

function buttonClick() {
    $('.button--trade').each(function() {
        var clickRow = $(this).closest('tr');
        var clickDope = clickRow.attr('data-js-dope');
        if ($(this).hasClass('button--buy')) {
            var amount = 1;
        } else {
            var amount = -1;
        };
        $(this).not('.button--disabled').on('click', function() {
            var cashTrade = parseInt(clickRow.find('[js-dope-price]').html());
            var cashTemp = cashCurr - (cashTrade * amount);
            updateCash(cashTemp);
            updateDopeAmount(clickDope, amount);
        });
    });
};


$('.button--disabled').on('click', function(e) {
    e.preventDefault;
    e.stopPropagation;
});

function updateDopeAmount(whichDope, changeAmount) {
    //console.log(whichDope + ' ' + changeAmount);
    for (var s in dopelist) {
        if (dopelist[s].name == whichDope) {
            dopelist[s].amount += changeAmount;
            $('[data-js-dope="'+ whichDope +'"]').find('[js-dope-amount]').html(dopelist[s].amount);
        }
    }
};
