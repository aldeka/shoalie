'use strict';

var React = require('react');


var Composer = React.createClass({
    getInitialState: function() {
        return {
          username: 'Anonymous',
          body: ''
        };
    },
    render: function() {
      return (
        <div>
          <form onSubmit={ this.submitMessage }>
            <input id="u" autoComplete="off" value={ this.state.username } onChange={ this.changeUsername } />
            <input id="m" autoComplete="off" value={ this.state.body } onChange={ this.changeMessage } />
            <button>Send</button>
          </form>
        </div>
      );
    },
    changeUsername: function(evt){
      this.setState({
        username: evt.target.value
      });
    },
    changeMessage: function(evt){
      this.setState({
        body: evt.target.value
      });
    },
    submitMessage: function(){
      this.setState(this.getInitialState());
    }
});

module.exports = Composer;
