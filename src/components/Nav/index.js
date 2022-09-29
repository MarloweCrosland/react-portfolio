import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import './style.css'

function Navi() {
const [categories] = useState([
  {
    name: 'About Me',
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
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);


// map over each of the items and make it an html element
    return (
        <nav class="nav justify-content-end">
          <ul className="nav">
          {categories.map((category) => (
            <li className={`nav-link ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span className="navitem"
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
       </ul>
        </nav>
      );
}

export default Navi;