import React from 'react';
import './css/Counter.css';
const CounterControl = props => {

    return(
        <button className='counter-label' onClick={props.clicked}>{props.label}</button>
    );
}

export default CounterControl;