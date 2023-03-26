import React from "react";
import galleryImg1 from "./galleryImg1.png";
import galleryImg2 from "./galleryImg2.jpg";
import galleryImg3 from "./galleryImg3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Project.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Project modal</h4>
        <p>
          conditionally render information about my role here
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Project() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="project_container">
      <div className="project">
        <a
          className="project_links"
          href="https://marlowecrosland.github.io/stardaze/"
        >
          <h6 id="heading">StarDaze</h6>
          <img
            src={galleryImg3}
            className="img-thumbnail"
            alt="StarDaze thumbnail"
          />
        </a>
        <Button className="role-button" onClick={() => setModalShow(true)}>
          My role
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
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
        <Button className="role-button" onClick={() => setModalShow(true)}>
          My role
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
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
        <Button className="role-button" onClick={() => setModalShow(true)}>
          My role
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}
