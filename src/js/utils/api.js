'use strict';

var qwest = require('qwest'),
    moment = require('moment');

var mySocket = new WebSocket('ws://localhost:8080');

mySocket.onopen('open', function open() {
  mySocket.send('something');
});

module.exports = {
  setUpConnection: function() {
    // socket = io();
    // socket.on('chat message', this.receiveMessage);
  },

  getAllMessages: function() {
    // retrieve data from a database
    // qwest.get or something
    console.log('getting messages');
    // simulate success callback
    //ChatServerActionCreators.receiveAll(rawMessages);
  },

  receiveMessage: function(message) {
    console.log('I got a message');
  },

  createMessage: function(message, threadName) {
    // simulate writing to a database
    var timestamp = moment();
    var id = 'm_' + timestamp;
    var threadID = message.threadID || ('t_' + Date.now());
    var createdMessage = {
      id: id,
      threadID: threadID,
      threadName: threadName,
      authorName: message.authorName,
      text: message.text,
      timestamp: timestamp
    };

    //socket.emit('chat message', JSON.stringify(createdMessage));
  }

};
