// Require express and create an instance of it
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const PORT = 2999;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'))

//  serve dashboard page ---------------------------------
const serverRouter = express.Router();
serverRouter.get('/', (req, res) => {
    console.log("received a request from browser");
    res.sendFile(path.join(__dirname + '/test.html'));
})
app.use('/page', serverRouter);

// --------------------------------------------------------





// status receiver ----------------------------------------
var gatewayRouter = require('./routes/node.routes');
app.use('/status', gatewayRouter);
// --------------------------------------------------------



// status receiver ----------------------------------------
var webAPIRouter = require('./routes/webAPI.routes');
app.use('/webapi', webAPIRouter);
// --------------------------------------------------------




// On localhost:3000/welcome
app.post('/temperature', function(req, res) {
    console.log(req.body);
    res.send('test');
});






// start the server in the port 3000 !
app.listen(PORT, function() {
    console.log('Server application is listening port ' + PORT + ".");
});