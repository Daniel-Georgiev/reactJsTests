var React = require('react');
var CustomTextArea = require('./CustomTextArea');
var CustomTextInput = require('./CustomTextInput');
var SectionActions = require('../actions/SectionActions')
var FormActions = require('../actions/FormActions');
var FormStore = require('../stores/FormStore');
var TextAreaCreator = require('./TextAreaCreator');
var TextInputCreator = require('./TextInputCreator');

function getFormsState(){
	return{
		allForms: FormStore.getAll()
	}
}

var CustomForm = React.createClass({

	// Helpers

	generatePostItems: function(allForms){

		if(Object.keys(allForms).length< 1){
			return null;
		}

		var forms = [];

		for(var key in allForms){
			if(allForms[key].type == "textarea"){
				forms.push(<li key={key}>
						<button data-id={key} onClick={function(e){
							this.handleItemRemove(key);
						}.bind(this)}>remove</button>
						<CustomTextArea key={key}
						data-id={key} 
						onDataChange={function(event){
							this.onCustomTextAreaChange(key, value);
						}.bind(this)} />
						
				</li>
				);
			}
			else if(allForms[key].type == "textInput"){
				forms.push(<li key={key}>
					<button data-id={key} onClick={function(e){
							this.handleItemRemove(key);
						}.bind(this)}>remove</button>
					<CustomTextInput key={key}  />
				</li>);
			}
			
		}


		return (
			<ul id="todo-list">
				{forms}
			</ul>
		)
	},

	// Event handler

	handleItemRemove : function(id){
		FormActions.destroy(id)
	},

	onCustomTextAreaChange: function(id, value){

		FormActions.update(id, value);
	},

	_onChange: function(){
		this.setState(getFormsState());
	},

	// Life cycle`

	getInitialState: function(){
		return getFormsState();
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
				<TextAreaCreator />
				<TextInputCreator />
				{this.generatePostItems(this.state.allForms)}
				<button onClick={this._onSave}>Save</button>
			</div>
			)
	}


})

module.exports = CustomForm;