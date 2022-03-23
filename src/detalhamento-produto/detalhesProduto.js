import React from 'react';
import './detalhesProduto.scss';

function DetalhesProduto(props) {
    
    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: props.produto.price.currency,
    });
    
    return( 
        <main>
            <span className='filler'></span>
            <span className='detalhesProduto'>
                <section className='conteudo'>
                    <figure className='imagem' >
                        <center><img src={props.produto.picture} alt=''/></center>
                    </figure>
                    <span className='texto'>
                        <div className='condition'>
                            {props.produto.condition.replace('new', 'Nuevo').replace('used','usado')} - {props.produto.sold_quantity} vendidos
                        </div>
                        <div className='title'>
                            <b>{props.produto.title}</b>
                        </div>
                        <div className='price'>
                            {formatter.format(props.produto.price.amount/100).replace('ARS','$')}
                        </div>
                        <button>
                            Comprar
                        </button>
                    </span>
                </section>
                <section className='description'>
                    <div className='title'>
                        Descripción del producto
                    </div>
                    <div className='conteudo'>
                        {props.produto.description}
                    </div>
                </section>
            </span>    
            <span className='filler'></span>
        </main>
    );
}

export default DetalhesProduto;