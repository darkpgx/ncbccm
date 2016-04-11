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
        {date: 'April 11, 2016', verses: '2 Corinthians 11:2-3', verses2: '2 Corinthians 11:4-5, 13-15', verses3: '1 Samuel 12:14-25'},
        {date: 'April 12, 2016', verses: '1 Samuel 13:11-14', verses2: '2 Corinthians 12:9-10', verses3: '2 Corinthians 12:11-21'},
        {date: 'April 13, 2016', verses: '2 Corinthians 13:11-14', verses2: '1 Samuel 14:1-7', verses3: '1 Samuel 14:8-23'},
        {date: 'April 14, 2016', verses: 'Matthew 1:21-23', verses2: '1 Samuel 15:10-11', verses3: '1 Samuel 16:1, 7, 12-13'},
        {date: 'April 15, 2016', verses: 'Psalm 9:1-2', verses2: 'Psalm 9:3-10', verses3: '1 Samuel 17:45-51'},
        {date: 'April 16, 2016', verses: 'Matthew 3:16-17', verses2: 'Psalm 11:4-7', verses3: '1 Samuel 18:12-16'},
        {date: 'April 17, 2016', verses: 'Psalm 59:9-10', verses2: 'Psalm 59:11-17', verses3: 'Matthew 4:18-24'}
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
