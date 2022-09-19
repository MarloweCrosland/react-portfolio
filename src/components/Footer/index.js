import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Footer() {
  return (
    <footer>

<div className="container">
    <div className="row">
      

      
      <div className="col-lg-4">
        <img className="icon" src={require("../../assets/icons/githubkitty.png")} alt="github logo" />
        <img className="icon" src={require("../../assets/icons/linkedin-logo-3.png")} alt="linkedin log" />
      </div>
      
    </div>
  </div>
  <div className="copyright text-center">
    Copyright &copy; 2022 <span>Marlowe Crosland</span>
  </div>
  </footer>
  )
}
