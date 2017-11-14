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

        var fs = firebase.firestore();
        // Below are same results
        var userData = fs.collection('players').doc(userId);
        // But I prefer this one
        var userData = fs.doc('players/'+ userId);

        var gamesPlayedNew;

        userData.get().then(function(doc) {
        if (doc.exists) {
            //console.log("Document data:", doc.data());

            // increment data by one
            // See: https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
            if (doc.data().gamesPlayed < 1) {
                gamesPlayedNew = 1;
            } else {
                gamesPlayedNew = doc.data().gamesPlayed + 1;
            }

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

function updateScore(property, change) {
    // New modular function for button handling.
    // Optimal: call function like: updateScore(killedByHardass, 1); and add one to your deaths deu to hardass.
}

window.onload = function() {
    initFirestore();
}