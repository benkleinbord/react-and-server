/**
 * Created by ben.kl on 3/21/2017.
 */

"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Page Not FOund</h1>
                <p>Whoops! sorry, there is nothing to see here</p>
                <p><Link to="app">Back to Home</Link></p>
            </div>
        )
    }
});

module.exports = NotFoundPage;
