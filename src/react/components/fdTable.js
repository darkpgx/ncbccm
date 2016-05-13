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
        {date: 'May 9, 2016', verses: 'Psalm 71:1-2', verses2: 'Psalm 71:3-8', verses3: 'Matthew 26:36-42'},
        {date: 'May 10, 2016', verses: 'Psalm 56:3-4', verses2: 'Psalm 56:5-8', verses3: 'Psalm 56:9-13'},
        {date: 'May 11, 2016', verses: 'Matthew 28:18-20', verses2: 'Psalm 55:12-18', verses3: 'Psalm 55:19-23'},
        {date: 'May 12, 2016', verses: '2 Samuel 22:2-4', verses2: '1 Thessalonians 1:1-6', verses3: '1 Thessalonians 1:7-10'},
        {date: 'May 13, 2016', verses: 'Psalm 30:4-5', verses2: '1 Thessalonians 2:4-8', verses3: '1 Thessalonians 2:9-20'},
        {date: 'May 14, 2016', verses: '1 Chronicles 22:11-13', verses2: '1 Thessalonians 3:1-4', verses3: '1 Thessalonians 3:5-13'},
        {date: 'May 15, 2016', verses: '1 Thessalonians 4:9-10', verses2: '1 Thessalonians 4:11-12', verses3: '1 Thessalonians 4:13-18'}
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
