var colors = require("colors");
var net = require("net");
var JsonSocket = require("json-socket");
var events = require('events');
var request = require('request');

var gatewayeHandler = require('./gatewayHandler');

var HOST = "127.0.0.1";
var PORT = 9000;
var server = net.createServer();
// server.listen(PORT);
server.listen(PORT, HOST);


server.on("connection", function(socket) {
    console.log("New Connection has been established.".underline.green);
    socket = new JsonSocket(socket);
    socket.on("message", function(msg) {

        switch (msg.status) {
            case "g":
                // code block
                console.log(" ** A gateway message received.".black.bgBlue);
                gatewayeHandler.temperature(msg);
                socket.sendEndMessage({ result: " successful" });

                break;
            case "s":
                // code block
                console.log(" ** A server message received.".black.bgGreen);
                socket.sendEndMessage({ result: " successful" });
                break;
            default:
                // code block
                console.log("The status was undefined.".red);
        }

    });
});





var gatewayEvents = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection succesful.');

    gatewayeHandler.temperature({ "a": 12 });
    // Fire the data_received event 
    gatewayEvents.emit('data_received');
};


gatewayEvents.on('data_received', function() {
    console.log('data received succesfully.');
});


gatewayEvents.on('connection', connectHandler);

gatewayEvents.emit('connection');