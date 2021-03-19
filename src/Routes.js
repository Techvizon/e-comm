import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUP from "./Components/Account/SignUP";
import Landingpage from "./Components/LandingPage/landingpage";
import Product from "./Components/ProductPage/ProductPage";


const Routes = () => {


    return(

        <Router>

            <Switch>

                <Route path="/" component={Landingpage} exact={true}  />
                <Route path="/product" component={Product} exact={true}  />
                <Route path="/signup" component={SignUP} exact={true}  />

            </Switch>


        </Router>

    )


}

export default Routes;