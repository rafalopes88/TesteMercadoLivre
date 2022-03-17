import React from 'react';
import './detalhesProduto.scss';

function DetalhesProduto(props) {
    console.log(props.produto);
    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: props.produto.price.currency,
    });
    
    return( 
        <div className='wrapper'>
            <div className='filler'></div>
            <div className='detalhesProduto'>
                <div className='conteudo'>
                    <div className='imagem'>
                        <img src={props.produto.picture}/>
                    </div>
                    <div className='texto'>
                        <div className='condition'>
                            {props.produto.condition} - {props.produto.sold_quantity} vendidos
                        </div>
                        <div className='title'>
                            {props.produto.title}
                        </div>
                        <div className='price'>
                            {formatter.format(props.produto.price.amount/100).replace('ARS','$')}
                        </div>
                        <button>
                            Comprar
                        </button>
                    </div>
                </div>
                <div className='description'>
                    <div className='title'>
                        Descripción del producto
                    </div>
                    <div className='conteudo'>
                        {props.produto.description}
                    </div>
                </div>
            </div>    
            <div className='filler'></div>
        </div>
    );
}

export default DetalhesProduto;