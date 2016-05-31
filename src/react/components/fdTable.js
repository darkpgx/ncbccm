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
        {date: 'May 30, 2016', verses: 'Romans 11:36', verses2: 'Proverbs 15:1-5', verses3: 'Proverbs 15:6-16'},
        {date: 'May 31, 2016', verses: 'Romans 12:2', verses2: 'Proverbs 18:1-5', verses3: 'Proverbs 18:6-24'},
        {date: 'June 01, 2016', verses: 'Romans 13:8-9', verses2: 'Proverbs 19:1-5', verses3: 'Proverbs 19:6-29'},
        {date: 'June 02, 2016', verses: 'Romans 14:10-12', verses2: 'Proverbs 22:1-5', verses3: 'Proverbs 22:6-29'},
        {date: 'June 03, 2016', verses: 'Proverbs 25:21-22', verses2: 'Proverbs 27:1-2', verses3: 'Romans 15:1-7'},
        {date: 'June 04, 2016', verses: 'Psalm 60:12', verses2: 'Proverbs 29:23-27', verses3: 'Romans 16:17-20'},
        {date: 'June 05, 2016', verses: 'Proverbs 30:5', verses2: 'Psalm 33:18-22', verses3: 'Ephesians 1:1-14'}
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
