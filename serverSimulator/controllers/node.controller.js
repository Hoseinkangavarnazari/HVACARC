// var Node = require('../models/node.model');
// var { DateTime } = require('luxon');



// Display detail page for a specific Author.

exports.statusUpdate = async(req, res) => {
    console.log(":::", "Received an unprocessed message. [Gateway Status update EndPoint]")
        // define schema here
    let IP;
    let ID;

    console.log("Gateway ID: " + req.body.GID);
    console.log("sensors: " + req.body.sensors);
    // //  parsing incoming data ------------------------------------------------
    // if (req.body.IP && req.body.ID) {
    //     IP = req.body.IP;
    //     ID = req.body.ID;
    //     console.log(":::", `The requested IP is ${IP} , The ID is : ${ID}`)
    // } else {
    //     throw new Error("::: There is something wrong with the input value.")
    // }
    // // ------------------------------------------------------------------------

    // // regex check should be here

    // // check for duplicates ---------------------------------------------------

    // duplicate = await Node.find({
    //     $or: [
    //         { IP: IP },
    //         { ID: ID }
    //     ]
    // })

    // if (duplicate.length > 0) {
    //     res.send("Cannot register requested Node. The Node spec is duplicated");
    //     console.log("::: Cannot register requested Node. The Node spec is duplicated")
    //     return
    // }

    // // ------------------------------------------------------------------------

    // var newNode = new Node({
    //     IP: IP,
    //     ID: ID,
    // });
    // try {
    //     // newNode.save();
    //     res.send("::: Saved into the database.");
    //     console.log(":::  Saved into the database.")

    // } catch (err) {
    //     // res.send("::: There is something wrong with saving to DB");
    //     console.log("::: There is something wrong with saving to DB")
    // }
}