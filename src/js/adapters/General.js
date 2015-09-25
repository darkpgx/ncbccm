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

export const GeneralAdapter = adapter;
