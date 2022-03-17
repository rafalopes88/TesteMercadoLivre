import CaixaPesquisa from '../caixa-de-pesquisa/caixaPesquisa.js';
import Categorias from '../categorias/categorias.js';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  DetalhesProduto  from './detalhesProduto.js';
import './detalhamentoProduto.scss'

export function withRouter(Children){
    return(props)=>{

       const params= useParams();
       const navigate = useNavigate();
       return <Children {...props}  params = {params} navigate={navigate}/>
   }
}

class DetalhamentoProduto extends React.Component {
    
    constructor(props) {
        super(props)
        const queryParams = new URLSearchParams(window.location.search);
        
        const search = queryParams.get("search");
        const { id } = props.params;
    
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
            })
    }
    componentDidMount() {
        if(this.state.idProduto){
            this.loadResults();
        }
    }

    voltarPesquisaSearch(search){
        this.props.navigate('/items?search='+search, {replace:true});
    }

    render() {
        if(this.state.detalhes){
            return (
                <div className='detalhamentoProduto'>
                    <CaixaPesquisa  
                        value={this.state.searchValue}
                        onSubmit={(search) => this.voltarPesquisaSearch(search)}
                    />
                    <Categorias
                        categories={this.state.detalhes.categories} 
                    />
                    <DetalhesProduto
                        produto={this.state.detalhes} 
                    />
                    <center><div className='botaoVoltar' onClick={()=>{this.voltarPesquisaSearch(this.state.searchValue)}}>Volver a la lista de productos</div></center>
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