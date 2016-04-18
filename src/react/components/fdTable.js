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
        {date: 'April 18, 2016', verses: 'Psalm 34:15-17', verses2: 'Psalm 34:18-22', verses3: 'Matthew 5:13-16'},
        {date: 'April 19, 2016', verses: 'Matthew 6:9-13', verses2: 'Psalm 17:6-9', verses3: 'Psalm 17:10-15'},
        {date: 'April 20, 2016', verses: 'Psalm 31:14-15', verses2: 'Psalm 31:16-19', verses3: 'Matthew 7:7-12'},
        {date: 'April 21, 2016', verses: 'Psalm 57:2-3', verses2: 'Matthew 8:2-3', verses3: 'Matthew 8:5-13'},
        {date: 'April 22, 2016', verses: 'Matthew 9:20-22', verses2: 'Psalm 63:1-5', verses3: 'Psalm 63:6-11'},
        {date: 'April 23, 2016', verses: 'Psalm 141:8-10', verses2: 'Matthew 10:30-31', verses3: 'Matthew 10:32-42'},
        {date: 'April 24, 2016', verses: 'Matthew 11:28-30', verses2: 'Psalm 109:21-27', verses3: 'Psalm 109:28-31'}
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
