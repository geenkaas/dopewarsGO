// Initialize Cloud Firestore through Firebase

'use strict';

function initFirestore() {

    var buttonGameNew = $('[data-game-start]');
    var buttonGameEnd = $('[data-game-end]');

    var buttonGameWon = $('[data-game-end]');
    var buttonGameLost = $('[data-game-end]');

    //var gamesPlayed = fb.currentUser.gamesPlayed;
    //console.log(gamesPlayed);


    buttonGameNew.on('tap', function() {
        updateUser();
        updateScore('gamesPlayed', 1);
    })
}

function updateUser() {
    var fb = firebase.auth();
    var userId = fb.currentUser.uid;

    var arcadeName = readCookie('playerName');

    var fs = firebase.firestore();
    // Below are same results
    //var userData = fs.collection('players').doc(userId);
    // But I prefer this one
    var userData = fs.doc('players/'+ userId);

    userData.update({
        uid: userId,
        arcadeName: arcadeName
    });

    var washingtonRef = fs.collection("cities").doc("DC");

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        capital: true
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function updateScore(property, change) {
    // New modular function for button handling.
    // Optimal: call function like: updateScore(killedByHardass, 1); and add one to your deaths deu to hardass.

    var fb = firebase.auth();
    var userId = fb.currentUser.uid;

    var fs = firebase.firestore();
    var userData = fs.doc('players/'+ userId);

    var propertyNew;

    userData.get().then(function(doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());

        // increment data by one
        // See: https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
        console.log(doc.data()[property]);
        if (typeof doc.data()[property] === 'undefined') {
            console.log('property not found');
            propertyNew = 1;
        } else {
            console.log('added '+ change +' to '+ property);
            propertyNew = doc.data()[property] + change;
        }

        var updatedObj = {};
        updatedObj[property] = propertyNew;
        userData.update(updatedObj);

    } else {
        console.log("No such document!");
    }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

window.onload = function() {
    initFirestore();
}