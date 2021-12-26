import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUP from "./Components/Account/SignUP";
import SignIN from "./Components/Account/SignIN";
import Landingpage from "./Components/LandingPage/landingpage";
import Product from "./Components/ProductPage/ProductPage";
import Cat from "./Components/CategoryPage/CategoryPage";
import Navbar from "./Components/Commons/Navbar/navbar";
import Navsub from "./Components/Commons/NavBarsub/navbarsub";
import Prolist from "./Components/Product-Listing/productlisting";
import Ct from "./Components/TestPages/ct";
import PrivateRoute from "./Components/Commons/PrivateRoute";

const RoutesList = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Navsub />

        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/signin" element={<SignIN />} />
          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <Cat />
              </PrivateRoute>
            }
          />
          <Route path="/product/:type" element={<Prolist />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesList;
