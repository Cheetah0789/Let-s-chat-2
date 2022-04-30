var firebaseConfig = {
    apiKey: "AIzaSyDn29KaruzVXpaF-qU6Tyhgovm514zs-lc",
    authDomain: "lets-chat-12d7e.firebaseapp.com",
    databaseURL: "https://lets-chat-12d7e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-12d7e",
    storageBucket: "lets-chat-12d7e.appspot.com",
    messagingSenderId: "1029927579686",
    appId: "1:1029927579686:web:1c3f2482e5b99705d3b6e7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
