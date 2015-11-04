'use strict';

var React = require('react'),
    moment = require('moment'),
    _ = require('lodash'),
    Message = require('./message'),
    Composer = require('./composer');


var Client = React.createClass({
    propTypes: {
        //url: React.PropTypes.string.isRequired
    },
    getInitialState: function() {
        return {
          roomName: 'aldeka',
          messages: [{
            id: 1,
            author: 'Jane',
            timestamp: moment(),
            body: 'hello world',
            roomName: 'aldeka/testing'
          },
          {
            id: 2,
            author: 'Jane',
            timestamp: moment(),
            body: 'Root level message.',
            roomName: 'aldeka'
          }]
        };
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function() {
    },
    render: function() {
      var messages = _.map(this.state.messages, function(message){
        return (
          <Message key={ 'message-' + message.id }
                   message={ message }
                   tag={ this.generateTag(message.roomName) }
                   isAnnouncement = { message.roomName === 'announcement' } />
        );
      }, this);
      return (
          <div className="asdf">
            <h1>{ this.state.roomName }</h1>
            <div id="chatroom">
              { messages }
            </div>
            <Composer />
          </div>
      );
    },
    generateTag: function(roomName) {
      return 'whee';
    }
});

module.exports = Client;
