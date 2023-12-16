import { socket } from "./index.js";
import { initMap} from "./utils.js";

const form = document.getElementById("connectForm");
const maps=document.getElementById("maps");

socket.on("sendVille", (villeDataAllie,villeDataEnnemie) => {
  let villeAllie = villeDataAllie.ville;
  let coordAllie = villeDataAllie.coord;

  let villeEnnemie = villeDataEnnemie.ville;
  let coordEnnemie = villeDataEnnemie.coord;
  //console.log(ville + " " + coord);
  form.style.display = "none";
  maps.style.display="flex";
  
  initMap("mapAllie",coordAllie.lat,coordAllie.long);
  initMap("mapAllie",coordEnnemie.lat,coordEnnemie.long);

});
