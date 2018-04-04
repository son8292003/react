import React, { Component } from 'react';
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";


const apiurl = "http://localhost/wp-json/test/v1/projects";

class App extends Component {
  constructor() {
    super();
	this.state = {
      data: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }
	
  fetchData(state, instance) {
    this.setState({ loading: true });
    axios.get(apiurl)
      .then(res => {
      this.setState({
        data: res.data,
        pages: 1,
        loading: false
      });
    });
  }
	
  render() {
	const { data, pages, loading } = this.state;
    return (
      <div className="App">
        <ReactTable
          columns={[
			{
              Header: "Title",
              accessor: "post_title"
            },
            {
              Header: "Author",
              accessor: "author_name"
            },
            {
              Header: "Post Date",
              accessor: "post_date"
            },
            {
              Header: "Author email",
              accessor: "author_email"
            },
            {
              Header: "Categories",
              accessor: "categories"
            }
          ]}
          data={data}
          pages={pages}
          loading={loading}
          onFetchData={this.fetchData} 
          defaultPageSize={10}
          className="project-list -striped -highlight"
        />
      </div>
    );
  }
}

export default App;
