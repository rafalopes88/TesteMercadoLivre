import React from 'react';
import './listaProdutos.scss';
import Produto from './produto/produto.js'

function ListaProdutos(props) {
    let listaProdutos = []; 
    props.products.map((product, index) => {
        listaProdutos.push(<Produto key={index} produto={product} search={props.search} />);
        listaProdutos.push(<center key={index+'center'}><div key={index+'divisor'} className='divisor'></div></center>)
    });
    listaProdutos.pop();
    return( 
        <div className='listaProdutos'>
            {listaProdutos}
        </div>
    );
}

export default ListaProdutos;