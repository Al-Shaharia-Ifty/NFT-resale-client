import React from "react";
import Advertised from "../Components/Advertised";
import Header from "../Components/Header";
import HightQuality from "../Components/HightQuality";
import RiseNFT from "../Components/RiseNFT";
import WebNumberInfo from "../Components/WebNumberInfo";

const Home = () => {
  return (
    <div>
      <Header />
      <RiseNFT />
      <HightQuality />
      <Advertised />
      <WebNumberInfo />
    </div>
  );
};

export default Home;
