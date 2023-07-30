const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function(socket) {
    console.log('Usuario conectado');

    socket.on('disconnect', function() {
        console.log('Usuario desconectado');
    });

   
    socket.on('test-event', function(data) {
        console.log('Mensaje enviado desde el cliente: ' + data.message);
        io.emit('test-event', { message: '¡Hola desde el servidor!' });
    });
});

http.listen(3000, function() {
    console.log('Servidor de sockets escuchando en el puerto 3000');
});