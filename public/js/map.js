import { socket } from "./index.js";
import { initMap} from "./utils.js";

const form = document.getElementById("connectForm");
const maps=document.getElementById("maps");






//console.log(ville + " " + coord);
/*
form.style.display = "none";
maps.style.display="flex";

let initAllie=initMap("mapAllie",48.866667,2.333333);
let initEnnemie=initMap("mapEnnemie",51.509865,-0.118092);


let mapAllie=initAllie.map;
let mapEnnemie=initEnnemie.map;

let casesAllie=initAllie.grid;
let casesEnnemie=initEnnemie.grid;

let lat=48.866667;
let long =2.333333;

let  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/1024px-Sydney_Opera_House_-_Dec_2008.jpg';
let imageBounds = [[lat, long], [lat+2, long+2]];
console.log(mapAllie.L)
//mapAllie.L.imageOverlay(imageUrl, imageBounds).addTo(mapAllie);

casesAllie.forEach(c=>{
  c.rect.addEventListener("click",()=>{
    c.rect.setStyle({color: 'red', weight: 1})
    console.log(c.x,c.y);
  })
})
*/

socket.on("sendVille", (villeDataAllie,villeDataEnnemie) => {
  let villeAllie = villeDataAllie.ville;
  let coordAllie = villeDataAllie.coord;

  let villeEnnemie = villeDataEnnemie.ville;
  let coordEnnemie = villeDataEnnemie.coord;
  //console.log(ville + " " + coord);
  form.style.display = "none";
  maps.style.display="grid";
  
  // pb ici
  let casesAllie=initMap("mapAllie",coordAllie.lat,coordAllie.long);
  let casesEnnemie=initMap("mapEnnemie",coordEnnemie.lat,coordEnnemie.long);

  casesAllie.forEach(c=>{
    c.rect.addEventListener("click",()=>{
      c.rect.setStyle({color: 'red', weight: 0})
      console.log(c.x,c.y);
    })
  })

});
