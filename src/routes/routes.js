import game from './../game';
import player from './../player';
import dope from './../dopeList';
import location from './../location';

import login from './../firebase/login';
import register from './../firebase/register';

export const routes = [
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
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
]
