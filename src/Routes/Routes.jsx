import React from "react";
import { Route, Switch } from "react-router";
import { Enterprenuers } from "../Components/Enterprenuers";
import { Landing } from "../Components/Landing";
import { Campaign } from "../Components/Campaign";
import { Navbar } from "../Components/Navigation/Navbar";
import { AuthPage } from "../Components/Auth/AuthPage";
import { ExploreCards } from "../Components/ExploreCards/ExploreCards";
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
        <Route path="/explorePage">
          <ExploreCards />
        </Route>
        <Route path="/start-a-campaign">
          <Campaign />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route>
          <h1>Error 404! Page Not Found</h1>
        </Route>
      </Switch>
    </>
  );
};
