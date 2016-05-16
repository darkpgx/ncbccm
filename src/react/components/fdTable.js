const React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');
const TouchWrapper = require('./touchWrapper');

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = "#/resources/"+data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{data[rowIndex][field]}</a>
      </Cell>
    );
  }
}

export class FDTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {date: 'May 16, 2016', verses: '1 Chronicles 28:9', verses2: '1 Thessalonians 5:14-18', verses3: 'Psalm 91'},
        {date: 'May 17, 2016', verses: '2 Thessalonians 1:3-4', verses2: '1 Chronicles 29:13-14', verses3: 'Psalm 95'},
        {date: 'May 18, 2016', verses: '2 Thessalonians 2:16-17', verses2: '1 Kings 3:5-14', verses3: 'Psalm 78:11-25'},
        {date: 'May 19, 2016', verses: '2 Thessalonians 3:3-5', verses2: '2 Thessalonians 3:6-10', verses3: '2 Thessalonians 3:11-18'},
        {date: 'May 20, 2016', verses: 'Psalm 97:10-12', verses2: '1 Kings 6:11-13', verses3: 'Romans 1:18-32'},
        {date: 'May 21, 2016', verses: 'Psalm 98:1', verses2: 'Psalm 98:2-9', verses3: 'Romans 2:21-29'},
        {date: 'May 22, 2016', verses: 'Romans 3:23-24', verses2: 'Romans 3:25-26', verses3: '1 Kings 8:56-61'}
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={this.props.width}
        height={410}>
        <Column
          header={<Cell>Date</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="date"
            />
          }
          width={this.props.width*.25}
        />
        <Column
          header={<Cell>Basic Verses</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="verses"
            />
          }
          width={this.props.width*.25}
        />
        <Column
          header={<Cell>If you want more...</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="verses2"
            />
          }
          width={this.props.width*.25}
        />
        <Column
          header={<Cell>If you are really into this...</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="verses3"
            />
          }
          width={this.props.width*.25}
        />
      </Table>
    );
  }
}
