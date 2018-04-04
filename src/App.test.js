import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from "react-table";
import {shallow} from 'enzyme';
import { expect } from 'chai';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a table', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ReactTable)).to.have.length(1);
});