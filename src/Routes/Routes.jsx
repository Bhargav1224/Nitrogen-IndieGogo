import React from "react";
import { Route, Switch } from "react-router";

import { Enterprenuers } from "../Components/Enterprenuers";
import { Landing } from "../Components/Landing";
import { Campaign } from "../Components/Campaign";
import { Navbar } from "../Components/Navigation/Navbar";
import { AuthPage } from "../Components/Auth/AuthPage";
import { Camp } from "../Components/CampAProject";
import { Basics } from "../Components/BasicsDonation";
import { ExploreCards } from "../Components/ExploreCards/ExploreCards";
import { PrivateRoute } from "./PrivateRoute";
import { EachCard } from "../Components/EachCard/EachCard";
import { Whatwedo } from "../Components/Whatwe-Do/Whatwedo";

export const Routes = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route path="/about-what-we-do">
					<Whatwedo />
				</Route>

				<Route path="/how-it-work">
					<Enterprenuers />
				</Route>
				<Route path="/explorePage">
					<ExploreCards />
				</Route>
				<Route exact path="/start-a-campaign">
					<Campaign />
				</Route>
				<Route path="/login">
					<AuthPage />
				</Route>
				<PrivateRoute path="/start-a-campaign/project">
					<Camp />
				</PrivateRoute>
				<PrivateRoute path="/campaigns/basics">
					<Basics />
				</PrivateRoute>
				<Route path="/campaign/:id">
					<EachCard />
				</Route>
				<Route>
					<h1>Error 404! Page Not Found</h1>
				</Route>
			</Switch>
		</>
	);
};
