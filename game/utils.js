function getRandomSalleID() {
    let result="";
    for (var i = 0; i < 8; i++) {
      var nombreAleatoire = Math.floor(Math.random() * 10);
      
      result+=nombreAleatoire;
    }
    return result;
}

module.exports={getRandomSalleID}