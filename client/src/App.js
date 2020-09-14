import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import TourOverviewPage from './pages/tour-overview/tour-overview';
import Footer from './components/footer/footer';
import { checkUserSession } from './redux/user/user-actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchToursStartAsync } from './redux/tour/tour-actions';

library.add(faMapMarked, faClock, faStar, faRupeeSign, faStarHalf, fab);
function App({ checkUserSession, currentUser, fetchToursStart }) {
  useEffect(() => {
    checkUserSession();
    fetchToursStart();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ToursPreview} />
        <Route exact path="/tours/:slug" component={TourOverviewPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
      <Footer />
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  fetchToursStart: () => dispatch(fetchToursStartAsync())
});
const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
