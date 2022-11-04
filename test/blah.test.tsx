import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChakraCalender } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChakraCalender />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
