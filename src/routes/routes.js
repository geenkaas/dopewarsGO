import game from './../Game';
import player from './../Player';
import dope from './../Dopelist';

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
]
