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
    event2 = new Event('officerHardass', 0),
    event3 = new Event('dopeLow', 20),
    event4 = new Event('dopeHigh', 20),
    event5 = new Event('dopeFound', 20),
    event7 = new Event('pennyFound', 20),
    event6 = new Event('findCoat', 0),
    event6 = new Event('findGun', 0);

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
    var randomChanceTrigger = 0.5;
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

function officerHardass() {

    var eventContent = ('\
        <h2>Shit, the pigs!</h2>\
        <p>Officer Hardass and his deputies are chasing you!</p>\
        <div class="c-health--hardass">Hardass: <span>100</span></div>\
        <div class="c-health--you">You: <span>100</span></div>\
        <p>what do you do?</p>\
        <div class="button button--inline" js-hardass-run>Run</div>\
        <div class="button button--inline" js-hardass-fight>Fight</div>\
        <div class="button button--inline" js-hardass-bribe>Bribe</div>\
    ');

    createModal(eventContent);
};

function dopeHigh() {
    var eventDope = randomDope(dopelist);

    var eventContent = ('\
        <h2>Drug Bust!</h2>\
        <p>Cops made a big '+ eventDope.name +' bust, prices are outrageous!</p>\
        <div class="button" js-modal-close>Alright</div>\
    ');
    createModal(eventContent);

    updateDopePrice(eventDope, 5);
};

function dopeLow() {
    var eventDope = randomDope(dopelist);

    var eventContent = ('\
        <h2>Market flooded!</h2>\
        <p>Rival gangs raided some pharmacies and cheap '+ eventDope.name +' has flooded the market</p>\
        <div class="button" js-modal-close>Cool</div>\
    ');
    createModal(eventContent);

    updateDopePrice(eventDope, 0.1)};

function findCoat() {
    alert('findCoat');
};

function pennyFound() {
    var eventAmount = Math.floor(Math.random() * 100) + 1;

    var eventContent = ('\
        <h2>Free monies!</h2>\
        <p>Someone left some cash in an alley, you find $'+ eventAmount +'.</p>\
        <div class="button" js-modal-close>Rad!</div>\
    ');
    createModal(eventContent);
    updateCash(eventAmount);
};

function dopeFound() {
    var eventDope = randomDope(dopelist).name;
    // Prevent expensive dope from lying around.
    if (!((eventDope == 'Cocaine') || (eventDope == 'Heroin'))) {

        var eventAmountMax = 5;
        var eventAmount = Math.floor(Math.random() * eventAmountMax) + 1;

        var eventContent = ('\
            <h2>Free Dope!</h2>\
            <p>You find '+ eventAmount +' ' + eventDope +' on the subway.</p>\
            <div class="button" js-modal-close>Score!</div>\
        ');
        createModal(eventContent);
        updateDopeAmount(eventDope, eventAmount);
    }
};