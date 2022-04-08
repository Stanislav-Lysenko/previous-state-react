import React, { useState, useEffect, useRef } from "react";

const usePrevious = (current) => {
  const previous = useRef(current);

  useEffect(() => {
    console.log(previous);
    previous.current = current;
  }, [current]);

  return previous.current;
};

const App = () => {
  const [current, setCurrent] = useState(0);
  const previous = usePrevious(current);

  // console.log("----CURRENT-----", current);
  // console.log("----PREVIOUS-----", previous);
  const handler = () => {
    setCurrent((c) => c + 1);
  };
  return (
    <div>
      <p>
        Current State : {current} <br /> <br />
        Previous State: {previous}
      </p>
      <button onClick={handler}>Next</button>
    </div>
  );
};

export default App;

// == initial output
// 0
// undefined
// == after 1st click
// 1
// 0
// == after 2nd click
// 2
// 1
// == after 3rd click
// 3
// 2
