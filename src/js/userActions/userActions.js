var AppDispatcher = require("./AppDispatcher");

var userActions = {};

userActions.doSomething = function(data, index){
  AppDispatcher.handleViewAction({
    type: '',
    data: data,
    index: index,
  });
};

module.exports = userActions;
