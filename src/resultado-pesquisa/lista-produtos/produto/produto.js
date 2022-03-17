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
        <div className='produto' onClick={() => navigate(produto.id+'?search='+props.search)}>
            <div className='imagem'>
                <img src={produto.picture}/>
            </div>
            <div className='detalhes'>
                <div className='preco'>
                    {formatter.format(produto.price.amount/100).replace('ARS','$')} {produto.free_shipping ? <img src={icShipping} alt=''/>:''}
                </div>
                <div className='titulo'>
                    {produto.title}
                </div>
            </div>
            <div className='local'>
                {produto.location}
            </div>
            
        </div>
        

    );
}

export default Produto;