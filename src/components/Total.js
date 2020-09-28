import React, {Component} from 'react';
import {connect} from 'react-redux';


class Total extends Component{
  render(){

    const {counters} = this.props;

    return (
      <div>
        <h1>{counters.reduce((acc, value) => acc + value)}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counters
  }
}

export default connect(mapStateToProps)(Total);