import Image from 'react-bootstrap/Image';
import React from 'react';

export default function Project() {
  return (
    <div class="container">
        <h1 className="fw-light text-center text-lg-start mt-4 mb-0">My Projects</h1>
    <div className="row">
        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={require('../../assets/project-1/img-1.png')} className='img-thumbnail' alt='Sample' />
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={require('../../assets/project-3/mountain+background.png')} className='img-thumbnail' alt='Sample' />
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={require('../../assets/project-4/mountain+background.png')} className='img-thumbnail' alt='Sample' />
        </div>

        <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe'>
            <img src={require('../../assets/project-2/img-1.png')} className='img-thumbnail' alt='Sample' />
        </div>

        </div>
    </div>
  
  );
}