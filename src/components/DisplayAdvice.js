import React from 'react';

function DisplayAdvice(advice) {
    
  return (
    <div id='box'>
        <h1 className='advice'>{advice.advice[1].advice}</h1>
        <button>New Advice</button>
    </div>
  )
}

export default DisplayAdvice;
