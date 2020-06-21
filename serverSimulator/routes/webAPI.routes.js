var express = require('express');
var webAPI_router = express.Router();

// Require controller modules.
var webAPI_controller = require('../controllers/webAPI.controller');


webAPI_router.post('/updatedata', webAPI_controller.updateData);



module.exports = webAPI_router;