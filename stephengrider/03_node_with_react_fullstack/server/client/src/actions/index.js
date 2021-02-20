import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// Normal Action Creator
// const fetchUser = async () => {
  // ACTION:
  // const { data } = await axios.get('/api/current_user');
  // return {
    //   type: FETCH_USER,
    //   payload: data
    // }
    
    // REDUXTHUNK: Looks for a function to pass dispatch to
    // Version 1:
//   };
  
// REDUXTHUNK: Looks for a function to pass dispatch to
// Version 1:
// export const fetchUser = async () => {
//   return function(dispatch) {
//     axios.get('/api/current_user')
//     .then(response => dispatch({ type: FETCH_USER, payload: response }));
//   };
// };

// Version 2:
export const fetchUser = () => async (dispatch) => {
    const { data } = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: data });
};
  
export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: data });
};
  
export const submitSurvey = (values, history) => async (dispatch) => {
  const { data } = await axios.post('/api/surveys', values);
  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: data });
};

export const fetchSurveys = () => async (dispatch) => {
  const { data } = await axios.get('/api/surveys');
  dispatch({ type: FETCH_SURVEYS, payload: data });
};