import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const WebNumberInfo = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn && (
          <div className="md:p-20 p-10 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-1 gap-10 border-2 border-gray-400 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500 duration-1000 bg-black">
            <div className="text-center">
              <CountUp
                className="text-4xl font-bold text-purple-900"
                end={9999}
                start={0}
                duration={1}
              />

              <p>Total items</p>
            </div>
            <div className="divider">{"//"}</div>
            <div className="text-center">
              <CountUp
                className="text-4xl font-bold text-purple-900"
                end={3900}
                start={0}
                duration={1.5}
              />
              <p>Total Owner</p>
            </div>
            <div className="divider md:hidden lg:flex">{"//"}</div>
            <div className="text-center">
              <CountUp
                className="text-4xl font-bold text-purple-900"
                end={2400}
                start={0}
                duration={2}
              />
              <p>Floor Price (ETH)</p>
            </div>
            <div className="divider">{"//"}</div>
            <div className="text-center">
              <CountUp
                className="text-4xl font-bold text-purple-900"
                end={144000}
                start={0}
                duration={2.5}
              />
              <p>Volume Traded</p>
            </div>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
};

export default WebNumberInfo;
