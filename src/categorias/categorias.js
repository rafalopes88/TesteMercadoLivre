import React from 'react';
import './categorias.scss';

function Categorias(props) {
    let apresentacaoCategorias = props.categories.join(' ❯ ');

    return( 
        <div className='categorias'>
            <div className='filler'></div>
            <div className='content'>{apresentacaoCategorias}</div>
            <div className='filler'></div>
        </div>
    );
}

export default Categorias;