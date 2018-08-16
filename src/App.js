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
    //this.remove = this.remove.bind(this);
  }
  showLength(event){
      this.setState({textLength: event.target.value.length, text:event.target.value});
  }

  remove(index){
    let text  = this.state.text.aplit('');
    text.splice(index,1);
    text = text.join('');
    this.setState({text:text});

    //text.splice(index,1);
    console.log(`New text: ${text}`);
    //this.setState({text: text});
    
  }
  render() {

    const charStyles={
      border:'1px solid #cecece',
      marginLeft:'40px' 
    };

    return (
     
      <div className="App">
        
        <input type="text" onChange={ (event) => this.showLength(event)} />
        <p>Length: {this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength} />
        {
          Array.from(this.state.text.split(''))
                .map( (curr,idx) => {
                  return <CharComponent style={charStyles} key = {idx} char = {curr} onClick= {()=>this.remove(idx)} />
                })
          }
        
        
      </div>
    );
  }
}

export default App;
