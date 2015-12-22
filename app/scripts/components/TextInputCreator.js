var React = require('react');
var FormActions = require('../actions/FormActions');

var TextAreaCreator = React.createClass({

	handleOnClick: function(){
		FormActions.create("textInput", "");
	},

	render:function(){
		return(
			<button onClick={this.handleOnClick}>Create an input</button>
			)
	}
})

module.exports = TextAreaCreator;