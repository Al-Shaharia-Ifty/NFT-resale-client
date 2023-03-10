import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleCart from "./SingleCart";

const Items = () => {
  const { data: allItems, isLoading } = useQuery({
    queryKey: ["allItems"],
    queryFn: () =>
      fetch(`https://nft-server.vercel.app/items`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className=" text-center text-4xl my-10 font-bold">
        All
        <span className="text-purple-500"> NFT</span> Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-10">
        {allItems?.map((a, i) => (
          <div
            key={i}
            className="m-5 hover:shadow-xl rounded-lg hover:shadow-purple-500 duration-500"
          >
            <SingleCart a={a} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
