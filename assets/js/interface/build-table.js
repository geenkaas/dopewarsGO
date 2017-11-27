//build-table.js
//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor#31180444

// 'use strict';

function buildTable() {

    dopelist.forEach(function(dope) {
        $('[data-dope-table-content]').append('\
            <tr data-dope="'+ dope.name +'">\
                <td>'+dope.name+'</td>\
                <td data-dope-amount>'+ dope.amount +'</td>\
                <td data-dope-sell><button class="button button--trade button--sell"></button></td>\
                <td data-dope-price></td>\
                <td data-dope-buy><button class="button button--trade button--buy"></button></td>\
            </tr>\
        ');
    });

    buttonTradeInit();
}