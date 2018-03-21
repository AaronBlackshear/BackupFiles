import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'

class App extends Component {
  constructor() {
    super()

      this.state = {
        number: 0
      }
      this.addNum = this.addNum.bind(this);
      this.minusNum = this.minusNum.bind(this);
  }

  addNum(){
    this.setState({
      number: this.state.number + 1
    })
  }

  minusNum(){
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Child name={'Batshear'} num={this.state.number} minus={this.minusNum} add={this.addNum}/>
      </div>
    );
  }
}

export default App;
