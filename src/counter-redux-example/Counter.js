import React, {Component} from 'react';
import { connect } from 'react-redux';
import CounterOutput from './CounterOutput';
import CounterControl from './CounterControl'; 
class Counter extends Component{

    state={
        counter:0
    }

    render(){
        return(
            <div>
                <CounterOutput style={{'width':'100%', 'height':'30px', 'backgroundColor':'salmon'}} value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.addToCounter} />
                <CounterControl label="Subtract 10" clicked={this.props.subtractFromCounter} />
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        ctr : state.counter
    };
}

const mapDispatchActionToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({type: 'INCREMENT'}),
        decrementCounter: () => dispatch({type: 'DECREMENT'}),
        addToCounter: () => dispatch({type: 'ADD', payload: 10}),
        subtractFromCounter: () => dispatch({type: 'SUBTRACT', payload: 10})
    };
}

export default connect(mapStateToProps, mapDispatchActionToProps)(Counter);