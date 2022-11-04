import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ChakraCalender from './../src/Chakra_calender/index';

const App = () => {
  return (
    <div>
      <ChakraCalender
        values={{ '2022-5-12': { value: 2, message: 'leave' } }}
        legend={['leave', 'late', 'WFH']}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
