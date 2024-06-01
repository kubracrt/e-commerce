import React from "react";
import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";
import NavbarCategory from "./NavbarCategory";
import { useState } from "react";

const Navbar = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <div className="flex items-center justify-between ">
        <NavbarLeft />
        <NavbarCategory setCategory={setCategory} />
        <NavbarRight />
      </div>
      <div className="border-b  w-full text-2xl mt-2"></div>
    </div>
  );
};

export default Navbar;
