'use strict';

var React = require('react');

var Result = React.createClass({

    render: function() {
        return (
            <div className='results'>
                <div className='repo-name'>
                    <span>{this.props.name}</span>
                </div>
                <div className='repo-owner'>
                    <span>{this.props.owner}</span>
                </div>
            </div>
        );
    }
});

module.exports = Result;
