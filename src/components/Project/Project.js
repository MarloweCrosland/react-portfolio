import React from "react";
import { Image } from "react-bootstrap";
import galleryImg1 from "./galleryImg1.png";
import galleryImg2 from "./galleryImg2.jpg";
import "./Project.css";

export default function Project() {
  return (
    <div class="container project-container">
      <h1 class="heading font-1">My Projects</h1>
      <div className="row">
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
          <a
            className="links"
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

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
          <a className="links" href="https://codetrip-33a81.web.app">
            <h6 id="heading">Genu: Restaurant Website Generator</h6>
            <img
              src={galleryImg2}
              className="img-thumbnail"
              alt="Genu thumbnail"
            />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
          <a
            className="links"
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
    </div>
  );
}
