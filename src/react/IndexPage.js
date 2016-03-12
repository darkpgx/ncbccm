import React from 'react'
import {GeneralAdapter} from '../js/adapters/General';
import {GeneralStore} from '../js/appStores/General';
import {EVENTS} from '../js/constants/General';
import {FDTable} from './components/fdTable';

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
      <div ref="mainContainer">
        <h4>Weekly Reading List</h4>
        <FDTable width={this.refs.mainContainer ? this.refs.mainContainer.clientWidth : 0}/>
      </div>
    )
  }
});

export const IndexPage = PageContainer;
