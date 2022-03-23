import React from 'react';
import './categorias.scss';

function Categorias(props) {
    let apresentacaoCategorias = props.categories.join(' ❯ ');

    return( 
        <section className='categorias'>
            <span className='filler'></span>
            <span className='content'>{apresentacaoCategorias}</span>
            <span className='filler'></span>
        </section>
    );
}

export default Categorias;