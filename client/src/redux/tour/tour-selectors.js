import { createSelector } from 'reselect';

export const selectTour = state => state.tour.tour;
export const selectAllTours = state => state.tour.tours;
export const selectAreToursLoaded = createSelector(selectAllTours, tours =>
  tours.length ? true : false
);
export const selectIsTourLoaded = slug =>
  createSelector(selectTour, tour =>
    tour ? (tour.slug === slug ? true : false) : false
  );
