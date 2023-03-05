import React from "react";
import img1 from "../Assets/1.jpg";

const RiseNFT = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-between py-20">
        <div className="lg:order-last w-full lg:w-2/5 text-white text-justify pr-10 lg:flex lg:items-center py-10 px-10">
          <div>
            <h3 className="text-2xl font-bold md:text-4xl">The Rise of NFT</h3>
            <div className="divider w-72"></div>
            <p>
              NFTs (non-fungible tokens) are digital assets that are unique,
              indivisible, and non-interchangeable. They have been gaining
              popularity in recent years as an alternative to traditional art,
              gaming, and collectible markets. NFTs are secured and stored on a
              blockchain, making them immutable and tamper-proof. NFTs can
              represent any type of digital asset, from artwork to gaming items,
              to digital tickets and certificates. They can also be used to
              create digital collectibles, such as virtual trading cards,
              digital art, and even virtual real estate. The rise of NFTs has
              been fueled by the increasing use of blockchain technology and the
              emergence of new digital markets. The NFT market has seen a surge
              in activity in 2020 due to the increasing interest in digital
              assets and the emergence of new projects and platforms. This has
              created a vibrant NFT ecosystem that is bringing together a wide
              range of players and applications.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/5 back-img bg-no-repeat bg-right h-[670px] flex items-center justify-center">
          <img
            className="w-80 lg:relative lg:right-[-250px] rounded-lg"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RiseNFT;
