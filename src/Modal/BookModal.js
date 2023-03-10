import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BookModal = ({ data, setOpenModal, user }) => {
  const navigate = useNavigate();
  const { displayName, email } = user;
  const { _id, img, name, resalePrice } = data;
  const handleSubmit = (e) => {
    e.preventDefault();
    const postOrder = {
      displayName,
      email,
      img,
      name,
      resalePrice,
      paid: false,
    };
    const url = `https://nft-server.vercel.app/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Book Successful", "", "success");
        navigate("../dashboard");
        const update = {};
        if (data.acknowledged === true) {
          const url = `https://nft-server.vercel.app/update-product/${_id}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(update),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal text-white glass">
        <div className="modal-box relative">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg pt-2">{name}</h3>
          <p className="text-xl">Price: {resalePrice}$</p>
          <form onSubmit={handleSubmit} className="card-body py-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={displayName}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                value={email}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn ">Booked</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
