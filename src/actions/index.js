export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const NEW_COUNTER = 'NEW_COUNTER';

export const increment = (index) => {
  return {
    type: INCREMENT,
    payload: {index}
  }
}

export const decrement = (index) => {
  return {
    type: DECREMENT,
    payload: {index}
  }
}

export const newCounter = (name) => {
  return {
    type: NEW_COUNTER,
    payload: {name}
  }
}
