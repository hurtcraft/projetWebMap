function createPlayer(socketID_, pseudo_, RoomMaker_, idRoom_) {
  return {
    socketID: socketID_,
    pseudo: pseudo_,
    RoomMaker: RoomMaker_,
    idRoom: idRoom_,
  };
}
const waitingRoomPlayer2=document.getElementById("waitingRoomPlayer2");
function updateWaitingRoom(pseudo1, pseudo2, Room) {
  let players = Room.players;
  if (players.length == 1) {
  }
  let p1 = players[0];
  let p2 = players[1];
  if (p2 === undefined) {
    pseudo1.innerText = p1.pseudo;
    pseudo2.innerText = "";
    waitingRoomPlayer2.style.visibility="hidden";
  } else {
    pseudo1.innerText = p1.pseudo;
    pseudo2.innerText = p2.pseudo;
    waitingRoomPlayer2.style.visibility="visible";
  }
}

function initMap(name, lat, long) {
  const map = L.map(name, {
    center: [lat, long],
    zoom: 15,
  });
  let currentMarker = null;
  map.setMinZoom(15);
  const allowedBounds = L.latLngBounds([lat, long], [lat, long]);
  map.setMaxBounds(allowedBounds);
  // add the OpenStreetMap tiles
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);

  // show the scale bar on the lower left corner
  L.control.scale({ imperial: true, metric: true }).addTo(map);

  map.addEventListener("click", (e) => {
    if (currentMarker !== null) {
      map.removeLayer(currentMarker);
    }
    currentMarker = new L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    console.log(currentMarker.getLatLng());
  });

  function createGrid(bounds, rows, cols) {
    const latStep = (bounds.getNorth() - bounds.getSouth()) / rows;
    const lngStep = (bounds.getEast() - bounds.getWest()) / cols;
    let rectangles = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const rect_ = L.rectangle([
          [bounds.getSouth() + i * latStep, bounds.getWest() + j * lngStep],
          [
            bounds.getSouth() + (i + 1) * latStep,
            bounds.getWest() + (j + 1) * lngStep,
          ],
        ]).addTo(map);
        rect_.setStyle({ color: "blue", weight: 1 });
        rectangles.push({ rect: rect_, x: i, y: j });
      }
    }
    return rectangles;
  }

  const bounds = map.getBounds();

  return { grid: createGrid(bounds, 10, 10), L: L, map: map }; //crée une grille 10 10 et retourne les case de la grille
}

export { createPlayer, updateWaitingRoom, initMap };
