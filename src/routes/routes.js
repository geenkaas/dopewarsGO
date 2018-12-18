import game from './../game';
import player from './../player';
import dope from './../dopeList';
import location from './../location';

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
