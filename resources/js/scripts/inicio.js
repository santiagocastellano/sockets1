/*var objInicio = {    
    // <-- add this line to declare the object
    display: function () { 
            console.log('santiago');
    }//fin funcion display
}//fin objeto
export default objInicio;*/

import io from 'socket.io-client';

var socket = io('http://localhost:3000');

var objInicio = {
    display: function() {
       
        document.getElementById('sendMessageButton').addEventListener('click', function() {
           
            objInicio.sendMessage('Hola desde el cliente');
        });
    },

    sendMessage: function(message) {
        socket.emit('test-event', { message: message });
    },
    mia : function() {
        console.log('mia');
         /*document.getElementById('sendMessageButton').addEventListener('click', function() {
             objInicio.sendMessage('Hola desde el cliente');
         });*/
     },
    init: function() {
       console.log('iniut');
       
    }
};

// Inicializar el módulo
objInicio.init();

export default objInicio;