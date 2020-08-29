import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in/sign-in-and-sign-up";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
