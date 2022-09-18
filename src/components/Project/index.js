import Image from 'react-bootstrap/Image';
import React from 'react';

export default function Project() {
  return (
    <div class="container">
        <h1 class="fw-light text-center text-lg-start mt-4 mb-0">My Projects</h1>

        <div className='bg-image'>
            <img src={require('../../assets/project-1/img-1.png')} className='img-fluid' alt='Sample' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <p className='text-white mb-0'>Can you see me?</p>
            </div>

            {/* <img src={require('../../assets/project-1/img-1.png')} className='img-fluid' alt='Sample' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <p className='text-white mb-0'>Can you see me?</p>
            </div>

            <img src={require('../../assets/project-1/img-1.png')} className='img-fluid' alt='Sample' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <p className='text-white mb-0'>Can you see me?</p>
            </div>

            <img src={require('../../assets/project-1/img-1.png')} className='img-fluid' alt='Sample' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <p className='text-white mb-0'>Can you see me?</p>
            </div> */}
      </div>
    </div>
  
  

    </div>
  
  );
}