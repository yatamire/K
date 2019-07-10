

function updatePost(collection, doc, input){

    const db = firebase.firestore();
    db.collection(collection).doc(doc).set({
        input
    })
    .then(function() {
        console.log("Document successfully written!");
        console.log('collection: ' + collection + 'doc: ' + doc + 'input: /n' + input)
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    

}

document.addEventListener("DOMContentLoaded", event => {


    
});

function Login(){

    const provider = firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          updatePost();
          console.log('Signed in Anonymously');
          // ...
        } else {
          // User is signed out.
          console.log('User is signed out');
          // ...
        }
        // ...
      });


}