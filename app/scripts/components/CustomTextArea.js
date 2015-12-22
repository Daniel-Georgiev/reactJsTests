var React = require('react');

var CustomTextArea = React.createClass({

	getInitialState: function(){
		return{
			writtenChars: 0,
			text :''
		};
	},

	getText: function(){
		return this.state.text
	},

	handleChange: function(e){
		var input = e.target.value;
		if(input.length <= 200){
			this.setState({
				writtenChars: input.length,
				text : input
			},function(){
				input = this.state.text
			});
		}
	},

	handleClear: function(){
		this.setState({
			writtenChars: 0,
			text: ''
		})

	},

	handleBlur: function(){
		if (this.props.onDataChange){
			this.props.onDataChange(this.state.text);
		}
	},

	_save: function(){
		this.props.onSave(this.state.text);
	},


	render: function(){
		return(
			<div className="customTextArea">
				<button onClick={this.handleClear} className="pull-right">clear</button>
				<textarea onChange={this.handleChange} 
						  maxLength="200"
						  onBlur={this.handleBlur}></textarea>
				<p> {this.state.writtenChars} / 200 </p>
			</div>
			)
	}

});

module.exports = CustomTextArea;