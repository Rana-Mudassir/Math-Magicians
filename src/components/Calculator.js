import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.value;
    setState((state) => calculate(state, buttonName));
  };

  const { total, next } = state;
  let result = 0;
  if (total === null && next !== null) {
    result = next;
  } else if (total !== null && next === null) {
    result = total;
  } else {
    result = next;
  }

  return (
    <>
      <div className="wrapper">
        <div id="cal-div1">
          <h1>Lets do some Math!</h1>
        </div>
        <div id="cal-div2">
          <div id="displayInput">{result}</div>
          <Button clicked={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Calculator;
