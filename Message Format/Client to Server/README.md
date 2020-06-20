##EmergencyRelayFault: 
<br>
Usage: When the relay can not work based on schedule.
<br>
**Two types of Log:**
- Obj.LOG: gateway LOG
- OBJ.relayStatus[1].LOG : log of each relay
```
"gatewayID":"GATEWAYID",
    "timeStamp":"TIMESTAMP",
    "LOG":"String",
    "relayStatus": [
        {
            "relayID":"RELAYID",
            "LOG": "String of Log"
        },
        {
            "relayID":"RELAYID",
            "LOG": "String of Log"
        }
    ]
}
```

##replyToEmergency: 
<br>
Usage: Answer to EmergencyONOFF.json
<br>
```
{
    "gatewayID": "GATEWAYID",
    "timeStamp":"TIMESTAMP",
    "relayStatus": [
        {
            "relayID":"RELAYID",
            "requestedRelayStatus": false,
            "SuccessStatus": false,
            "LOG": "String of Log"
        },
        {
            "relayID":"RELAYID",
            "requestedRelayStatus": false,
            "SuccessStatus": false,
            "LOG": "String of Log"
        }
    ]
}
```
- OBJ.relayStatus[1].requestedRelayStatus: The server asked for ON(True) or OFF(False) [Boolean]
- OBJ.relayStatus[1].SuccessStatus: Was it successful? Yes(True) and No(False) [Boolean]

## sensorStatusUpdate:
<br>
Usage: To update with new data or even cumulative data
<br>
Point: You can send multiple satatuses for the same sensorID since we used timeStamp for each one.

```
{
    "gatewayID":"TESTID",
     "sensors" : [
         {
             "sensorID":"SENSORID",
             "T":12,
             "H":23,
             "timeStamp":"Timeformat"
         },
         {
            "sensorID":"SENSORID",
            "T":12,
            "H":23,
            "timeStamp":"Timeformat"
        },
        {
            "sensorID":"SENSORID",
            "T":12,
            "H":23,
            "timeStamp":"Timeformat"
        },
        {
            "sensorID":"SENSORID",
            "T":12,
            "H":23,
            "timeStamp":"Timeformat"
        }
     ]
}
```
