'use strict';

var React = require('react');

var FormField = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var searchTerm = React.findDOMNode(this.refs.searchTerm).value.trim();
        if (!searchTerm) {
            return;
        }
        this.props.onFormSubmit({searchTerm: searchTerm.toString()});
        React.findDOMNode(this.refs.searchTerm).value = '';
        return;
    },

    render: function() {
        return (
            <form className="formField" id="search-form" onSubmit={this.handleSubmit}>
                <input className="search-field" type="text" placeholder="Search…" ref="searchTerm" />
                <input className="search-button" type="submit" value="Search" />
            </form>
        );
    }

});

module.exports = FormField;
