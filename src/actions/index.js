export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

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