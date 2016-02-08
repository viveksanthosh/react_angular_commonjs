/**
 * Created by vivek_000 on 07-02-2016.
 */
'use strict';
var React = require('React');
var Two = require('./compTwo');
var One = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        var that = this;
        setTimeout(function () {
            that.setState({data: [2, 3, 4]});
        }, 100);
    },
    render: function () {
        return (
            <Two data={this.state.data}></Two>
        );
    }
});

module.exports = One;