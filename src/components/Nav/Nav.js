import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import "../../style.css";
import "./Nav.css";

function Navi(props) {
  //destructure out the props so they are availible for return
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    pageSelected,
    setPageSelected,
  } = props;

  //changes the tab value to current category
  //fist arg is cb function, second arg directs hook to re render on change
  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory]);

  //map over each of the items and make it an html element
  return (
    <nav className="nav justify-content-end">
      <h4 className="title-name font-2"></h4>
      <ul className="nav">
        {categories.map((category) => (
          <li
            className={`nav-link ${
              currentCategory.name === category.name && "navActive"
            }`}
            key={category.name}
          >
            <span
              className="navitem"
              onClick={() => {
                setPageSelected(category.name);
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
