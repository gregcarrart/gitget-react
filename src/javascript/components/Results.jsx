'use strict';

var React = require('react');
var Result = require('./Result.jsx');

var ResultsList = React.createClass({

    render: function() {
        if (this.props.data.repositories) {
            var resultNodes = this.props.data.repositories.map(function (result) {
                return (
                    <Result key={result.id} name={result.name} owner={result.owner} language={result.language} followers={result.followers} url={result.url} description={result.description} />
                );
            });
        }
        return (
            <div className='resultList' id='results-container'>
                {resultNodes}
            </div>
        );
    }

});

module.exports = ResultsList;
