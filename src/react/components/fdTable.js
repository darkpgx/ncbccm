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
        {date: 'April 25, 2016', verses: '1 Chronicles 10:13-14', verses2: 'Matthew 12:33-37', verses3: 'Matthew 12:46-50'},
        {date: 'April 26, 2016', verses: 'Psalm 140:6-8', verses2: 'Psalm 140:9-13', verses3: 'Matthew 13:45-50'},
        {date: 'April 27, 2016', verses: 'Psalm 142:5', verses2: 'Matthew 14:14-21', verses3: 'Matthew 14:22-36'},
        {date: 'April 28, 2016', verses: 'Matthew 15:18-19', verses2: 'Matthew 15:22-28', verses3: 'Matthew 15:29-38'},
        {date: 'April 29, 2016', verses: 'Psalm 139:23-24', verses2: 'Matthew 16:13-19', verses3: 'Matthew 16:20-28'},
        {date: 'April 30, 2016', verses: 'Matthew 17:14-18', verses2: 'Matthew 17:19-27', verses3: 'Psalm 68:1-6'},
        {date: 'May 1, 2016', verses: 'Matthew 18:2-6', verses2: 'Matthew 18:10-14', verses3: 'Matthew 18:18-22'}
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
