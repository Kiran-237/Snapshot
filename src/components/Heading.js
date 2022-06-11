import React from 'react';

function Heading(){
    const style={
        display: 'inline',
        backgroundSize: '50%',
        background: 'linear-gradient(90deg, red,purple,pink)',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        fontWeight: 'Bold',
        fontSize: '45px'    
    }
    
    return(
        <div style={{marginTop:'80px'}}>
            <h1 style={style}>Pictures</h1>
        </div>
    )
}
export default Heading;