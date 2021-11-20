import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import Hero  from "../../components/Hero";
import Products  from "../../components/Products";
import PopularPro from "../../components/PopularPro";
import ProductCol3 from "../../components/ProductCol3";
import ProductCol4 from "../../components/ProductCol4";
import Offer from "../../components/Offer_Sale";
import FarmsTv from "../../components/FarmsTv";
import Faarmoji from "../../components/Faarmoji";
import Partners from "../../components/Partners";
import Footer from "../../components/Footer";
import {Helmet} from "react-helmet";
function Home() {
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Faarms | Home</title>
               
            </Helmet>
      <Navbar />
      <div>
        <Hero />
        <Products />
        <PopularPro />
        <ProductCol3 />
        <ProductCol4 />
        <Offer />
        <FarmsTv />
        <Faarmoji />
        <Partners />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
