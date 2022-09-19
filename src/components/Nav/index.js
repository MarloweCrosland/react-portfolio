import React, { useEffect} from "react";
import Nav from 'react-bootstrap/Nav';

function Navi(props) {


    // const {
    //     navitems = [],
    //     currentNavi,
    //     setCurrentNavi,

    // } = props;

    // useEffect(() => {
    //     document.title = currentNavi.name;
    //   }, [currentNavi]);



    return (
        <nav>
         <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" href="/about-me">About Me</a>
          </li>

          <li className="nav-item">
            <a className="nav-link"href="/portfolio">Portfolio</a>
          </li>

          <li className="nav-item">
            <a className="nav-link"href="/contact">Contact</a>
          </li>

          <li className="nav-item">
            <a className="nav-link"href="/resume">Resume</a>
          </li>
         </ul>
        </nav>
      );
}

export default Navi;