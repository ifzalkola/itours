import React from 'react';
import { connect } from 'react-redux';

import TourCard from '../tour-card/tour-card';
import withSpinner from '../withSpinner/with-spinner';

import './tours-preview.scss';
import {
  selectAllTours,
  selectAreToursLoaded
} from '../../redux/tour/tour-selectors';

const ToursPreview = ({ tours }) => {
  return (
    <div>
      <h1 className="tours-heading">All Tours</h1>
      <div className="tours-preview">
        {tours.map(({ _id, ...props }, index) => (
          <TourCard key={_id} {...props} />
        ))}
      </div>
    </div>
  );
};
const ToursPreviewWithSpinner = withSpinner(ToursPreview);
const ToursPreviewContainer = props => {
  return <ToursPreviewWithSpinner isLoading={props.loading} {...props} />;
};
const mapStateToProps = state => ({
  tours: selectAllTours(state),
  loading: !selectAreToursLoaded(state)
});
export default connect(mapStateToProps)(ToursPreviewContainer);
