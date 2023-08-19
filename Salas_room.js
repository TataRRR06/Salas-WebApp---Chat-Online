
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyBkoQfdU2HkCxl8JaAP1B42I9GbvOxhHL0",
      authDomain: "salas-web-app-p93-97.firebaseapp.com",
      databaseURL: "https://salas-web-app-p93-97-default-rtdb.firebaseio.com",
      projectId: "salas-web-app-p93-97",
      storageBucket: "salas-web-app-p93-97.appspot.com",
      messagingSenderId: "552378182231",
      appId: "1:552378182231:web:f46761a3b92b1990c49112"
    };
    
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");  
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="Hola, Bienvenid@ " + user_name;

function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});

localStorage.setItem("room_name", room_name);

window.location.replace("Salas_page.html");
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
            //Inicio del código
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Final del código
      });
});
}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="Salas_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}