var React = require('react');
var FormActions = require('../actions/FormActions');

var TextAreaCreator = React.createClass({

	handleOnClick: function(){
		FormActions.create("textarea", "");
	},

	render:function(){
		return(
			<button onClick={this.handleOnClick}>Create a textarea</button>
			)
	}
})

module.exports = TextAreaCreator;