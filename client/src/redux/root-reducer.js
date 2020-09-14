import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import tourReducer from './tour/tour-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tour: tourReducer
});

export default rootReducer;
