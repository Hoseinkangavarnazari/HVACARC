##EmergencyONOFF.json
<br>
Usage: Directly order to turn off/on different relays of each gateway
```
{
    "gatewayID": "GATEWAYID",
    "relayStatus": [
        {
            "relayID":"RELAYID",
            "relaySTATUS": false
        },
        {
            "relayID":"RELAYID2",
            "relaySTATUS": true
        }
    ]
}
```

##sensorStatusUpdate.json
<br>
Usage: UPDATE the sensor data 
- T : Temperature
- H : Humidity

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

##setSchedule.json
USAGE: can set schedule up to one year!
- OBJ.relay[i]: which relays are included in this schedule


```
{
    "gatewayID":"TESTID",
    "timeStamp":"Timeformat",
     "relay": [
         1,2,3,4
     ],
     
    "month1":{
        "week1":{
            "saturday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    },
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            },
            "sunday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            },
            "monday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            },
            "thuesday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            },
            "wednesday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            },           
             "thursday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            },
            "friday":{
                "schedule":[
                    {
                    "start":"12",
                    "finish":"13"
                    }
            ]
            }
            
        }
    }
}
```
