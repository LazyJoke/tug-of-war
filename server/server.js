const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { GameHistory } = require('./models/GameHistory');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let players = { left: [], right: [] };

io.on('connection', (socket) => {
  socket.on('join', ({ username, selectedSide }) => {
    players[selectedSide].push(username);
    if (players.left.length > 0 && players.right.length > 0) {
      io.emit('gameStart');
    }
  });

  socket.on('buttonPress', (side) => {
    io.emit('updateGame', { side });
  });
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
