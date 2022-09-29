import React from 'react'
import { Image } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer >

    <div className="footer">
      <div className="row">
    
        <div className="footer-icons">
          <a href="https://github.com/MarloweCrosland"><img className="icon" src={require("../../assets/icons/githubkitty.png")} alt="github logo" /></a>
          <a href="https://www.linkedin.com/in/marlowe-crosland-338b5a235/"><img className="icon" src={require("../../assets/icons/linkedin-logo-3.png")} alt="linkedin log" /></a>
        
          <div className="footer-text">
          2022 Marlowe Crosland
          </div> 

        </div>


      
      </div>
      
    </div>

  </footer>
  )
}
