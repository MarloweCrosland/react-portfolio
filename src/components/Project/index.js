import React from 'react';
import { Image } from 'react-bootstrap';
import galleryImg1 from './galleryImg1.png';
import galleryImg2 from './galleryImg2.png';


export default function Project() {
  return (
    <div class="container">
        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">My Projects</h1>
    <div className="row">
        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={galleryImg1} className='img-thumbnail' alt='Project 1 thumbnail' />
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={galleryImg2} className='img-thumbnail' alt='project 2 thumbnail' />
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={galleryImg1} className='img-thumbnail' alt='project 3 thumbnail' />
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={galleryImg2} className='img-thumbnail' alt='project 4 thumbnail' />
        </div>

        </div>
    </div>
  
  );
}