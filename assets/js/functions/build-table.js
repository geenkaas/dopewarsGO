//build-table.js
//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor#31180444

'use strict';

function buildTable() {
	
	dopelist.forEach(function(dope) {
	    $('[js-dope-table-content]').append('\
	        <tr js-dope data-js-dope="'+ dope.name +'">\
	            <td>'+dope.name+'</td>\
	            <td js-dope-amount>'+ dope.amount +'</td>\
	            <td js-dope-sell><button class="button button--trade button--sell"></button></td>\
	            <td js-dope-price></td>\
	            <td js-dope-buy><button class="button button--trade button--buy"></button></td>\
	        </tr>\
	    ')
	});
	
	disableButtons();

}