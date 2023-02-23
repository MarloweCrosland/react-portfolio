import React from "react";
import galleryImg1 from "./galleryImg1.png";
import galleryImg2 from "./galleryImg2.jpg";
import "./Project.css";

export default function Project() {
  return (
    <div className="project_container">
      <div className="project">
          <a
            className="project_links"
            href="https://mwjones2186.github.io/camp-firecast/"
          >
            <h6 id="heading">Camp Firecast</h6>
            <img
              src={galleryImg1}
              className="img-thumbnail"
              alt="Camp Firecast thumbnail"
            />
          </a>
        </div>

        <div className="project">
          <a className="project_links" href="https://codetrip-33a81.web.app">
            <h6 id="heading">Genu: Restaurant Website Generator</h6>
            <img
              src={galleryImg2}
              className="img-thumbnail"
              alt="Genu thumbnail"
            />
          </a>
        </div>

        <div className="project">
          <a
            className="project_links"
            href="https://mwjones2186.github.io/camp-firecast/"
          >
            <h6 id="heading">Camp Firecast</h6>
            <img
              src={galleryImg1}
              className="img-thumbnail"
              alt="project 3 thumbnail"
            />
          </a>
        </div>
    </div>
  );
}
