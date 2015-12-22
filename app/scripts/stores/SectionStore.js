var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _items = {};

function create(text){
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	_items[id] = {
		id: id,
		text: text
	};
}

var SectionStore = assign({},EventEmitter.prototype,{

	getAll: function(){
		return _items;
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

	switch(action.actionType){
		case "SECTION_CREATE":
			text = action.text.trim();
			if(text !== ''){
				create(text);
				SectionStore.emitChange();
			}
		break;

		case "SECTION_DESTROY":
	      destroy(action.id);
	      SectionStore.emitChange();
      	break;
	}

})

module.exports = SectionStore;