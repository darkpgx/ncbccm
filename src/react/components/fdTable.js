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
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}

export class FDTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {date: 'March 14, 2016', verses: 'Deuteronomy 26:16-19', verses2: 'Galatians 5:13-14', verses3: 'Galatians 5:16-26'},
        {date: 'March 15, 2016', verses: 'Galatians 6:9-10', verses2: 'Deuteronomy 28:1-6', verses3: 'Deuteronomy 28:7-19'},
        {date: 'March 16, 2016', verses: 'Deuteronomy 31:5-6', verses2: 'Psalm 40:1-5', verses3: '1 Corinthians 1:8-10, 18-25'},
        {date: 'March 17, 2016', verses: 'Deuteronomy 33:29', verses2: '1 Corinthians 2:9-10', verses3: '1 Corinthians 2:11-16'},
        {date: 'March 18, 2016', verses: 'Joshua 1:5-9', verses2: 'Psalm 37:3-6', verses3: 'Psalm 37:7-26'},
        {date: 'March 19, 2016', verses: '1 Corinthians 4:4-5', verses2: 'Joshua 3:9-11', verses3: 'Joshua 3:12-17'},
        {date: 'March 20, 2016', verses: 'Joshua 7:10-12', verses2: '1 Corinthians 5:1-2', verses3: '1 Corinthians 5:6-13'}
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
