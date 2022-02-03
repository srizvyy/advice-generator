import React from 'react';

function DisplayAdvice(advice) {
    console.log(advice)
  return (
  <div>
      <h1>{advice.advice[1].advice}</h1>
  </div>
  )
}

export default DisplayAdvice;
