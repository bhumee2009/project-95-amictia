var firebaseConfig = {
    apiKey: "AIzaSyA8FWx3lGQqY-rEWamWcSBtThIdE7TO_Gk",
    authDomain: "amicitia-1a74e.firebaseapp.com",
    databaseURL: "https://amicitia-1a74e-default-rtdb.firebaseio.com",
    projectId: "amicitia-1a74e",
    storageBucket: "amicitia-1a74e.appspot.com",
    messagingSenderId: "961579965102",
    appId: "1:961579965102:web:8e501c25ae5744e064eb3f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome - " + user_name + "!";

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location= "Kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    
      console.log("Room name - " + Room_names);
       row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML+= row;

      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}
