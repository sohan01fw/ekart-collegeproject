import React, { useContext } from "react";
import products from "../data/Products.json";
import { ActionState, Appcontext } from "../store/Reducer";

interface Products {
  img: string;
  title: string;
  price: number;
}

const Products: React.FC = () => {
  const { dispatch } = useContext(Appcontext);
  const getProducts = (data: Products) => {
    const action: ActionState = {
      type: "ADD_PRODUCT",
      payload: data,
    };
    dispatch(action);
  };
  return (
    <>
      {products.map((data: Products) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl m-10 ml-24">
            <figure>
              <img src={data.img} alt="" className="w-[20rem]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p className="text-green-500 font-bold text-xl">${data.price}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => getProducts(data)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
