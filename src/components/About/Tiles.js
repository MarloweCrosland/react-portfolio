import React from 'react';
import './About.css'
import checkMark from './checkmark.png'

function StringsList() {
  const strings = ['JavaScript ES6+', 'CSS', 'HTML', 'SQL', 'NoSQL', 'Git', 'GitHub', 'MongoDB', 'MySQL', 'Express', 'React', 'Node', 'NPM', 'Handlebars', 'jQuery', 'Bootstrap', 'Firebase', 'Heroku'];

  return (

      <>
        {strings.map(str => (
           
          <p className='tiles list font-2'key={str}>
            <img className='check'src={checkMark} alt='checkmark icon'/>
            {str}
            </p>
        ))}

    </>
  );
}

export default StringsList;