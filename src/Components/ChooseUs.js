import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import Typewriter from "typewriter-effect";

const ChooseUs = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <h2 className="text-4xl text-center my-10 text-white">
        Why Choose <span className="text-purple-500">Us</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 lg:mx-20 gap-10 ">
        <div className="border-2 border-gray-600 hover:border-purple-500 duration-500 p-5 text-white hover:bg-gray-800 hover:shadow-xl hover:shadow-purple-500 lg:mt-5 lg:mb-5">
          <h3 className="text-2xl mb-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counterOn && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Huge <span style='color: #a855eb;'>Collection</span>"
                      )
                      .start();
                  }}
                />
              )}
            </ScrollTrigger>
          </h3>
          <p>
            A collection of 5,000 unique NEOHs built to go beyond the digital
            space that will unlock numerous benefits for our community.
          </p>
        </div>
        <div className="border-2 border-gray-600 hover:border-purple-500 duration-500 p-5 text-white hover:bg-gray-800 hover:shadow-xl hover:shadow-purple-500 lg:mt-10">
          <h3 className="text-2xl mb-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counterOn && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "High <span style='color: #a855eb;'>Quality</span>"
                      )
                      .start();
                  }}
                />
              )}
            </ScrollTrigger>
          </h3>
          <p>
            The NEOH collection includes dozens of rare heads, costumes, and
            colorways of the artist's palette. They are drawn with great care.
          </p>
        </div>
        <div className="border-2 border-gray-600 hover:border-purple-500 duration-500 p-5 text-white hover:bg-gray-800 hover:shadow-xl hover:shadow-purple-500 lg:mt-5 lg:mb-5">
          <h3 className="text-2xl mb-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counterOn && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Top <span style='color: #a855eb;'>Resource</span>"
                      )
                      .start();
                  }}
                />
              )}
            </ScrollTrigger>
          </h3>
          <p>
            Tasty design resources made with care for each pixel. Tokens, NFTs,
            metaverse and game resources. Access additional drops.
          </p>
        </div>
        <div className="border-2 border-gray-600 hover:border-purple-500 duration-500 p-5 text-white hover:bg-gray-800 hover:shadow-xl hover:shadow-purple-500 lg:mt-10">
          <h3 className="text-2xl mb-5">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              {counterOn && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Big <span style='color: #a855eb;'>Community</span>"
                      )
                      .start();
                  }}
                />
              )}
            </ScrollTrigger>
          </h3>
          <p>
            Be part of a community of neoh owners and create user generated
            items. Rent, advertise, lounch stores, create items.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
