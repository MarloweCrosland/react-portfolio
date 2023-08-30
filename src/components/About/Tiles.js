import React from 'react';
import './About.css'
import checkMark from './checkmark.png'

function StringsList() {
  const strings = ['Cardio Training', 'Calesthenics', 'Resistance Training', 'Flexibility Movements', 'Macro Calculations', 'Personalized Workouts'];

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