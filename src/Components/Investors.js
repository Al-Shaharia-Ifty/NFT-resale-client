import React, { useState } from "react";
import w1 from "../Assets/1.png";
import w2 from "../Assets/2.png";
import w3 from "../Assets/3.png";
import w4 from "../Assets/4.png";
import w5 from "../Assets/5.png";
import ScrollTrigger from "react-scroll-trigger";

const Investors = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn && (
          <div className="mt-10 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-4xl p-10 text-center">
              Our <span className="text-purple-400">Investors</span>
            </h2>
            <div className="flex flex-wrap justify-center pb-20 gap-4 pt-10">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="500"
                src={w1}
                alt=""
                className="p-14 bg-gray-600 rounded-xl"
              />
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="600"
                src={w2}
                alt=""
                className="p-14 bg-gray-600 rounded-xl"
              />
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="700"
                src={w3}
                alt=""
                className="p-14 bg-gray-600 rounded-xl"
              />
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="800"
                src={w4}
                alt=""
                className="p-14 bg-gray-600 rounded-xl"
              />
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="900"
                src={w5}
                alt=""
                className="p-14 bg-gray-600 rounded-xl"
              />
            </div>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default Investors;
