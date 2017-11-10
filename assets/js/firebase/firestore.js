// Initialize Cloud Firestore through Firebase

'use strict';

function initFirestore() {

    var fs = firebase.firestore();
    var fb = firebase.auth();
    var userId = fb.currentUser.uid;

    var arcadeName = readCookie('playerName');

    var userData = fs.doc('players/'+ userId);

    var buttonGameNew = $('[js-game-start]');

    buttonGameNew.on('tap', function() {
        userData.set({
            uid: userId,
            arcadeName: arcadeName
            // increment data by one
            // See: https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
            // gameStarted: +=1 
        })
    })

}