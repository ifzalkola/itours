import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import tourReducer from './tour/tour-reducer';
import alertReducer from './alert/alert-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tour: tourReducer,
  alert: alertReducer
});

export default rootReducer;
