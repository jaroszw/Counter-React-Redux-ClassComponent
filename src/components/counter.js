import React from 'react';

const Counter = ({value, name, decrement, increment, index}) => {
  return (
    <div>
      <h1>{value}</h1>
      <h1>{name}</h1>
      <button onClick={() => increment(index)}>+</button>
      <button onClick={() => decrement(index)}>-</button>
    </div>
  )
}

export default Counter;