import React, { useEffect } from "react";

import ReactGA from "react-ga";
import styled from "styled-components";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginModalMobile from "./pages/login/LoginModalMobile";
import OtpBox from "./pages/register/OtpBox";
import ProductDetails from "./pages/productdetails/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerDetails from "./pages/customer/CustomerDetails";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e6e9;
`;
function App() {
  useEffect(() => {
    ReactGA.initialize("UA-212016838-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container>
      <Router>
      <ToastContainer/>
      {/* <Navbar/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/moblogin">
            <LoginModalMobile />
          </Route>
          <Route path="/otp">
            <OtpBox />
          </Route>
          <Route path="/details/:id">
            <ProductDetails/>
          </Route>
          <Route path="/checkout">
            <CheckOutPage/>
          </Route>
          <Route path="/address">
          <CustomerDetails/>
          </Route>
          <Route path="*">
     <PageNotFound/>
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </Container>
  );
}

export default App;
