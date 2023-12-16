
function createPlayer(socketID_, pseudo_, RoomMaker_, idRoom_) {
    return { socketID: socketID_, pseudo: pseudo_, RoomMaker: RoomMaker_, idRoom:idRoom_};
}
function updateWaitingRoom(pseudo1,pseudo2,Room){
    let players=Room.players;
    if(players.length==1){
        
    }
    let p1=players[0];
    let p2=players[1];
    if(p2===undefined){
        pseudo1.innerText=p1.pseudo
        pseudo2.innerText=""
    }
    else{
        pseudo1.innerText=p1.pseudo;
        pseudo2.innerText=p2.pseudo;
    }
    

}

function initMap(name,lat,long){
    const map = L.map(name).setView([lat, long], 20);
    let currentMarker = null;
    // add the OpenStreetMap tiles
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    }).addTo(map);
  
    // show the scale bar on the lower left corner
    L.control.scale({ imperial: true, metric: true }).addTo(map);
    
    map.addEventListener("click", (e) => {
      //currentMarker?null:null:
      if (currentMarker !== null) {
        map.removeLayer(currentMarker);
      }
      currentMarker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      console.log(currentMarker.getLatLng());
    });
}
export{createPlayer,updateWaitingRoom,initMap}