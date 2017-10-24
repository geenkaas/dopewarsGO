// Dope prices

'use strict';

var dopelist = [];

// Dope constructor function
function Dope(name, priceMin, priceMax, amount) {
    this.name = name
    this.priceMin = priceMin;
    this.priceMax = priceMax;
    this.amount = amount;
    this.priceCurr = function(multiplier) {
        var priceTempMin;
        var priceTempMax;
        if (multiplier < 1) {
            priceTempMin = priceMin / 2;
            priceTempMax = priceMin * 1.5;
        } else if (multiplier === 1) {
            priceTempMin = priceMin;
            priceTempMax = priceMax;
        } else if (multiplier > 1) {
            priceTempMin = priceMax - priceMin;
            priceTempMax = priceMax + priceMin;
        }

        var dopeRandom = Math.random();
        this.random = dopeRandom;
        return Math.floor(((priceTempMax - priceTempMin) + 1) * dopeRandom + priceTempMin);
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