import React, { Component } from 'react';

class Aaron extends Component {
    constructor(props){
        super(props)

        this.state={
            name: this.props.person.name,
            email: this.props.person.email,
            jobTitle: this.props.person.jobTitle,
            userInput: '',
            emailInput: '',
            jobInput: ''

        }
        this.changeName = this.changeName.bind(this); 

    }

    
    changeName(val){
        if(val === ''){
            alert('Please Enter A Name')
        }
        this.setState({
            userInput: val
          })
      }

    changeEmail(val){
        this.setState({
            emailInput: val
        })
    }

    changeJobTitle(val){
        this.setState({
            jobInput: val
        })
    }
      

    render(){
        console.log(this.state.name)

        return(
            <div className="body">
                <h2>Name: {this.state.name} Email: {this.state.email} Job Title: {this.state.jobTitle}</h2>
                <input className='input' onChange={e => this.changeName(e.target.value)} placeholder={'Change Name...'} />
                <button onClick={() => this.setState({name: this.state.userInput})}>Submit</button>
                <input className='input' onChange={e => this.changeEmail(e.target.value)} placeholder={'Change Email...'} />
                <button onClick={() => this.setState({email: this.state.emailInput})}>Submit</button>
                <input className='input' onChange={e => this.changeJobTitle(e.target.value)} placeholder={'Change Job Title...'} />
                <button onClick={() => this.setState({jobTitle: this.state.jobInput})}>Submit</button>
            </div>
        )
    }
}

export default Aaron;