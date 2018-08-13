import { CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL } from './constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}) )
      .catch( error => dispatch({type: REQUEST_ROBOTS_FAIL, payload: error}) );
}
//We are only able to return a function like this b/c of redux-thunk
//Otherwise, every action MUST return an object.