var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _forms = {};

function create(type, value){
	
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_forms[id] = {
		id: id,
		type: type,
		value: value,

	};
}

function destroy(id){
	delete _forms[id];
}

function update(id, value){
	_forms[id].value = value;
}


var FormStore = assign({},EventEmitter.prototype,{

	getAll: function(){
		return _forms;
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT)
	},

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
});


AppDispatcher.register(function(action){
	var text;
	var type;

	switch(action.actionType){
		case "FORM_CREATE":
			type= action.type.trim();
			if(type !== ''){
				create(type, text);
				FormStore.emitChange();
			}
		break;

		case "FORM_DESTROY":
	      destroy(action.id);
	      FormStore.emitChange();
      	break;

      	case "FORM_UPDATE":
	      update(action.id, action.value);
	      FormStore.emitChange();
      	break;
	}

})

module.exports = FormStore;