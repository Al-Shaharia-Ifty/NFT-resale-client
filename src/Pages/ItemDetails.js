import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import BookModal from "../Modal/BookModal";
import Loading from "../Shared/Loading";

function ItemDetails() {
  const [openModal, setOpenModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  const params = useParams();
  const { data: itemDetails, isLoading } = useQuery({
    queryKey: ["itemDetails"],
    queryFn: () =>
      fetch(`https://nft-server.vercel.app/item-details/${params.id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading || loading) {
    return <Loading />;
  }
  const {
    name,
    email,
    img,
    originalPrice,
    resalePrice,
    sellerName,
    time,
    verified,
  } = itemDetails;
  return (
    <div>
      <div className="lg:grid grid-cols-2 mx-10 lg:m-20 gap-10 ">
        <div className="">
          <img className="rounded-lg" src={img} alt="" />
        </div>
        <div className="grid grid-cols-3 rounded-lg border-2 h-full p-10 text-2xl text-white">
          <h3>NFT Name</h3>
          <h3 className="col-span-2">: {name}</h3>
          <h3>Email</h3>
          <h3 className="col-span-2">: {email}</h3>
          <h3>Original Price</h3>
          <h3 className="col-span-2 text-red-600">: {originalPrice}$</h3>
          <h3>Resale Price</h3>
          <h3 className="col-span-2 text-green-600">: {resalePrice}$</h3>
          <h3>Seller Name</h3>
          <h3 className="col-span-2">
            : {sellerName}{" "}
            {verified === "true" && <i class="fa-duotone fa-badge-check"></i>}
          </h3>
          <h3>Time</h3>
          <h3 className="col-span-2">: {time}</h3>
          <label
            htmlFor="book-modal"
            onClick={() => setOpenModal(name)}
            className="btn bg-purple-600 text-white border-0"
          >
            Book Now
          </label>
        </div>
      </div>
      {openModal && (
        <BookModal data={itemDetails} setOpenModal={setOpenModal} user={user} />
      )}
    </div>
  );
}

export default ItemDetails;
