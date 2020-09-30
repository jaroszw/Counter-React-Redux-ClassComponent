import React from 'react';
import Counters from '../counters'
import Total from '../Total'
import Max from '../Max'
import './App.css';

import {Provider } from 'react-redux';
import {createStore} from 'redux'
import combineReducers from '../../reducers'
import CreateCounter from '../CreateCounter';

const store = createStore(combineReducers)

function App(){

  return (
    <Provider store={store}>
      <div className='main'>
        <CreateCounter />
        <Counters />
        <div>
          <Total />
          <Max />
        </div>
      </div>
    </Provider>
  )
}

export default App;
