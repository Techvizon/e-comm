import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUP from "./Components/Account/SignUP";
import SignIN from "./Components/Account/SignIN";
import Landingpage from "./Components/LandingPage/landingpage";
import Product from "./Components/ProductPage/ProductPage";
import Cat from "./Components/CategoryPage/CategoryPage"
import Navbar from "./Components/Commons/Navbar/navbar";
import Navsub from "./Components/Commons/NavBarsub/navbarsub";
import Prolist from "./Components/Product-Listing/productlisting";


const Routes = () => {


    return(
        <>
       

        <Router>
        <Navbar/>
        <Navsub/>
            <Switch>

                <Route path="/" component={Prolist} exact={true}  />
                <Route path="/product" component={Product} exact={true}  />
                <Route path="/signup" component={SignUP} exact={true}  />
                <Route path="/signin" component={SignIN} exact={true}  />
                <Route path="/categories" component={Cat} exact={true}  />

            </Switch>


        </Router>
</>
    )


}

export default Routes;