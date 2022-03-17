import CaixaPesquisa from '../caixa-de-pesquisa/caixaPesquisa.js';
import Categorias from '../categorias/categorias.js';
import React from 'react';
import { useParams } from 'react-router-dom';
import  DetalhesProduto  from './detalhesProduto.js';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

class DetalhamentoProduto extends React.Component {
    
    constructor(props) {
        super(props)
        const queryParams = new URLSearchParams(window.location.search);
        
        const search = queryParams.get("search");
        const { id } = props.match.params;
    
        this.state = {
            searchValue: search,
            idProduto:id,
            error: null,
            produtos: null
        }
    }
    loadResults(){
        
        fetch("http://localhost:5000/api/items/"+this.state.idProduto)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    detalhes:result.item
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
        this.loadResults();
    }


    render() {
        if(this.state.detalhes){
            return (
                <div>
                    <CaixaPesquisa  
                        value={this.state.searchValue}
                        onSubmit={(search) => this.handleSearch(search)}
                    />
                    <Categorias
                        categories={this.state.detalhes.categories} 
                    />
                    <DetalhesProduto
                        produto={this.state.detalhes} 
                    />
                </div>
                
            );
        }
        else{
           return ( 
                <CaixaPesquisa  
                    value={this.state.searchValue}
                />
           )
        }
    }
}

export default withRouter(DetalhamentoProduto);