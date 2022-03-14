import CaixaPesquisa from '../caixa-de-pesquisa/caixaPesquisa.js';
import React from 'react';

class ResultadoPesquisa extends React.Component {
    
    constructor(props) {
        super(props)
        const queryParams = new URLSearchParams(window.location.search);
        const search = queryParams.get("search");

        this.state = {
            searchValue: search,
            error: null,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q="+this.state.searchValue)
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                error
                });
            }
            )
    }

    
    handleSearch(search){

    }

    render() {
        return (
            <CaixaPesquisa  
                value={this.state.searchValue}
                onSubmit={(search) => this.handleSearch(search)}
            />
        );
    }
}

export default ResultadoPesquisa;