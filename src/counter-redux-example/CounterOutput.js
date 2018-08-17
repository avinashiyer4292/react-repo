import React from 'react';
import './css/Counter.css';
const CounterOutput = props => {
        return(
            <div className='counter-output'>
                <p>Current Counter: {props.value} </p>
            </div>
        );
}
export default CounterOutput;
