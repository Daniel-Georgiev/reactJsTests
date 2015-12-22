var React = require('react');
var SectionItem = require('./SectionItem');

var HeaderSection = React.createClass({

	render: function(){
		if(this.props.allForms == undefined){
			return null;
		}
		if(Object.keys(this.props.allForms).length< 1){
			return null;
		}

		var allSections = this.props.allSections;
		var sections = [];

		for(var key in allSections){
			sections.push(<SectionItem key={key} section={allSections[key]} />);
		}

		return(
			<section>
				<ul id="section-list">
					{sections}
				</ul>
			</section>
			);
	}
})

module.exports = HeaderSection;