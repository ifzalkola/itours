import userActionTypes from './user-types';

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_STATUS
});
export const setCurrentUser = user => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});
