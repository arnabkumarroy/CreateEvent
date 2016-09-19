var express=require('express');
var path=require('path');
var eventController=require('./eventController');
var bodyParser=require('body-parser');

var port=8080;
var app=express();
var rootPath=path.normalize(__dirname+'/../');
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
console.log('rootPath'+rootPath);
app.use(express.static(rootPath+'/app'));
app.get('/data/event/:id',eventController.get);
app.post('/data/event/:id',eventController.save);
app.get('*', function(req, res){ res.sendFile(rootPath + '/app/EventDetails.html'); });
app.listen(port);
console.log('Listening to the port '+port);