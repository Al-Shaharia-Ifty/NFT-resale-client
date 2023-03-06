import React from "react";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Assets/2.jpg";
import img2 from "../Assets/5.jpg";
import img3 from "../Assets/6.jpg";
import img4 from "../Assets/7.jpg";
import img5 from "../Assets/8.jpg";
import "swiper/css";
import "swiper/css/effect-cards";

const HightQuality = () => {
  return (
    <div>
      <div className="lg:flex h-full overflow-hidden">
        <div className="text-white w-full lg:w-1/2 px-10 py-10 flex items-center">
          <div>
            <h2 className="text-4xl">High Quality NFT Collection</h2>
            <div className="flex items-center text-slate-600">
              <div className="divider w-72"></div>
              {"//"}
            </div>
            <p>
              High Quality NFT Collection is a website that curates a variety of
              Non-Fungible Tokens (NFTs) from some of the leading platforms in
              the industry. The website features a vast range of NFTs from a
              variety of categories such as gaming, art, collectibles, and more.
              Each NFT is hand-picked by the curators and is 100% authentic and
              backed by the original creators.
            </p>
            <p className="mt-5">
              The website also allows users to easily search and purchase their
              desired NFTs. The website also provides a range of support
              services such as customer service, tutorials, and a forum.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aso-duration="5000"
          className="w-full lg:w-1/2 p-20"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HightQuality;
