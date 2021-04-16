import React from "react";
import { Route, Switch } from "react-router";
import { Enterprenuers } from "../Components/Enterprenuers";
import { Landing } from "../Components/Landing";
import { Campaign } from "../Components/Campaign";
import { Navbar } from "../Components/Navigation/Navbar";
import { AuthPage } from "../Components/Auth/AuthPage";
import { Camp } from "../Components/CampAProject";
import { Basics } from "../Components/BasicsDonation";
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
        <Route exact path="/start-a-campaign">
          <Campaign />
        </Route>
        <Route path="/login">
          <AuthPage />
        </Route>
        <Route path={"/start-a-campaign/project"}>
          <Camp/>
        </Route>
        <Route path={"/campaigns/basics"}>
          <Basics/>
        </Route>
  
      </Switch>
    </>
  );
};
