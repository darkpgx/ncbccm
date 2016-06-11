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
        {date: 'June 06, 2016', verses: 'Ecclesiastes 3:1,11', verses2: 'Ephesians 2:8-10', verses3: 'Psalm 45:1-7'},
        {date: 'June 07, 2016', verses: 'Ephesians 3:20-21', verses2: 'Psalm 18:1-3', verses3: 'Ecclesiastes 5:1-7'},
        {date: 'June 08, 2016', verses: 'Ecclesiastes 7:8-9', verses2: 'Ephesians 4:2-3', verses3: 'Ephesians 4:4-13'},
        {date: 'June 09, 2016', verses: 'Ecclesiastes 12:13-14', verses2: 'Ephesians 5:1-2', verses3: 'Ephesians 5:3-21'},
        {date: 'June 10, 2016', verses: 'Ephesians 6:1-3', verses2: 'Ephesians 6:10-13', verses3: 'Ephesians 6:14-24'},
        {date: 'June 11, 2016', verses: 'Philippians 1:4-6', verses2: 'Philippians 1:7-11', verses3: 'Philippians 1:12-18'},
        {date: 'June 12, 2016', verses: 'Philippians 2:3-4', verses2: 'Philippians 2:5-11', verses3: 'Philippians 2:12-18'}
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
