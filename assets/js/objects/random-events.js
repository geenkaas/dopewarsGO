// random-events.js
// Scripts that initiate random events, called from dope-prices.js

'use strict';

// Create event list
var eventList = [];
var eventRNG = Math.random();
var randomChanceTrigger = 1;

// Dope constructor function
function Event(name, chance) {
    this.name = name
    this.chance = chance;
    //https://jsfiddle.net/Panomosh/8bpmrso1/
    eventList.push(this);
}

// event object instance
var event1 = new Event('oldLady', 0),
    event2 = new Event('officerHardass', 10),
    event3 = new Event('dopeLow', 5),
    event4 = new Event('dopeHigh', 20),
    event5 = new Event('dopeFound', 5),
    event6 = new Event('pennyFound', 20),
    event7 = new Event('findCoat', 5),
    event8 = new Event('findGun', 5),
    event9 = new Event('randomQuote', 40);

function getEventChange(Event, total) {
// Total value could be calculated within function or own function.
//  console.log(Event);
//  console.log("getEventChange: " + Event.chance*(100/total));
    return Event.chance * (100 / total);
}

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
}

var eventTotal = 0;
eventList.forEach(function(event) {
    eventTotal += event.chance;
})

var eventMap = [];
var range = 0;
eventList.forEach(function(event) {
    range += getEventChange(event, eventTotal);
    eventMap.push(new Event(event.name, range));
    //console.log(event.name + " chance: " + getEventChange(event, eventTotal) + '%. Range <= ' + range);
})

function randomEvents() {
    var randomEventChance = Math.random();
    if (randomEventChance >= 1 - randomChanceTrigger) {
        var randomEvent = getRandomEvent(eventMap);
        //storeEvents(randomEvent.name);
        //console.log(randomEvent);
        // This loads a function with the name of the event selected randomly
        window[randomEvent.name]();
    }
}