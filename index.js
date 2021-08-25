var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(4000, function () {
    console.log('listening on port 4000,');
});
app.use(express.static('public'));
var io = socket(server);
io.on('connection', (socket) => {
    console.log(' A new user at socket_id:', socket.id);
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });
    socket.on('disconnect', function () {
        console.log('User disconnected --> with user id: ',socket.id);
        io.sockets.emit('disconnect', socket.id);
    });
    socket.on('error', function () {
        console.log('SOCKET ERROR');
        socket.destroy();
    });
});
io.on('connect_failed', function () {
    console.log('Connection Failed');
});