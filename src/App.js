import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends Component {
  constructor() {
    super();

  }
	
  render() {
    return (
      <div className="App">
        <ReactTable
          columns={[
			{
              Header: "Title",
              accessor: "title.rendered"
            },
            {
              Header: "Author ID",
              accessor: "id"
            },
            {
              Header: "Post Date",
              accessor: "modified"
            }
          ]}

          onFetchData={this.fetchData} 
          defaultPageSize={10}
          className="project-list -striped -highlight"
        />
      </div>
    );
  }
}

export default App;
