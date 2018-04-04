import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from "react-table";
import {shallow,render} from 'enzyme';
import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';

it('renders without crashing', () => {
  var mock = new MockAdapter(axios);
  
  mock.onGet('http://localhost/wp-json/test/v1/projects').reply(200, 
  {data:[
	  {"author_name":"Jason Sio","author_email":"jason@code-4-food.life","categories":["Administrative"],
		"post_date":"2018-04-04 20:59:04","post_title":"First admin project"}
  ]}
  );
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a table', () => {
  var mock = new MockAdapter(axios);
  
  mock.onGet('http://localhost/wp-json/test/v1/projects').reply(200, 
  {data:[
	  {"author_name":"Jason Sio","author_email":"jason@code-4-food.life","categories":["Administrative"],
		"post_date":"2018-04-04 20:59:04","post_title":"First admin project"}
  ]}
  );
  const wrapper = shallow(<App />);
  expect(wrapper.find(ReactTable)).to.have.length(1);
});
