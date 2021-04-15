import React from "react";
import { Route, Switch } from "react-router";
import { Enterprenuers } from "../Components/Enterprenuers";
import { Landing } from "../Components/Landing";
import { Campaign } from "../Components/Campaign";
import { Navbar } from "../Components/Navigation/Navbar";
import { AuthPage } from "../Components/Auth/AuthPage";
export const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/how-it-work">
          <Enterprenuers />
        </Route>
        <Route path="/start-a-campaign">
          <Campaign />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
      </Switch>
    </>
  );
};
