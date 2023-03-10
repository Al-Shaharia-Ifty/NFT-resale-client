import React from "react";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/5.jpg";

function Blogs() {
  return (
    <div>
      <div className="lg:p-20 mt-10 text-xl text-justify mx-10 lg:mx-0">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="lg:flex lg:flex-row-reverse bg-gray-900 p-10 rounded-lg justify-between gap-10 mt-32 lg:mt-0"
        >
          <div className="w-full lg:w-4/5">
            <p>
              NFTs have been making waves in the digital art world over the past
              few years, with some tokens selling for millions of dollars. As
              the market continues to grow and evolve, it can be difficult to
              keep up with the latest trends and identify the most promising
              NFTs to invest in. In this blog post, we'll take a look at the top
              5 NFTs to watch out for in 2023.
            </p>
            <p>
              CryptoPunks: CryptoPunks are one of the most well-known NFT
              projects, and have become a symbol of the NFT craze. They consist
              of 10,000 unique 8-bit style characters, each with their own
              distinct features and traits. Some of the rarest CryptoPunks have
              sold for millions of dollars, and the project has become a
              cultural phenomenon.
            </p>
          </div>
          <div className="w-full lg:w-1/5">
            <img className="rounded-lg" src={img1} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:flex bg-gray-900 p-10 rounded-lg justify-between gap-10 mt-5"
        >
          <div className="w-full lg:w-4/5">
            <p>
              Art Blocks: Art Blocks is a platform for generative art NFTs,
              which are created by algorithms rather than individual artists.
              Each piece is unique and is generated when a buyer purchases the
              token. The platform has seen a surge in popularity over the past
              year, with some pieces selling for hundreds of thousands of
              dollars.
            </p>
            <p>
              Bored Ape Yacht Club: Bored Ape Yacht Club is a collection of
              10,000 unique NFTs, each featuring a different ape with its own
              personality and backstory. Members of the Bored Ape community gain
              access to exclusive merchandise, events, and experiences. The
              project has gained a large following and has seen significant
              price appreciation over the past year.
            </p>
          </div>
          <div className="w-full lg:w-1/5">
            <img className="rounded-lg" src={img2} alt="" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="lg:flex lg:flex-row-reverse bg-gray-900 p-10 rounded-lg justify-between gap-10 mt-5"
        >
          <div className="w-full lg:w-4/5">
            <p>
              World of Women: World of Women is a collection of 10,000 NFTs
              featuring a diverse group of women with unique traits and
              backstories. The project aims to promote gender equality and has
              gained a strong following within the NFT community. Some of the
              rarest World of Women NFTs have sold for tens of thousands of
              dollars.
            </p>
            <p>
              Board Ape Kennel Club: Board Ape Kennel Club is a spin-off of the
              Bored Ape Yacht Club, featuring a collection of 10,000 unique NFTs
              featuring dogs rather than apes. Each Kennel Club NFT comes with
              its own virtual doghouse and other perks. The project has gained a
              large following and has seen strong price appreciation over the
              past year.
            </p>
          </div>
          <div className="w-full lg:w-1/5">
            <img className="rounded-lg" src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
