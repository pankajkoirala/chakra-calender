
import React from 'react';
import './App.css';
import Chakra_calender from './../src/Chakra_calender/index';

function App() {
  return (
    <div className="App">
{    // eslint-disable-next-line react/jsx-pascal-case
}    <Chakra_calender values={{'2022-4-6':2,'2022-5-6':3,'2022-7-6':4}} colors={['#adad85', '#004d1a', '#009933', '#00e64d', '#4dff88']} cellSpecing={2}  legend={['legend','legend-1','legend-2','legend-3']} />
    </div>
  );
}

export default App;
