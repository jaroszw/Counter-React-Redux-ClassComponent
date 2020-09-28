import React from 'react';
import Counters from '../counter'
import Total from '../Total'
import Max from '../Max'
import './App.css';

import {Provider } from 'react-redux';
import {createStore} from 'redux'
import combineReducers from '../../reducers'

const store = createStore(combineReducers)

function App(){

  return (
    <Provider store={store}>
      <div className='main'>
        <h1>COUNT </h1>
        <Counters />
        <Total />
        <Max />
      </div>
    </Provider>
  )
}

export default App;
