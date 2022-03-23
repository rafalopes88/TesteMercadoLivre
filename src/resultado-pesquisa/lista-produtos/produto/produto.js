import React from 'react';
import './produto.scss';
import icShipping from '../../../assets/ic_shipping.png';
import { useNavigate } from 'react-router-dom';

function Produto(props) {
    
    const navigate = useNavigate()
    const produto = props.produto;

    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: produto.price.currency,
    });
    
    return( 
        <li className='produto' onClick={() => navigate(produto.id+'?search='+props.search)}>
            <figure className='imagem' alt=''>
                <img src={produto.picture}/>
            </figure>
            <section className='detalhes'>
                <div className='preco'>
                    {formatter.format(produto.price.amount/100).replace('ARS','$')} {produto.free_shipping ? <img src={icShipping} alt=''/>:''}
                </div>
                <div className='titulo'>
                    {produto.title}
                </div>
            </section>
            <section className='local'>
                {produto.location}
            </section>
            
        </li>
        

    );
}

export default Produto;