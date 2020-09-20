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

import SignInAndSignUp from './pages/sign-in/sign-in-and-sign-up';
import TourOverviewPage from './pages/tour-overview/tour-overview';
import Header from './components/header/header';
import Alert from './components/alert/alert';
import ToursPreview from './components/tours-preview/tours-preview';
import Footer from './components/footer/footer';
import { checkUserSession } from './redux/user/user-actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchToursStartAsync } from './redux/tour/tour-actions';

library.add(faMapMarked, faClock, faStar, faRupeeSign, faStarHalf, fab);
function App({
  checkUserSession,
  currentUser,
  fetchToursStart,
  alertMessage,
  alertType
}) {
  useEffect(() => {
    checkUserSession();
    fetchToursStart();
  }, []);

  return (
    <div className="App">
      {alertMessage.length ? (
        <Alert message={alertMessage} type={alertType} />
      ) : null}
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
const mapStateToProps = ({
  user: { currentUser },
  alert: { message, type }
}) => ({
  currentUser,
  alertMessage: message,
  alertType: type
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
