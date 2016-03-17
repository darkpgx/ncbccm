import {EVENTS} from '../constants/General';
import {AppDispatcher} from '../AppDispatcher';

var adapter = {};

adapter.getData = function(){
  $.get('/data', function(data){
    AppDispatcher.handleServerAction({
      type: EVENTS.GENERAL_DATA,
      data: data
    });
  });
};

adapter.getVerses = function(verses){
  $.get('/verses', {verses: verses}, function(data){
    AppDispatcher.handleServerAction({
      type: "VERSES_RECEIVED",
      data: data
    });
  })
};

export const GeneralAdapter = adapter;
