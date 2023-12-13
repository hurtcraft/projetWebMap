const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT=3000
app.use(express.static('public'))


io.on('connection', (socket) => {
  console.log('a user connected '+socket.id);
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  })
  socket.on('sendMsg', (message) => {
    console.log(`Received message from ${socket.id}: ${message}`);
    
    // You can broadcast the message to all clients, or perform any other logic here
    io.emit('chatMessage', { user: socket.id, message: message });
  });
});


server.listen(PORT, () => {
  console.log('listening on *: '+PORT);
});