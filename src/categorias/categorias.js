import React from 'react';
import './categorias.scss';

function Categorias(props) {
    let apresentacaoCategorias = '';
    props.categories.forEach(categoria => {
        apresentacaoCategorias += categoria +' ❯ ';
    });
    //remove a ultima seta
    apresentacaoCategorias = apresentacaoCategorias.slice(0, apresentacaoCategorias.length-3);

    return( 
        <div className='categorias'>
            <div className='filler'></div>
            <div className='content'>{apresentacaoCategorias}</div>
            <div className='filler'></div>
        </div>
    );
}

export default Categorias;