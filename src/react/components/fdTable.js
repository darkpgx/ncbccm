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
        {date: 'May 23, 2016', verses: '2 Chronicles 7:14', verses2: 'Psalm 135:1-3', verses3: 'Romans 4:18-25'},
        {date: 'May 24, 2016', verses: 'Romans 5:6-8', verses2: 'Romans 5:9-11', verses3: 'Psalm 136:1-9'},
        {date: 'May 25, 2016', verses: '1 Kings 11:9-11', verses2: 'Romans 6:11-14', verses3: 'Romans 6:15-23'},
        {date: 'May 26, 2016', verses: 'Proverbs 1:7-9', verses2: 'Proverbs 1:10-16', verses3: 'Proverbs 3:1-12'},
        {date: 'May 27, 2016', verses: 'Proverbs 6:16-19', verses2: 'Proverbs 6:20-24', verses3: 'Romans 8:1-9'},
        {date: 'May 28, 2016', verses: 'Proverbs 9:9-10', verses2: 'Proverbs 9:11-12', verses3: 'Romans 9:14-21'},
        {date: 'May 29, 2016', verses: 'Romans 10:8-9', verses2: 'Romans 10:10-13', verses3: 'Proverbs 12:1-13'}
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
