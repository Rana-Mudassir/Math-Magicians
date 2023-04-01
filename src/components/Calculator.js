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
    <div>
      <div id="displayInput">{result}</div>
      <Button clicked={handleClick} />
    </div>
  );
}

export default Calculator;
