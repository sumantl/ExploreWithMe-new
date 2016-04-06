var Promise = require('promise');
var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect('/client');
});

require("./public/server/services/user.service.server.js")(app);
require("./public/server/services/yelp.service.server.js")(app, Promise);
require("./public/server/services/places.service.server.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;


app.listen(port, ipaddress);
