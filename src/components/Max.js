import React, {Component} from 'react';
import {connect} from 'react-redux';

class Max extends Component{
  render(){

    const {counters } = this.props;

    return(
      <div>
        <h1>Max: {Math.max(...counters)}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps)(Max)