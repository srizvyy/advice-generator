import React from 'react';

function DisplayAdvice(advice) {

  return (
    <div id='box'>
        <h1 className='advice'>{advice.advice[1].advice}</h1>
        <button className='button' onClick={() => window.location.reload(false)}><span>New Advice</span></button>
    </div>
  )
}

export default DisplayAdvice;
