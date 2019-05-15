export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_RECEIVED = 'FETCH_RECEIVED';

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  }
}

const fetchReceived = (data) => {
  return {
    type: FETCH_RECEIVED,
    payload: data,
  }
}

export const fetchQuote = () => {
  return function(dispatch){
    
    dispatch(fetchRequest());
 
  fetch('https://thesimpsonsquoteapi.glitch.me/quotes?number')
    .then(function(response){
    
      return response.json();
    
  }).then(function(data){
      
      let selected = data[0];
     dispatch(fetchReceived(selected));
    
    });
  }
} 