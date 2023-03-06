import React from "react";
import Advertised from "../Components/Advertised";
import ChooseUs from "../Components/ChooseUs";
import Header from "../Components/Header";
import HightQuality from "../Components/HightQuality";
import Investors from "../Components/Investors";
import Items from "../Components/Items";
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
      <Items />
      <ChooseUs />
      <Investors />
    </div>
  );
};

export default Home;
