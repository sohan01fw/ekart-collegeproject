import React, { useContext } from "react";
import Nav from "./Nav";
import { Appcontext } from "../store/Reducer";

const Cart: React.FC = () => {
  const { state } = useContext(Appcontext);

  const { products } = state;

  return (
    <>
      <Nav />
      <div className="flex flex-col m-10 ">
        {products.map((data) => {
          return (
            <div className="card  h-40 glass m-5 flex flex-row ">
              <figure>
                <img src={data.img} alt="img" className="h-44 w-44 p-2 m-4 " />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p className="text-green-500 font-bold text-xl">
                  ${data.price}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">place order</button>
                </div>
              </div>
            </div>
          );
        })}
        <h1></h1>
      </div>
    </>
  );
};

export default Cart;
