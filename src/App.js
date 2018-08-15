import React, { Component } from 'react';
import ValidationComponent from './react-16-assignment-2/components/ValidationComponent';
import CharComponent from './react-16-assignment-2/components/CharComponent';
class App extends Component {

  constructor(props){
    super();
    this.state ={
      textLength: null,
      text: ''
    }
  }
  showLength(event){
      this.setState({textLength: event.target.value.length, text:event.target.value});
  }
  render() {

    

    return (
      <div className="App">
        
        <input type="text" onChange={ (event) => this.showLength(event)} />
        <p>Length: {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength} />
        {
          Array.from(this.state.text.split(''))
                .map( curr => {
                  return <CharComponent char = {curr} />
                })
          }
        
        
      </div>
    );
  }
}

export default App;
