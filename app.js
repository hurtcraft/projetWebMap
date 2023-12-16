const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT=3000
//const Player=require("./game/player.js");
const Utils=require("./game/utils.js");
const { utimes } = require('fs');


app.use(express.static('public'))


const AllPlayers=[];
const AllRoom=[];
io.on('connection', (socket) => {
  console.log('a user connected '+socket.id);
  
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  })
  
  socket.on('sendMsg', (message) => {
    console.log(`Received message from ${socket.id}: ${message}`);
    io.emit('chatMessage', { user: socket.id, message: message });
  });

  socket.on("LookingForSalleID",()=>{
    let idRoom=Utils.getRandomSalleID();
    AllRoom.push(Utils.createRoom(idRoom));
    io.to(socket.id).emit("sendSalleID",idRoom);
  
  })
  socket.on("joiningRoom",(p)=>{
    let roomID=p.idRoom;
    let room=AllRoom.find(r=>r.id==roomID);
    if (room.players.length<2){
      room.players.push(p);
      room.players.forEach(p => {
        io.to(p.socketID).emit("playerJoined",room);
      });
      
    }
    else{
      io.emit()
    }
    console.log(room);
  })

  
});


server.listen(PORT, () => {
  console.log('listening on : '+PORT);
});