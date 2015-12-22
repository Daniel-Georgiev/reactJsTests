var AppDispatcher = require('../dispatcher/AppDispatcher');

var FormActions = {

	create: function(type, value){
		AppDispatcher.dispatch({
			actionType: "FORM_CREATE",
			type: type,
			value: value

		})
	},

	update: function(id, value){
		console.log(id, value);
		AppDispatcher.dispatch({
			actionType: "FORM_UPDATE",
			id: id,
			value: value
		})
	},

	destroy: function(id){
		AppDispatcher.dispatch({
			actionType: "FORM_DESTROY",
			id: id
		})
	}
}

module.exports = FormActions