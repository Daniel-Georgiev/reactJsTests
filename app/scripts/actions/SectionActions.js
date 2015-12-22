var AppDispatcher = require('../dispatcher/AppDispatcher');

var SectionActions = {

	create: function(text){
		AppDispatcher.dispatch({
			actionType: "SECTION_CREATE",
			text: text
		})
	},


	destroy: function(id){
		AppDispatcher.dispatch({
			actionType: "SECTION_DESTROY",
			id: id
		})
	}
}

module.exports = SectionActions