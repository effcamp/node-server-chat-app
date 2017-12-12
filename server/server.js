const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const { generateMessage, generateLocationMessage } = require('./utils/message');

const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');
  socket.emit(
    'newMessage',
    generateMessage('Admin', 'Welcome to the chat app!')
  );

  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'A new user has joined!')
  );
  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', coords => {
    io.emit(
      'newLocationMessage',
      generateLocationMessage('Admin', coords.lat, coords.lng)
    );
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});
