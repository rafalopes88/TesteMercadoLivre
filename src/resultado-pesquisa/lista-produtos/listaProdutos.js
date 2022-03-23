import React from 'react';
import './listaProdutos.scss';
import Produto from './produto/produto.js'

function ListaProdutos(props) {
    let listaProdutos = []; 
    props.products.map((product, index) => {
        listaProdutos.push(<Produto key={index} produto={product} search={props.search} />);
        listaProdutos.push(<center key={index+'center'}><hr key={index+'divisor'} className='divisor'></hr></center>)
    });
    listaProdutos.pop();
    return( 
        <main >
            <span className='filler'></span>
            <span className='conteudo'>
                <ul>
                    {listaProdutos}
                </ul>
            </span>
            <span className='filler'></span>
        </main>
    );
}

export default ListaProdutos;