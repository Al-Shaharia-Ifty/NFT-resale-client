import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0
        ? setStickyClass("fixed top-0 left-0 bg-[#17171A]")
        : setStickyClass("relative bg-transparent");
    }
  };
  return (
    <div>
      <div
        className={`hidden mb-[-80px] lg:flex p-4 text-white ${stickyClass} z-40 w-full duration-500`}
      ></div>
    </div>
  );
};

export default Navbar;
