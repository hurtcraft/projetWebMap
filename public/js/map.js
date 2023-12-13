
const map = L.map('map').setView([51.505, -0.09], 20);
let currentMarker=null;
// add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);
console.log("char");
map.addEventListener("click",(e)=>{
    //currentMarker?null:null:
    if(currentMarker!==null){
        map.removeLayer(currentMarker);
    }
    currentMarker= new L.marker([e.latlng.lat,e.latlng.lng]).addTo(map);
    console.log(currentMarker.getLatLng());
})
