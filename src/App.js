import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'

class App extends Component {

  state = {
    characters: 0,
    userInput: ''
  }


  inputChangedHandler = (event) => {

    let length = event.target.value.length

    this.setState({

      characters: length,
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange = {this.inputChangedHandler} 
               value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation length={this.state.characters}  />
      </div>
    );
  }
}

export default App;
