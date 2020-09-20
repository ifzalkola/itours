import alertActionTypes from './alert-types';
const INITIAL_STATE = {
  message: '',
  type: ''
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case alertActionTypes.SET_SUCCESS_ALERT:
      return {
        message: action.payload,
        type: 'success'
      };
    case alertActionTypes.SET_ERROR_ALERT:
      return {
        message: action.payload,
        type: 'error'
      };
    case alertActionTypes.REMOVE_ALERT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default alertReducer;
