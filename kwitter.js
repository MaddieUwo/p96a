var firebaseConfig = {
  apiKey: "AIzaSyA9iNgtC5y3efzWIoh2pKRn2kIC_dPvG4E",
  authDomain: "kwitter-feb42.firebaseapp.com",
  databaseURL: "https://kwitter-feb42-default-rtdb.firebaseio.com",
  projectId: "kwitter-feb42",
  storageBucket: "kwitter-feb42.appspot.com",
  messagingSenderId: "139141265330",
  appId: "1:139141265330:web:951998846c575fa88356ab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

