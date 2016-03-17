var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var assign = require('object-assign');

import {EVENTS} from '../constants/General';
import {AppDispatcher} from '../AppDispatcher';

var _data = {
  generalData: [{
    id: 'loading...',
    name: 'loading...',
  }],
  currChapter: null
};

var store = assign({}, EventEmitter.prototype, {
  getData: function(prop) {
    return _data[prop];
  },

  emitChange: function(eventName) {
    this.emit(eventName);
  },

  addChangeListener: function(eventName, callback) {
    this.on(eventName, callback);
  },

  removeChangeListener: function(eventName, callback) {
    this.removeListener(eventName, callback);
  },  

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    if(payload.source === "VIEW_ACTION"){
      // view actions
      switch(action.type){
      }
    }
    if(payload.source === "SERVER_ACTION"){
      switch(action.type){
        case EVENTS.GENERAL_DATA:
          _data.generalData = action.data;
          break;
        case "VERSES_RECEIVED":
          _data.currChapter = action.data;
        break;
      }
      store.emitChange(action.type);
    }
    return true; // No errors. Needed by promise in Dispatcher.
  })
});

export const GeneralStore = store;
