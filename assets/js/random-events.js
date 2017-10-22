// random-events.js
// Scripts that initiate random events, called from dope-prices.js

'use strict';

// Create event list
var eventList = [];
var eventChance = 0;
var eventRNG = Math.random();

// Dope constructor function
function Event(name, chance) {
    this.name = name
    this.chance = chance;
    //https://jsfiddle.net/Panomosh/8bpmrso1/
    eventList.push(this);
}
// event object instance
var event1 = new Event('oldLady', 0),
    event2 = new Event('officerHardass', 99910),
    event3 = new Event('dopeLow', 20),
    event4 = new Event('dopeHigh', 20),
    event5 = new Event('dopeFound', 20),
    event7 = new Event('pennyFound', 20),
    event6 = new Event('findCoat', 0),
    event6 = new Event('findGun', 10);

function getEventChange(Event, total) {
// Total value could be calculated within function or own function.
//  console.log(Event);
//  console.log("getEventChange: " + Event.chance*(100/total));
    return Event.chance * (100 / total);
};

function getRandomEvent(eventMap) {
    //console.log(eventRNG * 100);
    for (var i = 0; i < eventMap.length; i++) {
        //console.log(eventMap[i].chance >= eventRNG*100);
        if (eventMap[i].chance >= eventRNG * 100) {
            //console.log("returning " + eventMap[i].name);
            eventRNG = Math.random();
            return eventMap[i];
        }
    }
};

var eventTotal = 0;
eventList.forEach(function(event) {
    eventTotal += event.chance;
});

var eventMap = [];
var range = 0;
eventList.forEach(function(event) {
    range += getEventChange(event, eventTotal);
    eventMap.push(new Event(event.name, range));
    //console.log(event.name + " chance: " + getEventChange(event, eventTotal) + '%. Range <= ' + range);
});
//console.log(eventMap);

function randomEvents() {
    var randomEventChance = Math.random();
    var randomChanceTrigger = 1;
    if (randomEventChance >= 1 - randomChanceTrigger) {
        randomChanceFire();
    }
};

// Get a simple list with all dope
// Dope list constructor function
function dopeArray(name) {
    this.name = name
}

var dopeMap = [];
dopelist.forEach(function(dope) {
    dopeMap.push(new dopeArray(dope.name));
    //console.log(event.name + " chance: " + getEventChange(event, eventTotal) + '%. Range <= ' + range);
});

function randomChanceFire() {
    var randomEvent = getRandomEvent(eventMap);
    //console.log(randomEvent);
    window[randomEvent.name]();
};

// General function to select one random dope
// https://stackoverflow.com/questions/45950245/jquery-pick-a-random-property-from-an-object
var randomDope = function(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

function oldLady() {
    alert('oldLady');
};

function dopeHigh() {
    var eventDope = randomDope(dopelist);

    var eventRandom = Math.random();
    var dopeText;
    if (eventRandom > 0.33) {
        dopeText = 'Addicts are buying '+ eventDope.name +' for ridiculous prices!';
    } else if (eventRandom > 0.66) {
        dopeText = 'Cops made a big '+ eventDope.name +' bust! Prices are outrageous!';
    } else {
        dopeText = 'The police raided a big '+ eventDope.name +' warehouse, prices have skyrocketed!';
    }

    var eventContent = ('\
        <h2>Drug Bust!</h2>\
        <p>'+ dopeText +'</p>\
        <div class="button" js-modal-close>Alright</div>\
    ');
    createModal(eventContent);
    updateDopePrice(eventDope, 5);
};

function dopeLow() {
    var eventDope = randomDope(dopelist);

    var dopeText;
    if (eventDope === 'Hashish') {
        dopeText = 'The Marrakesh Express has arrived!'
    } else {
        dopeText = 'Rival gangs raided some pharmacies and cheap '+ eventDope.name +' has flooded the market'
    }

    var eventContent = ('\
        <h2>Market flooded!</h2>\
        <p>'+ dopeText +'</p>\
        <div class="button" js-modal-close>Cool</div>\
    ');
    createModal(eventContent);

    updateDopePrice(eventDope, 0.1)
};

function findCoat() {
    alert('findCoat');
};


function findGun() {
    var gunPrice = 100;
    if (player.cash >= gunPrice) {
        var eventContent = ('\
            <h2>Carrying</h2>\
            <p>Do you want to buy a gun for $'+ gunPrice +'?</p>\
            <div class="c-button-group c-gun__controls">\
                <div class="button button--inline" js-gun-buy>Yeah!</div>\
                <div class="button button--inline" js-modal-close>Nah</div>\
            </div>\
        ');  
    } else {
        var eventContent = ('\
            <h2>Low on cash</h2>\
            <p>Someone offers to sell you a bigger gun for $'+ gunPrice +' but you are broke!</p>\
            <div class="c-gun__controls">\
                <div class="button" js-modal-close>Bummer!</div>\
            </div>\
        ');
    }
    createModal(eventContent);
    buyGunButton();

    function buyGunButton() {
        $('[js-gun-buy]').on('tap', function() {
            player.cash -= 100;
            player.invCurr += 5;
            player.gun += 1;
            updateStats();
            $(this).closest('.c-modal').fadeOut(200, function() { $(this).remove(); });
        });
    };
};

function pennyFound() {
    var eventAmount = Math.floor(Math.random() * 100) + 1;

    var eventRandom = Math.random();
    var dopeText;
    if (eventRandom > 0.33) {
        dopeText = 'Someone left some cash in an alley, you find $'+ eventAmount +'.';
    } else if (eventRandom > 0.66) {
        dopeText = 'Your auntie May died and she left you $'+ eventAmount +' inheritance.';
    } else {
        dopeText = 'The cashier made a mistake on your change, you keep $'+ eventAmount +' extra.';
    }
    
    var eventContent = ('\
        <h2>Free monies!</h2>\
        <p>'+ dopeText +'</p>\
        <div class="button" js-modal-close>Rad!</div>\
    ');
    createModal(eventContent);
    updateCash(eventAmount);
};

function dopeFound() {
    var eventDope = randomDope(dopelist).name;

    var eventAmountMax = 5;
    var eventAmount = Math.floor(Math.random() * eventAmountMax) + 1;

    var eventRandom = Math.random();
    var dopeText;
    if (eventRandom > 0.33) {
        dopeText = 'You find '+ eventAmount +' ' + eventDope +' on the subway.';
    } else if (eventRandom > 0.66) {
        dopeText = 'An old friend drops by and he gives you '+ eventAmount +' '+ eventDope +'.';
    } else {
        dopeText = 'In the back of your pocket you find '+ eventAmount +' '+ eventDope +'!';
    }

    // Prevent expensive dope from lying around.
    if (!((eventDope == 'Cocaine') || (eventDope == 'Heroin'))) {

        var eventContent = ('\
            <h2>Free Dope!</h2>\
            <p>'+ dopeText +'</p>\
            <div class="button" js-modal-close>Score!</div>\
        ');
        createModal(eventContent);
        updateDopeAmount(eventDope, eventAmount);
    }
};