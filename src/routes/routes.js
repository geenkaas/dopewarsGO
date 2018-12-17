import game from './../Game';
import player from './../Player';
import dope from './../Dopelist';
import location from './../Location';

export default[
    {
        path: '/',
        component: game
    },
    {
        path: '/player',
        component: player
    },
    {
        path: '/dope',
        component: dope
    },
    {
        path: '/location/:lonlat',
        component: location
    },
]
