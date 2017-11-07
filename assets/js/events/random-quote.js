// random-quote.js
// Script for handling encounters

'use strict';

function randomQuote() {

    var quoteArray = [
        'I was raised a Christian and turned into a stone-faced acid head',
        'I am more dope than heroin, sharper than a needle',
        'I tried marijuana once. I did not inhale',
        'Who are the Warriors?',
        'I am not a demon. I am a lizard, a shark, a heat-seeking panther',
        'The only dope worth shooting is Richard Nixon',
        'I have never been to New Zealand before. But Xena, the warrior princess, comes from there'
    ];
    var quoteSelect = randomFrom(quoteArray);

    var quoterArray = [
        'A homeless bum rubs against you and slurrs: "'+ quoteSelect +'".',
        'An old lady on the subway sings softly: "'+ quoteSelect +'".',
        '"'+ quoteSelect +'" you hear someone shout on the streets.',
        'This hipcat swings by and says "'+ quoteSelect +'".',
        '"'+ quoteSelect +'" a local newspaper reads.',
        'All is quiet on the streets.',
        'You hear a song from Bob Dylan drifting from an open second floor window.',
        'Nothing much happens.'
    ];
    var quoterSelect = randomFrom(quoterArray);

    var eventContent = ('\
        <h2>A new day</h2>\
        <p>'+ quoterSelect +'</p>\
        <div class="button" js-modal-close>Lets deal</div>\
    ');
    createModal(eventContent);
}