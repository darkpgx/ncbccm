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
        {date: 'March 21, 2016', verses: '1 Corinthians 6:9-11', verses2: '1 Corinthians 6:18-20', verses3: 'Joshua 10:8-15'},
        {date: 'March 22, 2016', verses: '1 Corinthians 7:18-19', verses2: '1 Corinthians 7:32-35', verses3: 'Joshua 14:6-15'},
        {date: 'March 23, 2016', verses: '1 Corinthians 8:1-3', verses2: '1 Corinthians 8:4-6', verses3: '1 Corinthians 8:7-13'},
        {date: 'March 24, 2016', verses: '1 Corinthians 9:24-25', verses2: '1 Corinthians 9:26-27', verses3: 'Joshua 20:1-3,9'},
        {date: 'March 25, 2016', verses: 'Joshua 21:43-45', verses2: 'Psalm 47:1-4', verses3: '1 Corinthians 10:12-14'},
        {date: 'March 26, 2016', verses: '1 Corinthians 11:23-26', verses2: 'Joshua 23:6-11', verses3: 'Joshua 23:12-16'},
        {date: 'March 27, 2016', verses: '1 Corinthians 12:4-7', verses2: '1 Corinthians 12:8-11', verses3: '1 Corinthians 12:12-28'}
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
        height={400}>
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
