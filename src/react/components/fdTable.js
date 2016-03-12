const React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');

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
        {date: 'March 11, 2016', verses: 'Acts 5:1-2', verses2: '2', verses3: '3'},
        {date: 'March 11, 2016', verses: '1', verses2: '2', verses3: '3'},
        {date: 'March 11, 2016', verses: '1', verses2: '2', verses3: '3'},
        {date: 'March 11, 2016', verses: '1', verses2: '2', verses3: '3'},
        {date: 'March 11, 2016', verses: '1', verses2: '2', verses3: '3'},
        {date: 'March 11, 2016', verses: '1', verses2: '2', verses3: '3'},
        {date: 'March 11, 2016', verses: '1', verses2: '2', verses3: '3'}
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
        height={300}>
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
