import React from "react";
import products from "../data/Products.json";

interface Products {
  img: string;
  title: String;
  price: number;
}
const Products: React.FC = () => {
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
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
