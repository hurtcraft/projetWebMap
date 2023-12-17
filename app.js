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

console.log(Utils.getRandomVille());

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
      let roomMaker;
      room.players.push(p);
      room.players.forEach(p => {
        if(p.RoomMaker==true){
          roomMaker=p;
        }
        io.to(p.socketID).emit("playerJoined",room);
      });
      if(room.players.length==2){
        io.to(roomMaker.socketID).emit("roomReady",room);
      }
    }
    else{
      io.emit()// pb connection trop de joueur
    }
    console.log(room);
  })

  socket.on("jeuLancer",(room)=>{
    let Players=room.players;
    let ville1=Utils.getRandomVille();
    let ville2=Utils.getRandomVille();
    // je suis pas très fier de ca je l'avoue...
    while(ville1.ville===ville2.ville){
      ville2=Utils.getRandomVille()
    }
    let p1=Players[0];
    let p2=Players[1];
    io.to(p1.socketID).emit("sendVille",ville1,ville2);
    io.to(p2.socketID).emit("sendVille",ville2,ville1);

  })

  
});


server.listen(PORT, () => {
  console.log('listening on : '+PORT);
});