import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class Counters extends Component{
  
  renderCounters(){
    return this.props.counters.map((value, i)=> {

      const {increment, decrement} = this.props;

      return (
        <div key={i}>
          <h1>{value}</h1>
          <button onClick={() => increment(i)}>+</button>
          <button onClick={() => decrement(i)}>-</button>
        </div>
      )
    })
  }
  
  render(){
    return (
      <div>
        {this.renderCounters()}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {  
    counters: state.counters
  } 
}

const mapDispatchToProps = () => {
  return {
    increment, 
    decrement
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counters);
