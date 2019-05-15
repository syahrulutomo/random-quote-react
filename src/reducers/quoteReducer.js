import {FETCH_REQUEST, FETCH_RECEIVED} from './../actions/async';

const defaultState = {
  isFetching: false,
  color: '#e74c3c',
  quote: 'Welcome to Quote Generator',
  author: 'Mr. X',
};

const themeChanger = () => {
  const arr = ['#1abc9c','#3498db','#f39c12','#c0392b'];
  const index = Math.floor(Math.random() * (3 - 0 + 1)) + 0  ;
  return arr[index];
}

const quoteReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_REQUEST:
      return { isFetching: true }
    case FETCH_RECEIVED:
    const color = themeChanger();
    console.log(color);
      return { isFetching: false, color: color, quote: action.payload['quote'], author: action.payload['character'] }
    default: 
      return state;
  }
}

export default quoteReducer;