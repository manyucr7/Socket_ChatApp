var socket = io.connect('http://localhost:4000', {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
});
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');
    
btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});
socket.on( 'connect', function () {
    console.log( 'connected to server' );
} );

socket.on('disconnect', function () {
    console.log( 'disconnected to server' );
} );
socket.on('reconnect', function () {
    console.log('Reconnected succesfully');
});
message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
})
socket.on('chat', function (data) {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
socket.on('disconnect', function (data) {
    console.log('user with id '+data+' has disconnected ')
    feedback.innerHTML = '<small><center><p><strong> User: '+data+'</strong>'+' has disconnected </p></center></small>';
});