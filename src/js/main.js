'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Client = require('./components/client');
//var io = require('socket.io'),
//var socket = io();

ReactDOM.render(
    <Client />,
    document.getElementById('shoalie')
);
// $('form').submit(function(){
//   socket.emit('chat message', $('#m').val());
//   $('#m').val('');
//   return false;
// });
// socket.on('chat message', function(msg){
//   // $('#messages').append($('<li>').text(msg));
// });
