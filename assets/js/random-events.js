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
var event1 = new Event('oldLady', 10),
    event2 = new Event('officerHardass', 20),
    event3 = new Event('dopeRaid', 5),
    event4 = new Event('dopeSupply', 20),
    event5 = new Event('dopeFound', 30),
    event6 = new Event('findCoat', 5),
    event7 = new Event('pennyFound', 20),
    event7 = new Event('marrakeshExpress', 10);

function getEventChange(Event, total) {
// Total value could be calculated within function or own function.
//  console.log(Event);
//  console.log("getEventChange: " + Event.chance*(100/total));
    return Event.chance * (100 / total);
};

function getRandomEvent(eventMap) {
    console.log(eventRNG * 100);
    for (var i = 0; i < eventMap.length; i++) {
        //console.log(eventMap[i].chance >= eventRNG*100);
        if (eventMap[i].chance >= eventRNG * 100) {
            console.log("returning " + eventMap[i].name);
            eventRNG = Math.random();
            return eventMap[i];
        }
    }
};

var eventTotal = 0;
var eventMap = [];
//https://stackoverflow.com/questions/31180331/loop-through-each-new-object-from-constructor#31180444
eventList.forEach(function(event) {
    //console.log(event.name);
    //eventChance = event.chance;
    //console.log(eventList);
    //eventList.addedChance = 'eventChance';
    //console.log(eventChance);
    eventTotal += event.chance;
    //console.log(event.name + ': eventtotal: ' + eventTotal);

});

var range = 0;
eventList.forEach(function(event) {
    range += getEventChange(event, eventTotal);
    eventMap.push(new Event(event.name, range ));
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

function randomChanceFire() {
    var randomEvent = getRandomEvent(eventMap);
    //console.log(randomEvent);
};