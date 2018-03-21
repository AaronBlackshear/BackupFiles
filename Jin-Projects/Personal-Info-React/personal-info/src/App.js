import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';



class App extends Component {
  constructor(){
    super()

    this.state = {
      names: [
      {name: 'Aaron', email: 'aaron@devmtn.com', jobTitle: 'Student'},
      {name: 'Jacob', email: 'jacob@devmtn.com', jobTitle: 'Student'},
      {name: 'Joe', email: 'joseph@devmtn.com', jobTitle: 'Student'},
      {name: 'Jarid', email: 'jarid@devmtn.com', jobTitle: 'Student'},
      {name: 'Jin', email: 'jin@devmtn.com', jobTitle: 'Mentor'}
    ]
  }
}




  render() {
    let nameList = this.state.names.map((cur,index) => {
      return (
        <Person person={cur} key={index}/>
      )
    });
    return (
      <div className="App">
        <div className="person">{nameList}</div>
      </div>
    );
  }
}

export default App;
