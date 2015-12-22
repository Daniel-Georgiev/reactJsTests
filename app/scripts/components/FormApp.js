var React = require('react');
var CustomForm = require('./CustomForm');
var FormStore = require('../stores/FormStore');
var HeaderSection = require('./HeaderSection.react');

function getSectionState(){

	return{
		allSections: FormStore.getAll()
	}
}

var FormApp = React.createClass({
	_onChange: function(){
		this.setState(getSectionState());
	},
	getInitialState: function(){
		return getSectionState();
	},

	componentDidMount: function(){
		FormStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		FormStore.removeChangeListener(this._onChange);
	},

	render: function(){
		return(
			<div>
				<HeaderSection allSections={this.state.allSections} />
				<CustomForm />
			</div>	
			)
	}
})

module.exports = FormApp;