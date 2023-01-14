import React from 'react'
import { Image, ToggleButton } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer >

    <div className="footer footer-bottom">
      <div className="row">
    
        <div className="footer-icons">
          <a href="https://github.com/MarloweCrosland" target="_blank"><img className="icon" src={require("../../assets/icons/githubkitty.png")} alt="github logo" /></a>
          <a href="https://www.linkedin.com/in/marlowe-crosland-338b5a235/" target="_blank"><img className="icon" src={require("../../assets/icons/linkedin-logo-3.png")} alt="linkedin log" /></a>

        

        </div>


      
      </div>
      
    </div>

  </footer>
  )
}
