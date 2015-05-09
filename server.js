var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var EventModel = require('./server/model.js'),
    createTestData = require('./server/testdata.js'),
    createRoutes = require('./server/routes.js');

var eventModel = EventModel();
createTestData(eventModel);

app.use(express.static('public'));
app.use(bodyParser.json());

createRoutes(app, eventModel);

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});