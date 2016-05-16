import React from 'react'
import {GeneralAdapter} from '../js/adapters/General';
import {GeneralStore} from '../js/appStores/General';
import {EVENTS} from '../js/constants/General';
import {FDTable} from './components/fdTable';
import {Tabs, Tab, ResponsiveEmbed} from 'react-bootstrap';

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
        <h5>Click on "Project Lord's Prayer" to see our first awesome assignment!!! Kudos to everyone who memoriezed the Lord's Prayer and remember to use them in times of need! Cheers!!!</h5>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Weekly Reading">
              <FDTable width={this.refs.mainContainer ? this.refs.mainContainer.clientWidth : 0}/>
            </Tab>
            <Tab eventKey={2} title="Project Lord's Prayer">
              Once again, everyone did a great job and pat yourself on the shoulders, you deserve it!!!
              <ResponsiveEmbed a16by9>
                <iframe width="640" height="360" src="https://www.youtube.com/embed/P11brz45Ut0" frameborder="0" allowfullscreen></iframe>
              </ResponsiveEmbed>
            </Tab>
          </Tabs> 
      </div>
    )
  }
});

export const IndexPage = PageContainer;
