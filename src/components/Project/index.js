import React from 'react';
import { Image } from 'react-bootstrap';
import galleryImg1 from './galleryImg1.png';
import galleryImg2 from './galleryImg2.png';


export default function Project() {
  return (
    <div class="container project-container">
        <h1 class="heading">My Projects</h1>
    <div className="row">
        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <a className="links" href='https://www.w3schools.com'>
                <h6 id="heading">Camp Firecast</h6>
                <img src={galleryImg1} className='img-thumbnail' alt='project 3 thumbnail' />
            </a>

            
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <a className="links" href='https://www.w3schools.com'>
                <h6 id="heading">Camp Firecast</h6>
                <img src={galleryImg2} className='img-thumbnail' alt='project 2 thumbnail' />
            </a>
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <a className="links" href='https://www.w3schools.com'>
                <h6 id="heading">Camp Firecast</h6>
                <img src={galleryImg1} className='img-thumbnail' alt='project 3 thumbnail' />
            </a>
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <a className="links" href='https://www.w3schools.com'>
                <img src={galleryImg2} className='img-thumbnail' alt='project 4 thumbnail' />
                <h6 id="heading">Camp Firecast</h6>
            </a>
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <a className="links" href='https://www.w3schools.com'>
                <img src={galleryImg1} className='img-thumbnail' alt='project 3 thumbnail' />
                <h6 id="heading">Camp Firecast</h6>
            </a>
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <a className="links" href='https://www.w3schools.com'>
                <img src={galleryImg2} className='img-thumbnail' alt='project 4 thumbnail' />
                <h6 id="heading">Camp Firecast</h6>
            </a>
        </div>

        </div>
    </div>
  
  );
}