// Initialize Cloud Firestore through Firebase

'use strict';

function initFirestore() {

    var buttonGameNew = $('[js-game-start]');
    var buttonGameEnd = $('[js-game-end]');

    var buttonGameWon = $('[js-game-end]');
    var buttonGameLost = $('[js-game-end]');

    //var gamesPlayed = fb.currentUser.gamesPlayed;
    //console.log(gamesPlayed);

    buttonGameNew.on('tap', function() {

        var fb = firebase.auth();
        var userId = fb.currentUser.uid;

        var arcadeName = readCookie('playerName');

        var db = firebase.firestore();
        // Below are same results
        var userData = db.collection('players').doc(userId);
        // But I prefer this one
        var userData = db.doc('players/'+ userId);

        var gamesPlayedNew;

        userData.get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", doc.data());

            // increment data by one
            // See: https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
            gamesPlayedNew = doc.data().gamesPlayed + 1;

            userData.update({
                uid: userId,
                arcadeName: arcadeName,
                gamesPlayed: gamesPlayedNew
            });
        } else {
            console.log("No such document!");
        }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    })
}

window.onload = function() {
    initFirestore();
}