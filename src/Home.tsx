import React, { useContext } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { Appcontext } from "./store/Reducer";

export const Home: React.FC = () => {
  const { state } = useContext(Appcontext);
  console.log(state);

  return (
    <div className="sm:ml-16 sm:mr-16">
      <div className="nav">
        {" "}
        <Nav />
      </div>

      <div className="banner sm:ml-10 sm:mr-10 sm:mt-5 ">
        <Banner />
      </div>
      <div className="products flex flex-wrap mt-10">
        {" "}
        <Products />
      </div>
    </div>
  );
};
