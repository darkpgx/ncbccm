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
        {date: 'June 13, 2016', verses: 'Philippians 3:7-9', verses2: 'Philippians 3:10-14', verses3: 'Philippians 3:15-21'},
        {date: 'June 14, 2016', verses: 'Philippians 4:4-7', verses2: 'Philippians 4:8-9', verses3: 'Philippians 4:10-13'},
        {date: 'June 15, 2016', verses: 'Colossians 1:15-17', verses2: 'Colossians 1:18-20', verses3: 'Colossians 1:21-23'},
        {date: 'June 16, 2016', verses: 'Colossians 2:13-15', verses2: '1 Kings 17:1-6', verses3: '1 Kings 17:7-16'},
        {date: 'June 17, 2016', verses: 'Colossians 3:20', verses2: 'Colossians 3:23-25', verses3: '1 Kings 21:25-29'},
        {date: 'June 18, 2016', verses: 'Colossians 4:2', verses2: 'Colossians 4:5-6', verses3: 'Colossians 4:7-11'},
        {date: 'June 19, 2016', verses: '2 Kings 2:8', verses2: '1 Timothy 1:12-14', verses3: '1 Timothy 1:15-19'}
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
