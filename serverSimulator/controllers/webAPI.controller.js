var request = require('request');

var myJSONObject = { "PM": "Packet from server" };

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

exports.updateData = async(req, res) => {
    console.log("REQUEST gateway: " + req.body.requestedGateway)

    let GID = req.body.requestedGateway;
    let sensors = [
        { SID: 1, H: randomInt(10, 24), T: randomInt(1, 9) },
        { SID: 2, H: randomInt(10, 24), T: randomInt(1, 9) }
    ]

    res.send({
        "sensors": sensors
    })

}


exports.emergencyCall = async(req, res) => {

    var net = require('net'),
        JsonSocket = require('json-socket');

    var port = 9000; //The same port that the server is listening on
    var host = '127.0.0.1';

    var socket = new JsonSocket(new net.Socket()); //Decorate a standard net.Socket with JsonSocket
    socket.connect(port, host);
    socket.on('connect', function() { //Don't send until we're connected
        socket.sendMessage({
            "status": 's',
            "GID": req.body.GID,
            "command": req.body.command,
            "relayStatus": [{
                "RID": 1,
                "relaySTATUS": req.body.command
            }]
        });
        socket.on('message', function(message) {
            console.log('The result is: ' + message.result);
        });
    });
}






// exports.callRasp = async(req, res) => {

//     let connect = req.body.connect;


//     var receivedResponse;

//     await request({
//         url: connect,
//         method: "POST",
//         json: true, // <--Very important!!!
//         body: myJSONObject
//     }, function(error, response, body) {
//         console.log(response.body);
//         receivedResponse = response.body;
//     });

//     res.send(receivedResponse)

// }


// exports.updatedSetPoint = async(req, res) => {

//     myJSONObject = {
//         temperatureSetPoint: req.body.temperatureSetPoint,
//         humiditySetPoint: req.body.humiditySetPoint,
//         CO2SetPoint: req.body.CO2SetPoint
//     }


//     console.log(myJSONObject)

//     await request({
//         url: "http://192.168.12.80:8080/",
//         method: "POST",
//         json: true, // <--Very important!!!
//         body: myJSONObject
//     }, function(error, response, body) {
//         // console.log(response.body);
//         // receivedResponse = response.body;
//     });


// }