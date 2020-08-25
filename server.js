const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');

const PORT = process.env.PORT || 8000;

const io = socket(server);

io.on('connection', (socket) => {
    socket.emit('your id', socket.id);
    socket.on('send message', (body) => {
        io.emit('message', body);
    });
});

server.listen(PORT, () => {
    console.log(`**************************************`);
    console.log(`Server is running on port: ${PORT}`);
    console.log(`URL address: http://localhost:${PORT}`);
    console.log(`**************************************`);
});
