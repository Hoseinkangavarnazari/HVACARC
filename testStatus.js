var MQTT = require('mqtt');


const HOST = "mqtt://185.181.10.81"
const options = {
    qos: 2
};

var client = MQTT.connect(HOST, options);


var counter = 0;

client.on("connect", () => {
    console.log("connected  " + client.connected);

    // client.publish("g1f0", "test message"+counter);
    setInterval(() => {
        counter += 1;

        packet = "on " + "#" + counter;

        client.publish('inTopic', packet);
        console.log("The counter is :" + counter)

    }, 5000);


});

client.on("error", (err) => {
    console.log("Can't connect" + err);
    process.exit(1)
});