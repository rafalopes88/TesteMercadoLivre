import React from 'react';
import './error.scss';

function Error(props) {
    
    return( 
        <main className='error'>
            <span className='filler'></span>
            <span className='conteudo'>
                <center>{props.msg}</center>
            </span>
            <span className='filler'></span>
        </main>
    );
}

export default Error;