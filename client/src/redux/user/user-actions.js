import userActionTypes from './user-types';
import axios from 'axios';
import { showAlert } from '../alert/alert-actions';

export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
export const signUpSuccess = user => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user
});
export const signUpFailure = error => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
});
export const signOutSuccess = user => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
  payload: user
});
export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});
export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});
export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});
export const signInStart = userCredentials => {
  return async dispatch => {
    axios
      .post('/api/users/signin', userCredentials)
      .then(res => {
        dispatch(signInSuccess(res.data.data.user));
        dispatch(showAlert('Signed In Successfully', 'success'));
      })
      .catch(err => {
        dispatch(showAlert(err.response.data.message, 'error'));
      });
  };
};
export const signUpStart = userCredentials => {
  return dispatch => {
    axios
      .post('/api/users', userCredentials)
      .then(res => dispatch(signUpSuccess(res.data.data.user)))
      .catch(err => {
        dispatch(showAlert(err.response.data.message, 'error'));
      });
  };
};
export const signOutStart = () => {
  return dispatch => {
    axios
      .post('/api/users/signout')
      .then(res => dispatch(signOutSuccess(null)))
      .catch(err => dispatch(signOutFailure(err.message)));
  };
};
export const checkUserSession = () => {
  return dispatch => {
    axios
      .post('/api/users/isLoggedIn')
      .then(res => dispatch(setCurrentUser(res.data.user)))
      .catch(err => dispatch(setCurrentUser(null)));
  };
};
