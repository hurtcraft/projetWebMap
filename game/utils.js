function getRandomSalleID() {
    let result="";
    for (var i = 0; i < 8; i++) {
      var nombreAleatoire = Math.floor(Math.random() * 10);
      
      result+=nombreAleatoire;
    }
    return result;
}
function createRoom(id_){
  return {id:id_,players:[]}
}

const Villes={
  "Paris":{lat:48.866667,long:2.333333},
  "Londre":{lat:51.509865,long:-0.118092},
  "NewYork":{lat:40.730610,long:-73.935242},
  "Pekin":{lat:	39.904211,long:116.407395},
}
function getRandomVille(){
  let keys=Object.keys(Villes);
  let ville_;
  let objCoord_;
  let randomInt=Math.floor(Math.random() * keys.length);
  ville_=keys[randomInt];
  objCoord_=Villes[ville_];
  return {ville:ville_,coord:objCoord_};
}



module.exports={getRandomSalleID,createRoom,getRandomVille}