import tourActionTypes from './tour-types';
import Axios from 'axios';

export const fetchToursStart = () => ({
  type: tourActionTypes.FETCH_TOURS_START
});
export const fetchToursSuccess = tours => ({
  type: tourActionTypes.FETCH_TOURS_SUCCESS,
  payload: tours
});
export const fetchToursFailure = error => ({
  type: tourActionTypes.FETCH_TOURS_FAILURE,
  payload: error
});
export const fetchTourStart = () => ({
  type: tourActionTypes.FETCH_TOUR_START
});
export const fetchTourSuccess = tour => ({
  type: tourActionTypes.FETCH_TOUR_SUCCESS,
  payload: tour
});
export const fetchTourFailure = error => ({
  type: tourActionTypes.FETCH_TOUR_FAILURE,
  payload: error
});
export const fetchToursStartAsync = () => {
  return dispatch => {
    dispatch(fetchToursStart());
    Axios.get('/api/tours')
      .then(res => dispatch(fetchToursSuccess(res.data.data.tours)))
      .catch(err => dispatch(fetchToursFailure(err.message)));
  };
};
export const fetchTourBySlugAsync = slug => {
  return dispatch => {
    dispatch(fetchTourStart());
    Axios.get(`/api/tours/get-tour-by-slug/${slug}`)
      .then(res => dispatch(fetchTourSuccess(res.data.data.tour)))
      .catch(err => dispatch(fetchTourFailure(err.message)));
  };
};
