var React = require('react');


var SectionItem = React.createClass({

	render: function(){
		var section = this.props.section;

		return(
			<li key={section.id}>
				{section.text}
			</li>
			);
	}
})

module.exports = SectionItem;