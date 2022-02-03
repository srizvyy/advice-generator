import React, {useState, useEffect} from 'react';
import DisplayAdvice from './DisplayAdvice';

function AdviceContainer() {
    const [adviceData, setAdviceData] = useState([])
    useEffect(() => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(data => setAdviceData(data))
        .catch(err => console.log('ERROR'))
    }, [])

  return (
  <div>
      <div>
          
        {Object.entries(adviceData).map((advice) => {
            return (
                <DisplayAdvice advice={advice}/>
            )
        })}
      </div>
  </div>
  )
}

export default AdviceContainer;
