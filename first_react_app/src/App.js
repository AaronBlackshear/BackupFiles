import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test.js';

class App extends Component {
  constructor() {
    super()
    this.state = { name: 'Aaron' }

    this.updateName = this.updateName.bind(this);
  }


  updateName(val) {
    if(val === ''){
      this.setState({
        name: 'Aaron'
      })
    }
    else{
      if(val.length <= 25){
        this.setState({
          name: val
        })
      }
      else{
        this.setState({
          name: '25 Character Limit'
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
          <Test prop={this.state.name} />
          <div className='changeName'>
            <input placeholder='Input Name' onChange={e => this.updateName(e.target.value)} />
          </div>
        </header>
      </div>
    );
  }
}



export default App;
