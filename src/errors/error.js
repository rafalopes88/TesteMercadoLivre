import React from 'react';
import './error.scss';

function Error(props) {
    
    return( 
        <div className='error'>
            <div className='filler'></div>
            <div className='conteudo'>
                <center>{props.msg}</center>
            </div>
            <div className='filler'></div>
        </div>
    );
}

export default Error;