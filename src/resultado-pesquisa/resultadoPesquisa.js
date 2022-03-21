import CaixaPesquisa from '../caixa-de-pesquisa/caixaPesquisa.js';
import Categorias from '../categorias/categorias.js';
import ListaProdutos from './lista-produtos/listaProdutos.js';
import React from 'react';
import Error from '../errors/error.js';

const MENSAGEM_ERROR = 'No se puede buscar este término. Vuelva a intentarlo con otro término.'

class ResultadoPesquisa extends React.Component {
    
    constructor(props) {
        super(props)
        const queryParams = new URLSearchParams(window.location.search);
        const search = queryParams.get("search");
        
        this.state = {
            searchValue: search,
            error: null,
            produtos: null
        }
    }
    async loadResults(){
        try{
            const response = await fetch("http://localhost:5000/api/items?q="+this.state.searchValue);
            const result = await response.json();

            if(!response.ok){
                throw new Error(result.error);
            }
            this.setState({
                produtos:result
            });
        }
        catch(e){
            this.setState({
                error: MENSAGEM_ERROR
            });
        }
            
    }
    componentDidMount() {
        if(this.state.searchValue){
            this.loadResults();
        }
    }
   

    render() {

        if(this.state.produtos){
            return (
                <div>
                    <CaixaPesquisa  
                        value={this.state.searchValue}
                        
                    />
                    <Categorias
                        categories={this.state.produtos.categories} 
                    />
                    <ListaProdutos
                        search={this.state.searchValue}
                        products={this.state.produtos.items} 
                    />
                </div>
                
            );
        }
        
        else if (this.state.error){
            return( 
            <div>
                <CaixaPesquisa  
                    value={this.state.searchValue}
                
                />
                <Error msg={this.state.error}/>
            </div>
            )
        }
        else{

           return ( 
                <CaixaPesquisa  
                    value={this.state.searchValue}
                    onSubmit={(search) => this.handleSearch(search)}
                />
           )
        }
    }
}

export default ResultadoPesquisa;