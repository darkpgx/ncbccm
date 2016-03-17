var React = require('react');
import {GeneralAdapter} from '../../js/adapters/General';
import {GeneralStore} from '../../js/appStores/General';

var PageContainer = React.createClass({
  getInitialState: function() {
    return {verses:{__html: ''}};
  },
  componentDidMount: function(){
    GeneralAdapter.getVerses(this.props.params.id);
    GeneralStore.addChangeListener('VERSES_RECEIVED', this._onChange);
  },
  componentWillUnmount: function(){
    GeneralStore.removeChangeListener('VERSES_RECEIVED', this._onChange);
  },
  _onChange: function(){
    this.setState({verses: {__html: GeneralStore.getData('currChapter').text}});
  },
  render: function() {
    return(
      <div id="reqAdmin">
        <h1>{this.props.params.id}</h1>
        <div dangerouslySetInnerHTML={this.state.verses} />
      </div>
    )
  }
});

export const ResourceIndex = PageContainer;
