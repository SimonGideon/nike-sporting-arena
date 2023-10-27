
import React from 'react';
import { links } from '../assets/constants';
const Navbar = () => { 
  return(
  <div>
    {
    links.map((link, i) => (
      <li key={i}>
        <a href={link.to}>{link.name}</a>
        </li>
    ))
    }
  </div>
)};

export default Navbar;
