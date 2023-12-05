
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDBgOKhVdZpDD-B3SnpRySDZu7oP-4qPZc",
  authDomain: "red-social-c1041.firebaseapp.com",
  projectId: "red-social-c1041",
  storageBucket: "red-social-c1041.appspot.com",
  messagingSenderId: "484923296935",
  appId: "1:484923296935:web:c27129e3c7e386398a5f82"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="HOLA " + user_name

function addRoom(){
  room_name=document.getElementById("room_name")
  .value;
  firebase.database() .ref("/") .child(room_name).update(
  {
    purpose:"añadir nombre de sala"
  }
  );
  localStorage.setItem("room_name",room_name);
  window.location.replace("kwitter_mensajes.html")
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
 //Inicia el código
 console.log("nombe de la sala " + Room_names);
 row= "< div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(thisid)'># " + Room_names + "</div> <hr>  ";
 document.getElementById("output").innerHTML += row;
  //Finaliza el código
 });});}
getData();

function redirectToRoomName(Room_names){
  console.log(Room_names);
  localStorage.setItem("room_name",Room_names);
  window.location="kwitter_mensajes.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");

}

