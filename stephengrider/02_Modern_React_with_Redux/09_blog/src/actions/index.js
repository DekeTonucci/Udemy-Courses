import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    // .value(); // execute all the steps
};

// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());
  
//   const userIds = _.uniq(_.map(getState().posts, 'userId'));
//   userIds.forEach(id => dispatch(fetchUser(id)));
// };

export const fetchPosts = () => async dispatch => {
  const { data } = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: data });
};

export const fetchUser = (id) => async dispatch => {
  const { data } = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: data });
};


// Makes a request for every post to get the user of each post (10 times)
// export const fetchUser = (id) => async dispatch => {
//   const { data } = await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({ type: 'FETCH_USER', payload: data });
// }



// Memoized users. Only fetch a user once instead of everytime for a post
// export const fetchUser = (id) => dispatch => { 
//   _fetchUser(id, dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const { data } = await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({ type: 'FETCH_USER', payload: data });
// });

// memoized two:
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const { data } = await jsonPlaceholder.get(`/users/${id}`)
//   dispatch({ type: 'FETCH_USER', payload: data });
// });

