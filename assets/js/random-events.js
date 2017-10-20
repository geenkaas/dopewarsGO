// random-events.js
// Scripts for handling random events.

'use scrict'

// Create event list
var eventList = [];
var eventChance = 0;
var eventRNG = Math.random();

// Dope constructor function
function event(name, chance) {
    this.name = name
    this.chance = chance;
    //https://jsfiddle.net/Panomosh/8bpmrso1/
    eventList.push(this);
}

// event object instance
var event1 = new event('oldLady', 5),
    event2 = new event('officerHardass', 10),
    event3 = new event('dopeRaid', 5),
    event4 = new event('dopeSupply', 5),
    event5 = new event('dopeFound', 20),
    event6 = new event('findCoat', 5);

//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor#31180444
eventList.forEach(function(event) {
    //console.log(event.name);
    eventChance += event.chance;
    
    console.log(eventList);
    eventList.addedChance = 'eventChance';
    //console.log(eventChance);
})

function randomEvents() {
    var randomEventChance = Math.random();
    var randomChanceTrigger = 0.9;
    if (randomEventChance > 1 - randomChanceTrigger) {
        //console.log('Fire Random event!' + randomEventChance);
        randomChanceFire();
    }
};

function randomChanceFire() {

    var eventAllChances = (eventOldLady + eventHardass + eventDopeRaid + eventDopeSupply + eventDopeFound);
    //console.log(eventAllChances);
    var eventSingleChance = Math.random();
    var eventChanceTimeAll = eventSingleChance * eventAllChances;

    if (eventChanceTimeAll < 1) {

    }
};