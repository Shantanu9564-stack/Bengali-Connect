// Create the map
var map = L.map('map').setView([20.5937, 78.9629], 5); // India

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var places = [
    [28.6139, 77.2090, "Delhi"],
    [19.0760, 72.8777, "Mumbai"],
    [22.5726, 88.3639, "Kolkata"]
];

places.forEach(function(place) {
    L.marker([place[0], place[1]])
     .addTo(map)
     .bindPopup(place[2]);
});

// Add popup
marker.bindPopup("<b>Pune City</b><br>This is a marker.").openPopup();

function toggleContribution() {
  const box = document.getElementById('contributionBox');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';

}
function showMap(){
  document.getElementById("mapView").style.display="block";
  document.getElementById("feedView").style.display="none";
}

function showFeed(){
  document.getElementById("mapView").style.display="none";
  document.getElementById("feedView").style.display="block";
}

function openPostBox(){
  document.getElementById("postForm").style.display="block";
}
function submitPost(){
  const text=document.getElementById("postText").value;
  const file=document.getElementById("postMedia").files[0];
  const container=document.getElementById("feedContainer");

  const card=document.createElement("div");
  card.className="postCard";

  if(text){
    card.innerHTML=`<p>${text}</p>`;
  }

  if(file){
    const reader=new FileReader();
    reader.onload=function(e){
      if(file.type.startsWith("image")){
        card.innerHTML+=`<img src="${e.target.result}" width="100%">`;
      }
      else if(file.type.startsWith("video")){
        card.innerHTML+=`<video controls width="100%" src="${e.target.result}"></video>`;
      }
    };
    reader.readAsDataURL(file);
  }

  container.prepend(card);

  document.getElementById("postText").value="";
  document.getElementById("postMedia").value="";
}
