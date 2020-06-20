var request = require('request');

function scheduler() {
    console.log("Here we are in Scheduler.")
    return;
}

function temperature(data) {

    console.log("Here in temperature function");
    request.post(
        'http://127.0.0.1:3000/status/update', { json: data },
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );

    console.log("Here we are in Temperature." + data.b)
    return;
}

// module.export = {
//     temperature,
//     scheduler
// }

module.exports.scheduler = scheduler;
module.exports.temperature = temperature;