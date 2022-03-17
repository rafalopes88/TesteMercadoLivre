import CaixaPesquisa from '../caixa-de-pesquisa/caixaPesquisa.js';
import Categorias from '../categorias/categorias.js';
import ListaProdutos from './lista-produtos/listaProdutos.js';
import React from 'react';

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
    loadResults(){
        fetch("http://localhost:5000/api/items?q="+this.state.searchValue)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    produtos:result
                });
            },
            (error) => {
                this.setState({
                    error: error
                });
            }
            )
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