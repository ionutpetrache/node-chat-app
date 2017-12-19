const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


const app = express();
let server = http.createServer(app);
let io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createAt: new Date().getTime()
    });

    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
        io.emit('newMessage', {
            from: msg.from,
            text: msg.text,
            createdAt: new Date().getTime()
        });

        socket.broadcast.emit('newMessage', {
            from: msg.from,
            text: msg.text,
            createAt: new Date().getTime()
        });
    });


    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => console.log(`Server running on port ${port}`));