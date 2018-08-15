import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super();
    this.state ={
      text: null
    }
  }
  showLength(event){
      this.setState({text: event.target.value.length});
  }
  render() {
    return (
      <div className="App">
        
        <input type="text" onChange={ (event) => this.showLength(event)} />
        <p>Length: {this.state.text}</p>
      </div>
    );
  }
}

export default App;
