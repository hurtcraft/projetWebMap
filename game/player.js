
function createPlayer(socketID_, pseudo_, RoomMaker_, idRoom_) {
    return { socketID: socketID_, pseudo: pseudo_, RoomMaker: RoomMaker_, idRoom:idRoom_};
}

module.exports = { createPlayer };