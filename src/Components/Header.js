import React from "react";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper";
import img1 from "../Assets/1-1.jpg";
import img2 from "../Assets/15.jpg";
import img3 from "../Assets/16.jpg";
import img4 from "../Assets/17.jpg";
import img5 from "../Assets/18.jpg";
import "swiper/css";
import "swiper/css/effect-cards";

const Header = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#1C121E] via-[#550B75] to-[#320C69] min-h-screen lg:flex items-center overflow-hidden">
        <div className="w-full lg:w-1/2">
          <h2 className="mx-10 lg:text-4xl md:text-3xl text-2xl text-center lg:text-start justify-center font-semibold text-gray-200 pt-[100px] lg:pt-0 pb-10">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Unlock the Potential of Blockchain Based Assets")
                  .pauseFor(1000)
                  .deleteChars(6)
                  .typeString("Digital Assets with Our NFT Platform!")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aso-duration="5000"
          className="w-full lg:w-1/2"
        >
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <img src={img5} alt="" />
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
              <img src={img1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;
