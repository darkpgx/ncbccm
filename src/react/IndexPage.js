var React = require('react');

import {GeneralAdapter} from '../js/adapters/General';
import {GeneralStore} from '../js/appStores/General';
import {EVENTS} from '../js/constants/General';

var PageContainer = React.createClass({
  getInitialState: function(){
    return this.setDataState();
  },
  componentDidMount: function(){
    GeneralAdapter.getData();
    GeneralStore.addChangeListener(EVENTS.GENERAL_DATA, this._onChange);
  },
  componentWillUnmount: function(){
    GeneralStore.removeChangeListener(EVENTS.GENERAL_DATA, this._onChange);
  },
  setDataState: function(){
    var data = GeneralStore.getData('generalData');
    console.log('data', data);
    return {data: data};
  },
  _onChange: function(){
    this.setState(this.setDataState());
  },
  render: function(){
    return(
      <div>
      <h1>Welcome to Website Prankster</h1>
      What is your boss name? <input type="text" ref="domainInput"></input>
      </div>
    )
  }
});

export const IndexPage = PageContainer;
