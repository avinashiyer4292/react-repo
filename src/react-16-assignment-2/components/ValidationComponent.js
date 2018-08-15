import React from 'react';

var ValidationComponent = (props) =>{

    let msg = 'Text too short';
    if(props.length > 5)
        msg = 'Text long enough';
    return(
        <p>{msg}</p>
    );
}
export default ValidationComponent;