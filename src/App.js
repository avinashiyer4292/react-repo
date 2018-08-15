import React, { Component } from 'react';
import ValidationComponent from './react-16-assignment-2/components/ValidationComponent';
class App extends Component {

  constructor(props){
    super();
    this.state ={
      textLength: null
    }
  }
  showLength(event){
      this.setState({textLength: event.target.value.length});
  }
  render() {
    return (
      <div className="App">
        
        <input type="text" onChange={ (event) => this.showLength(event)} />
        <p>Length: {this.state.text}</p>
        <ValidationComponent length={this.state.textLength} />
      </div>
    );
  }
}

export default App;
