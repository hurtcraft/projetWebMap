
function createPlayer(socketID_, pseudo_, RoomMaker_, idRoom_) {
    return { socketID: socketID_, pseudo: pseudo_, RoomMaker: RoomMaker_, idRoom:idRoom_};
}
function updateWaitingRoom(pseudo1,pseudo2,Room){
    let players=Room.players;
    let p1=players[0];
    let p2=players[1];
    
    pseudo1.innerText=p1.pseudo
    pseudo2.innerText=p2.pseudo

}
export{createPlayer,updateWaitingRoom}