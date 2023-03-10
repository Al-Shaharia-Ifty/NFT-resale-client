import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from "typewriter-effect";
import SingleCart from "./SingleCart";
import ScrollTrigger from "react-scroll-trigger";

const Advertised = () => {
  const [counterOn, setCounterOn] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
  const advertises = allItems?.filter((i) => i.advertised === true);

  return (
    <div>
      <div>
        <div className="text-center text-4xl font-bold text-purple-500">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            {counterOn && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Advertised Items").start();
                }}
              />
            )}
          </ScrollTrigger>
        </div>

        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            className=""
          >
            {advertises?.map((a, i) => (
              <div
                key={i}
                className="m-10 hover:shadow-xl rounded-lg hover:shadow-purple-500 duration-500"
              >
                <SingleCart a={a} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Advertised;
