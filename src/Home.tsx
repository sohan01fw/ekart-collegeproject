import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Products from "./components/Products";

import Footer from "./components/Footer";

export const Home: React.FC = () => {
  return (
    <div className="">
      <div className="nav">
        <Nav />
      </div>

      <div className="banner sm:ml-10 sm:mr-10 sm:mt-5 ">
        <Banner />
      </div>
      <div className="products flex flex-wrap mt-10">
        <Products />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
