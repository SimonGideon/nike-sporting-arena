import React from "react";
import { useState } from "react";
import { links, menu_icons } from "../assets/constants";
import { Turn as Hamburger } from "hamburger-react";
import "./styles.css";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-between gap-1 text-white w-screen p-4">
      <div className="flex justify-between items-center gap-4">
      <Hamburger className="mx-12" toggled={isOpen} toggle={setOpen} />
        <div className="flex gap-2">
        {links.map((link, i) => (
          <li key={i} className=" mx-8 flex list-none ">
            <a key={i} className="font uppercase" href={link.to}>
              {link.name}
            </a>
          </li>
        ))}
        </div>
      </div>
      <div className="right-menu flex gap-8">
        {menu_icons.map((icon, i) => (
          <img key={i}  className="w-6" src={icon.icon} alt={icon.alt} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
