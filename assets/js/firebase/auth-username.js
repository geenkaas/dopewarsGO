// auth-username.js
// Add username to authenticated user

'use strict';

function addUserName(arcadeName) {

    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: arcadeName,
    }).then(function() {
        // Update successful.
        //alert('thanks! username updated to: ' + arcadeName);
    }).catch(function(error) {
        // An error happened.
    });
}
