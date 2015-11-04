'use strict';

var React = require('react'),
    ReactDOM = require('react-dom'),
    Client = require('./components/client'),
    API = require('./utils/api');

window.React = React; // export for http://fb.me/react-devtools

API.setUpConnection();
API.getAllMessages();

ReactDOM.render(
    <Client />,
    document.getElementById('shoalie')
);
