import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      input: ''
    }
    this.getData = this.getData.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    let promise = axios.get("https://swapi.co/api/people");
    promise.then(response => {
      this.setState({
        people: response.data.results
      })
    })
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  getData() {
    // let num = this.state.input;
    axios.get(`https://swapi.co/api/people/?page=${this.state.input}`).then(res => {
      this.setState({
        people: res.data.results
      })
    })
  }

  render() {
    const { people } = this.state;
    let peopleList = people.map((e,i) => {
      return (
      <h2 key={i}>
        {e.name}
      </h2>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input placeholder="Pick a number 1-3" onChange={e => this.handleInput(e)} />
        <button onClick={this.getData}>Submit</button>
        {peopleList}
      </div>
    );
  }
}

export default App;
