/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import Chakra_calender from "./../src/Chakra_calender/index";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Chakra_calender
        toltip={(date, message) => (
          <Box padding={"0px"} margin={"0px"} borderRadius="4px">
            <Box>TodayDate:{date}</Box>
            <Box>message:{message}</Box>
          </Box>
        )}
        values={{
          "2022-5-6": { value: 1, message: "sick" },
          "2022-5-5": { value: 1, message: "sick" },
          "2022-5-3": { value: 1, message: "sick" },
        }}
        colors={["#adad85", "#004d1a", "#009933", "#00e64d", "#4dff88"]}
        cellSpecing={2}
        legend={["legend", "legend-1", "legend-2", "legend-3"]}
      />
    </div>
  );
}

export default App;
