import tourActionTypes from './tour-types';

const INITIAL_STATE = {
  error: '',
  tours: [],
  tour: null,
  loading: true
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tourActionTypes.FETCH_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        loading: false
      };
    case tourActionTypes.FETCH_TOURS_START:
    case tourActionTypes.FETCH_TOUR_START:
      return {
        ...state,
        loading: true
      };
    case tourActionTypes.FETCH_TOUR_SUCCESS:
      return {
        ...state,
        tour: action.payload,
        loading: false
      };
    case tourActionTypes.FETCH_TOURS_FAILURE:
    case tourActionTypes.FETCH_TOUR_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default tourReducer;
