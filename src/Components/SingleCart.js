import React from "react";
import { Link } from "react-router-dom";
import "../Css/Cart.css";

const SingleCart = ({ a }) => {
  const { _id, img, name, originalPrice, resalePrice } = a;
  return (
    <div>
      <Link to={`/item-details/${_id}`} className="relative cart-section">
        <img
          className="img-section bg-black hover:opacity-60 duration-300 rounded-lg"
          src={img}
          alt=""
        />
        <div className="absolute bottom-10 text-white left-5 hidden info-section duration-300">
          <h2 className="text-3xl mb-3 text-purple-400 font-bold">{name}</h2>
          <p>
            Original Price:
            <span className="text-red-500"> {originalPrice}$</span>
          </p>
          <p>
            Sell Price:<span className="text-green-500"> {resalePrice}$</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SingleCart;
