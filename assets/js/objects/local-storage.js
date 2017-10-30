// local-storage.js

'use strict';

function localStorage() {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        if (localStorage.playerName) {
            console.log('your name is: ' + localStorage.playerName);
        } else {
            console.log('you dont have a name');
            popupPlayerName();
        }
    } else {
        // Sorry! No Web Storage support..
        console.log('Your browser does not support local storage, yuo cannot save scores...');
    }
}