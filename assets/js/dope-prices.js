// Dope prices

'use strict';

var cash = 2000;

var dopelist = {
    dopename: [
        {
            'name': 'ludes',
            'minPrice': 11,
            'maxPrice': 60,
            'amount': 0
        },
        {
            'name': 'peyote',
            'minPrice': 100,
            'maxPrice': 700,
            'amount': 0
        },
        {
            'name': 'shrooms',
            'minPrice': 600,
            'maxPrice': 1400,
            'amount': 0
        },
        {
            'name': 'heroin',
            'minPrice': 1200,
            'maxPrice': 4000,
            'amount': 0
        }
    ]
};

function updateCash() {
    $('[js-cash]').find('span').html(cash);
};
updateCash();

dopelist.dopename.forEach(function(dopeIteration) {
    console.log(dopeIteration.name);
    var randomPrice = Math.floor(Math.random() * ((dopeIteration.maxPrice - dopeIteration.minPrice)) + 1);

    var dopeTable = $('[js-dope-table-content]');
    dopeTable.append('\
        <tr js-dope js-dope-'+dopeIteration.name+'>\
            <td><button class="button button--trade button--buy">+</button></td>\
            <td>'+dopeIteration.name+'</td>\
            <td js-dope-price>'+randomPrice+'</td>\
            <td js-dope-amount></td>\
            <td><button class="button button--trade button--sell">-</button></td>\
        </tr>\
    ');
    $('[js-dope-amount]').html(dopeIteration.amount);
});

$('.button--buy').each(function() {
    var myRow = $(this).closest('tr');
    if (parseInt(myRow.find('[js-dope-price]').html()) > 500) {
        myRow.find('.button--buy').addClass('button--disabled');
    } else {
        $(this).on('click', function() {
            var cashTrade = parseInt(myRow.find('[js-dope-price]').html());
            //console.log(cashTrade);
            cash = cash - cashTrade;
            $('[js-cash]').find('span').html(cash);
            updateCash();
            //updateAmount();
        });
    }
});

$('.button--sell').each(function() {
    var myRow = $(this).closest('tr');
    if (parseInt(myRow.find('[js-dope-amount]').html()) <= 0) {
        myRow.find('.button--sell').addClass('button--disabled');
    } else {
        $(this).on('click', function() {
            var cashTrade = parseInt(myRow.find('[js-dope-price]').html());
            //console.log(cashTrade);
            cash = cash + cashTrade;
            updateCash();
            //updateAmount();
        });
    }
});

$('.button--disabled').on('click', function(e) {
    e.preventDefault;
});