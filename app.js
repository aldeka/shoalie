'use strict';

var express = require('express');

var app = express();
var http = require('http').Server(app);

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8080 });

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

wss.on('connection', function(ws){
  console.log('a user connected');
  ws.on('disconnect', function(){
    console.log('user disconnected');
  });
  ws.on('chat message', function(msg){
    ws.send('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
