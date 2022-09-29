import React, { useEffect} from "react";
import { Image } from 'react-bootstrap';

function Navi(props) {


  const navitems = [
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ];


// map over each of the items and make it an html element
    return (
        <nav>
          <ul className="nav nav-tabs">
          {navitems.map((item) => (
        <li
          className="nav-item"
          key={item.name}
        >
          <span className="nav-link">
            {item.name}
          </span>
        </li>
      ))}
       </ul>
        </nav>
      );
}

export default Navi;