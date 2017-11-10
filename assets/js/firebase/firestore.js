// Initialize Cloud Firestore through Firebase

'use strict';

function initFirestore() {
    var db = firebase.firestore();

    db.collection('users').add({
        first: 'Arne',
        last: 'Maier',
        born: 1978
    })
    .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
        console.error('Error adding document: ', error);
    });
}