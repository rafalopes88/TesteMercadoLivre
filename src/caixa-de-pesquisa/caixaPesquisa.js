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
    return (
      <header className='caixaPesquisa' >
        <span className='filler'></span>
        <div className='content'>
          <figure className='logo'>
            <img src={logo} alt=''/>   
          </figure>
          <span className='searchInput'>
            <form onSubmit={() => this.props.onSubmit? this.props.onSubmit(this.state.value): ''}>
              <div className='searchText'>
                <input type="text" placeholder='Nunca dejes de buscar' name="search" value={this.state.value?this.state.value:''} onChange={this.handleChange}/>
              </div>
              <button >
                <img  src={seachButton}  />
              </button>
            </form>
          </span>
        </div>
        <span className='filler'></span>
      </header>
    );
  }
}

export default CaixaPesquisa;