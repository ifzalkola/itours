import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import {
  faMapMarked,
  faRupeeSign,
  faStar,
  faClock,
  faStarHalf
} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in/sign-in-and-sign-up';
import ToursPreview from './components/tours-preview/tours-preview';
import TourOverview from './pages/tour-overview/tour-overview';
import Footer from './components/footer/footer';
import { checkUserSession } from './redux/user/user-actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

library.add(faMapMarked, faClock, faStar, faRupeeSign, faStarHalf, fab);
function App({ checkUserSession }) {
  useEffect(() => {
    checkUserSession();
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ToursPreview} />
        <Route exact path="/tour" component={TourOverview} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(null, mapDispatchToProps)(App);
