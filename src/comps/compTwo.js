/**
 * Created by vivek_000 on 07-02-2016.
 */
'use strict';
var React = require('React');

var Two = React.createClass({
    render: function () {
        var list = this.props.data.map(function (data) {
            return <li> {data} </li>
        });

        return (
            <ul>
                {list}
            </ul>
        );
    }
});

module.exports = Two;