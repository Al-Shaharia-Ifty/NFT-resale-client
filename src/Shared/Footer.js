import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 ">
      <div className="bg-gray-800 flex justify-center items-center lg:p-20 p-10">
        <div className="text-center text-white lg:w-3/5 md:w-4/5 w-full">
          <h1 className="text-3xl font-bold">CryptoArt</h1>
          <h3 className="text-4xl font-semibold mt-5">
            Join Now For Early Access
          </h3>
          <p className="mt-3 text-lg">
            Morbi non dignissim erat, a blandit felis nec lorem vel orci varius
            congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi
            molestie, sit amet ornare
          </p>
          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="input w-2/3 mr-3"
            />
            <button className="btn w-1/3 hover:text-purple-500 duration-300 hover:border-purple-500">
              Submit
            </button>
          </div>
          <div className="text-2xl flex gap-5 justify-center mt-5">
            <i className="hover:text-purple-500 duration-300 fa-brands fa-facebook"></i>
            <i className="hover:text-purple-500 duration-300 fa-brands fa-twitter"></i>
            <i className="hover:text-purple-500 duration-300 fa-brands fa-youtube"></i>
            <i className="hover:text-purple-500 duration-300 fa-brands fa-instagram"></i>
            <i className="hover:text-purple-500 duration-300 fa-brands fa-telegram"></i>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="pb-3 px-10">
        <h3>&copy; {currentYear} NFT. All Rights Reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
