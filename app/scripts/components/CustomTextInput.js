var React = require('react');

var CustomTextInput = React.createClass({

	getInitialState: function(){
		return{
			text :''
		};
	},
	handleChange: function(e){
		var input = e.target.value;
		
		this.setState({				
			text : input
		},function(){
			console.log(this.state.text);
			e.target.value = this.state.text;
		});
	},

	handleClear: function(){
		this.setState({
			text: ''
		})

	},

	render: function(){
		return(
			<div>
				<button onClick={this.handleClear} className="pull-right">clear</button>
				<input onChange={this.handleChange} type="text" />
			</div>
			)
	}
})

module.exports = CustomTextInput;