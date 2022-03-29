function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBCPF2iktI5PSJU3fvjel6RneBkfKe2LeU",
    authDomain: "kwitter-app-dd132.firebaseapp.com",
    projectId: "kwitter-app-dd132",
    storageBucket: "kwitter-app-dd132.appspot.com",
    messagingSenderId: "404953862499",
    appId: "1:404953862499:web:a6c80f847c278918994356",
    measurementId: "G-SFE88MP5DN"
  };
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

