import React from "react";
import CountUp from "react-countup";

const WebNumberInfo = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aso-duration="5000"
        className="md:p-20 p-10 grid lg:grid-cols-7 md:grid-cols-3 grid-cols-1 gap-10 border-2 border-gray-400 hover:border-green-500 duration-300 bg-black"
      >
        <div className="text-center">
          <CountUp className="text-4xl font-bold text-purple-900" end={9999} />
          <p>Total items</p>
        </div>
        <div className="divider">{"//"}</div>
        <div className="text-center">
          <CountUp className="text-4xl font-bold text-purple-900" end={3900} />
          <p>Total Owner</p>
        </div>
        <div className="divider md:hidden lg:flex">{"//"}</div>
        <div className="text-center">
          <CountUp className="text-4xl font-bold text-purple-900" end={2400} />
          <p>Floor Price (ETH)</p>
        </div>
        <div className="divider">{"//"}</div>
        <div className="text-center">
          <CountUp
            className="text-4xl font-bold text-purple-900"
            end={144000}
          />
          <p>Volume Traded</p>
        </div>
      </div>
    </div>
  );
};

export default WebNumberInfo;
