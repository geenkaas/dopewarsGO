// // Initialize Facebook authanthification
// // https://github.com/firebase/quickstart-js/blob/master/auth/facebook-credentials.html
// // https://firebase.google.com/docs/auth/web/facebook-login?authuser=0

// 'use strict';

// /**
//  * Function called when there is a change in Facebook auth state.
//  */
// // [START facebookcallback]
// function checkLoginState(event) {
//     if (event.authResponse) {
//         // User is signed-in Facebook.
//         var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
//             unsubscribe();
//             // Check if we are already signed-in Firebase with the correct user.
//             if (!isUserEqual(event.authResponse, firebaseUser)) {
//                 // Build Firebase credential with the Facebook auth token.
//                 // [START facebookcredential]
//                 var credential = firebase.auth.FacebookAuthProvider.credential(
//                         event.authResponse.accessToken);
//                 // [END facebookcredential]
//                 // Sign in with the credential from the Facebook user.
//                 // [START authwithcred]
//                 firebase.auth().signInWithCredential(credential).catch(function(error) {
//                     // Handle Errors here.
//                     var errorCode = error.code;
//                     var errorMessage = error.message;
//                     // The email of the user's account used.
//                     var email = error.email;
//                     // The firebase.auth.AuthCredential type that was used.
//                     var credential = error.credential;
//                     // [START_EXCLUDE]
//                     if (errorCode === 'auth/account-exists-with-different-credential') {
//                         alert('You have already signed up with a different auth provider for that email.');
//                         // If you are using multiple auth providers on your app you should handle linking
//                         // the user's accounts here.
//                     } else {
//                         console.error(error);
//                     }
//                     // [END_EXCLUDE]
//                 });
//                 // [END authwithcred]
//             } else {
//                 // User is already signed-in Firebase with the correct user.
//             }
//         });
//     } else {
//         // User is signed-out of Facebook.
//         // [START signout]
//         firebase.auth().signOut();
//         // [END signout]
//     }
// }
// // [END facebookcallback]
// /**
//  * Check that the given Facebook user is equals to the  given Firebase user
//  */
// // [START checksameuser]
// function isUserEqual(facebookAuthResponse, firebaseUser) {
//     if (firebaseUser) {
//         var providerData = firebaseUser.providerData;
//         for (var i = 0; i < providerData.length; i++) {
//             if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
//                     providerData[i].uid === facebookAuthResponse.userID) {
//                 // We don't need to re-auth the Firebase connection.
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// // [END checksameuser]
