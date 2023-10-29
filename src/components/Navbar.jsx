import React from "react";
import { useState } from "react";
import { links } from "../assets/constants";
import { Turn as Hamburger } from 'hamburger-react'
import "./styles.css";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="flex bg-red-400 text-white w-screen ">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="flex justify-between">
        {links.map((link, i) => (
          <li key={i} className="list-none ">
            <a href={link.to}>{link.name}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
