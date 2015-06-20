'use strict';

var React = require('react');
var FormField = require('./FormField.jsx');
var Results = require('./Results.jsx');

var Home = React.createClass({
    handleFormSubmit: function(searchTerm) {
        var apiPageUrl = 'https://api.github.com/legacy/repos/search/' + searchTerm.searchTerm;

        $.ajax({
          url: apiPageUrl,
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.setState({data:data});
          }.bind(this),
          error: function() {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    render: function() {
        return (
            <div>
                <h1>Git Get 2.0</h1>
                <FormField onFormSubmit={this.handleFormSubmit} />
                <Results data={this.state.data} />
            </div>
        );
    }

});

module.exports = Home;
