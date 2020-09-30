import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';
import Counter from "./counter";

class Counters extends Component{
  
  renderCounters(){
    return this.props.counters.map((counter, index)=> {

      const {increment, decrement} = this.props;

      return (
        <Counter 
          key={index} 
          index={index}
          value={counter.value} 
          name={counter.name}
          increment={increment}
          decrement={decrement}
        />
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
