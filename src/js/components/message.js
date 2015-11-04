'use strict';

var React = require('react'),
    moment = require('moment'),
    classNames = require('classnames');;


var Message = React.createClass({
    propTypes: {
        message: React.PropTypes.object.isRequired,
        isAnnouncement: React.PropTypes.bool.isRequired,
        tag: React.PropTypes.string
    },
    render: function() {
      var cName = classNames({
        message: true,
        announcement: this.props.isAnnouncement
      });
      return (
        <div className={ cName } >
          <div>
            <span>{ this.props.message.author }</span>
            <span>{ this.props.tag }</span>
            <span>{ this.props.message.timestamp.format('MMM Do YY') }</span>
          </div>
          <div>
            { this.props.message.body }
          </div>
        </div>
      );
    },
});

module.exports = Message;
