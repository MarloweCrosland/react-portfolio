import React from 'react'
import pdf from './mc-resume.pdf';

export default function Resume() {
  return (
    <h2 id="resume-link">
          <a className='font-1' href={pdf} target="_blank">Click here to view my resume</a>
    </h2>

  )
}
