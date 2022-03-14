import React from 'react';
import logo from '../assets/Logo_ML.png';
import seachButton from '../assets/ic_Search.png';
import './caixaPesquisa.scss';

class CaixaPesquisa extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {value:  this.props.value};

    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    return <div className='caixaPesquisa' >
      
      <div className='logo'>
        <img src={logo} alt=''/>   
      </div>
      <div className='searchInput'>
        <form onSubmit={() => this.props.onSubmit(this.state.value)}>
          <div className='searchText'>
            <input type="text" placeholder='Buscar produtos' name="search" value={this.state.value} onChange={this.handleChange}/>
          </div>
          <button >
            <img  src={seachButton}  />
          </button>
        </form>
      </div>
      
    </div>;
  }
}

export default CaixaPesquisa;