import React from 'react'
import './Resume.css'
import pdf from './mc-resume.pdf';

export default function Resume() {
  return (
    <h2 id="resume-link" className="resume">
      <iframe className="animation"src="https://giphy.com/embed/he8ng6mnnlXcETGopJ" href={pdf} download target="blank" width="471" height="480" frameBorder="0" ></iframe>
          <a className='font-1' href={pdf} download target="_blank">Click here to download my resume</a>
    </h2>

  )
}
