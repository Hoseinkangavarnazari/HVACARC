function updateDATA(reqG) {

    console.log("Update setpoint request has been sent");

    $.ajax({
        url: "http://localhost:2999/webapi/updatedata",
        dataType: 'json',
        data: {
            "requestedGateway": reqG
        },
        type: "POST", // if you want to send data via the "data" property change this to "POST". This can be omitted otherwise
        success: function(responseData) {
            var sensors = responseData.sensors
            console.log("RECEIVED: " + sensors[0].T);

            $('#G1S1T').text = sensors[0].T;
            for (var i = 0; i < sensors.length; i++) {
                var ELEMENT = 'G';
                ELEMENT += reqG;
                ELEMENT += 'S' + sensors[i].SID;
                console.log(ELEMENT);
                document.getElementById(ELEMENT + 'T').innerText = sensors[i].T;
                document.getElementById(ELEMENT + 'H').innerText = sensors[i].H;
            };

            document.getElementById('G1S1T').innerText = sensors[0].T;;

        },
        error: console.error
    });
}

var myVar1 = setInterval(updateDATA, 5000, 1);
var myVar2 = setInterval(updateDATA, 5000, 2);