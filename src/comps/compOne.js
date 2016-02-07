/**
 * Created by vivek_000 on 07-02-2016.
 */
'use strict';
var React = require('React');

var One = React.createClass({
    getInitialState: function () {
        return {data: 'Hello'};
    },
    componentDidMount: function () {
        var that = this;
        setTimeout( function(){that.setState({data: 'bye'});},100);
    },
    render: function () {
        return (
            <div>{this.state.data}</div>
        );
    }
});

module.exports = One;