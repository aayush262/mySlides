import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage";
import { Presentation } from "./Components/Presentation";

export const AppRoutes = () => {
    return(
        <Router>
            <Route exact path ='/' component={LandingPage}></Route>
            <Route exact path ='/posterslides' component={Presentation}></Route>
        </Router>
    )
}