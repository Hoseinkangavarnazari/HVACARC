var net = require('net'),
    JsonSocket = require('json-socket');

var port = 9000; //The same port that the server is listening on
var host = '127.0.0.1';
var socket = new JsonSocket(new net.Socket()); //Decorate a standard net.Socket with JsonSocket
socket.connect(port, host);
socket.on('connect', function() { //Don't send until we're connected
    socket.sendMessage({
        "status": 'g',
        "GID": 1,
        "sensors": [{
                "SID": 1,
                "T": 12,
                "H": 23
            },
            {
                "SID": 2,
                "T": 15,
                "H": 14
            }
        ]
    });
    socket.on('message', function(message) {
        console.log('The result is: ' + message.result);
    });
});