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