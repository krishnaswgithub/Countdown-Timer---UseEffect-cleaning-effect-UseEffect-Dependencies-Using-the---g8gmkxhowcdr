// import React, { Component, useState, useEffect } from "react";
// import '../styles/App.css';

// const App = () => {
//   // write your code here 

//   return (
//     <div className="wrapper">
//       <div id="whole-center">
//         <h1>
//           Reverse countdown for<input id="timeCount" onKeyDown={/* callback function */} /> sec.
//         </h1>
//       </div>
//       <div id="current-time">{/* remaining time */}</div>
//     </div>
//   )
// }


// export default App;

import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [countdownValue, setCountdownValue] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (countdownValue === 0) {
      clearInterval(timer);
    }
  }, [countdownValue]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputValue = Math.floor(Number(event.target.value));
      const startingValue = isNaN(inputValue) ? 0 : inputValue;

      if (timer) {
        clearInterval(timer);
      }

      setCountdownValue(startingValue);
      setTimer(
        setInterval(() => {
          setCountdownValue((prevValue) => prevValue - 1);
        }, 1000)
      );
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{countdownValue}</div>
    </div>
  );
};

export default App;
