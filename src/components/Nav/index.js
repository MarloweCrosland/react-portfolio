import React, { useEffect } from "react";
import { Nav } from 'react-bootstrap';
import './style.css'

function Navi(props) {

//destructure out the props so they are availible for return
    const {
      categories = [],
      setCurrentCategory,
      currentCategory,
    } = props;

//changes the tab value to current category
//fist arg is cb function, second arg directs hook to re render on change
    useEffect(() => {
      document.title = currentCategory.name;
    }, [currentCategory]);


//map over each of the items and make it an html element
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