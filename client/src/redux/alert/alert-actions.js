import alertActionTypes from './alert-types';
export const setSuccessAlert = successMessage => ({
  type: alertActionTypes.SET_SUCCESS_ALERT,
  payload: successMessage
});
export const setErrorAlert = errorMessage => ({
  type: alertActionTypes.SET_ERROR_ALERT,
  payload: errorMessage
});
export const removeAlert = () => ({
  type: alertActionTypes.REMOVE_ALERT
});
export const showAlert = (message, type) => {
  return dispatch => {
    type === 'success'
      ? dispatch(setSuccessAlert(message))
      : dispatch(setErrorAlert(message));
    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  };
};
