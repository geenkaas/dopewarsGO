// version.js

// 'use strict';

var VersionConstruct = {
    number: '1.0.8',
    name: 	'gamesPlayed',
    quote: 	'Work hard, Play hard',
    date: 	'16 nov 2017'
};

var Version = Object.create(VersionConstruct);

function updateVersion() {
    $('[data-version-quote]').html(Version.quote);
    $('[data-version-number]').html(Version.number + ' - ' + Version.name);
}

    // number: '1.0.7',
    // name:   'firebase',
    // quote:  'Papers please',
    // date:   '7 nov 2017'

    // number: '1.0.6',
    // name:   'themesong',
    // quote:  'Play me!',
    // date:   '6 nov 2017'

    // number: '1.0.5',
    // name: 	'highscore',
    // quote: 	'What is your name',
    // date: 	'30 okt 2017'

// var version = 1.0.4;
// var versionName = 30days;
// var versionQuote = 'Extra long...';
// var versionDate = '29 okt 2017'

// var version = 1.0.3;
// var versionName = hardass;
// var versionQuote = 'Now with officer Hardass!';

// var version = 1.0.2;
// var versionName = events;
// var versionQuote = '';

// var version = 1.0.1;
// var versionName = game;
// var versionQuote = '';

// var version = 1.0.0;
// var versionName = prototype;
// var versionQuote = '';